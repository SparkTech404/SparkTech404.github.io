"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, Star, GitFork, RefreshCw, AlertCircle, Calendar, Sparkles, Plus, Minus, Trash, ArrowRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RepoData {
  stars: number;
  forks: number;
  openIssues: number;
  lastCommitMessage: string;
  lastCommitDate: string;
  url: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  skinType: string;
  ingredients: string;
  description: string;
  color: string;
}

const elysofProducts: Product[] = [
  {
    id: "glutasof-facewash",
    name: "Glutasof Facewash",
    price: 199,
    rating: 4.8,
    category: "Brightening",
    skinType: "All Skin Types",
    ingredients: "Glutathione, Vitamin C, Kojic Acid",
    description: "Deep cleansing facewash that brightens skin tone, reduces hyperpigmentation, and promotes an even complexion.",
    color: "oklch(92% 0.04 120)",
  },
  {
    id: "neem-soap",
    name: "Pure Neem Soap",
    price: 99,
    rating: 4.9,
    category: "Anti-Acne",
    skinType: "Acne-prone & Oily",
    ingredients: "Pure Neem Oil, Basil, Organic Glycerin",
    description: "Handcrafted antibacterial bar that targets acne, reduces redness, and purifies pores without stripping moisture.",
    color: "oklch(55% 0.15 140)",
  },
  {
    id: "honey-almond-soap",
    name: "Honey & Almond Scrub Soap",
    price: 129,
    rating: 4.7,
    category: "Exfoliating",
    skinType: "Dry & Normal",
    ingredients: "Raw Honey, Crushed Almonds, Shea Butter",
    description: "2-in-1 exfoliating scrub soap that gently lifts dead skin cells while leaving skin deeply moisturized and glowing.",
    color: "oklch(85% 0.12 60)",
  },
  {
    id: "sandalwood-kesar-soap",
    name: "Sandalwood & Kesar Soap",
    price: 149,
    rating: 5.0,
    category: "Soothing",
    skinType: "Sensitive & Dry",
    ingredients: "Pure Sandalwood Extract, Saffron (Kesar), Almond Oil",
    description: "Divine soap bar that cools, brightens, and restores skin radiance with a lasting luxurious herbal fragrance.",
    color: "oklch(75% 0.15 80)",
  },
];

export function ElysofSkincareDemo() {
  const [repo, setRepo] = useState<RepoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeProduct, setActiveProduct] = useState<Product>(elysofProducts[0]);
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);
  const [promo, setPromo] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch GitHub API data for ElySof repo
  const fetchGithubData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch repo details
      const repoRes = await fetch("https://api.github.com/repos/SparkTech404/ElySof-web-v3");
      if (!repoRes.ok) throw new Error("API Limit exceeded or repo not found");
      const repoJson = await repoRes.json();

      // Fetch latest commit details
      const commitRes = await fetch("https://api.github.com/repos/SparkTech404/ElySof-web-v3/commits/main");
      let commitMessage = "No recent commits";
      let commitDate = "";
      if (commitRes.ok) {
        const commitJson = await commitRes.json();
        commitMessage = commitJson.commit.message;
        commitDate = new Date(commitJson.commit.author.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      }

      setRepo({
        stars: repoJson.stargazers_count,
        forks: repoJson.forks_count,
        openIssues: repoJson.open_issues_count,
        lastCommitMessage: commitMessage,
        lastCommitDate: commitDate,
        url: repoJson.html_url,
      });
    } catch (err: any) {
      setError(err.message || "Failed to query GitHub");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx > -1) {
        const newCart = [...prev];
        newCart[idx].qty += 1;
        return newCart;
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.product.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const discountAmt = isPromoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discountAmt;

  const applyPromo = () => {
    if (promo.trim().toUpperCase() === "ELYSOF10") {
      setIsPromoApplied(true);
    } else {
      alert("Invalid promo code! Try 'ELYSOF10'");
    }
  };

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--surface-border-subtle)",
        borderRadius: "var(--radius-md)",
        padding: "20px",
        fontFamily: "var(--font-geist), sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* GitHub Repository Live Stats Banner */}
      <div
        style={{
          background: "var(--surface-raised)",
          border: "1px solid var(--surface-border-subtle)",
          borderRadius: "var(--radius-sm)",
          padding: "10px 14px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div className="dot-volt" style={{ width: "6px", height: "6px", background: loading ? "#ff9a00" : "var(--volt)" }} />
            <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-geist-mono)", color: "var(--ink-2)", fontWeight: 700 }}>
              {loading ? "FETCHING GITHUB STATS..." : "LIVE GITHUB METRICS (ELYSOF)"}
            </span>
          </div>

          <button
            onClick={fetchGithubData}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--ink-3)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.6875rem",
              padding: 0,
              minHeight: "unset",
              minWidth: "unset",
            }}
          >
            <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} /> Sync
          </button>
        </div>

        {loading ? (
          <div style={{ fontSize: "0.75rem", color: "var(--ink-3)", marginTop: "6px" }}>Querying repo data from API stream...</div>
        ) : error ? (
          <div style={{ fontSize: "0.75rem", color: "oklch(60% 0.15 20)", marginTop: "6px", display: "flex", alignItems: "center", gap: "4px" }}>
            <AlertCircle className="w-3.5 h-3.5" /> fallback stats: 0 ★ · 0 forks · (Rate Limit Exceeded)
          </div>
        ) : repo ? (
          <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--ink)", display: "flex", alignItems: "center", gap: "4px", fontWeight: 600 }}>
                <Star className="w-3.5 h-3.5 text-volt fill-current" /> {repo.stars} stars
              </span>
              <span style={{ fontSize: "0.75rem", color: "var(--ink)", display: "flex", alignItems: "center", gap: "4px", fontWeight: 600 }}>
                <GitFork className="w-3.5 h-3.5 text-volt" /> {repo.forks} forks
              </span>
              <span style={{ fontSize: "0.75rem", color: "var(--ink-3)", display: "flex", alignItems: "center", gap: "4px" }}>
                <Calendar className="w-3.5 h-3.5" /> Commit: {repo.lastCommitDate}
              </span>
            </div>
            <div style={{ fontSize: "0.6875rem", color: "var(--ink-2)", fontStyle: "italic", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Last Message: "{repo.lastCommitMessage}"
            </div>
          </div>
        ) : null}
      </div>

      {/* Main Skincare Shop Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "20px" }} className="services-grid">
        
        {/* Product details and switchers */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <span style={{ fontSize: "0.6875rem", color: "var(--ink-3)", fontWeight: 600 }}>SELECT PRODUCT</span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginTop: "4px" }}>
              {elysofProducts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProduct(p)}
                  style={{
                    background: activeProduct.id === p.id ? "var(--surface-high)" : "var(--surface-raised)",
                    border: activeProduct.id === p.id ? "1px solid var(--volt-border)" : "1px solid var(--surface-border-subtle)",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: activeProduct.id === p.id ? "var(--volt)" : "var(--ink)",
                    textAlign: "left",
                    cursor: "pointer",
                    minWidth: "unset",
                    minHeight: "unset",
                    transition: "all 150ms ease",
                  }}
                >
                  {p.name.replace(" Soap", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Active Product Panel */}
          <div
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--surface-border-subtle)",
              borderRadius: "10px",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="tag tag-volt" style={{ background: `${activeProduct.color}22`, color: activeProduct.color, borderColor: `${activeProduct.color}55` }}>
                {activeProduct.category}
              </span>
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--volt)" }}>
                ₹{activeProduct.price}
              </span>
            </div>

            <h5 style={{ fontSize: "0.9375rem", margin: 0, fontWeight: 700, color: "var(--ink)" }}>
              {activeProduct.name}
            </h5>

            <p style={{ fontSize: "0.75rem", color: "var(--ink-2)", margin: 0, lineHeight: 1.4 }}>
              {activeProduct.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "0.6875rem", borderTop: "1px solid var(--surface-border-subtle)", paddingTop: "8px" }}>
              <div>
                <span style={{ color: "var(--ink-3)", fontWeight: 600 }}>SKIN TYPE:</span>{" "}
                <span style={{ color: "var(--ink)" }}>{activeProduct.skinType}</span>
              </div>
              <div>
                <span style={{ color: "var(--ink-3)", fontWeight: 600 }}>INGREDIENTS:</span>{" "}
                <span style={{ color: "var(--ink)", fontStyle: "italic" }}>{activeProduct.ingredients}</span>
              </div>
            </div>

            <button
              onClick={() => addToCart(activeProduct)}
              className="btn-volt"
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "0.75rem",
                borderRadius: "6px",
                marginTop: "4px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right side: Interactive Cart Showcase */}
        <div
          style={{
            background: "var(--surface-raised)",
            border: "1px solid var(--surface-border-subtle)",
            borderRadius: "10px",
            padding: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            height: "100%",
            minHeight: "280px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--surface-border-subtle)", paddingBottom: "8px" }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--ink)", display: "flex", alignItems: "center", gap: "6px" }}>
              <ShoppingCart className="w-4 h-4 text-volt" /> Cart ({cart.reduce((s, i) => s + i.qty, 0)})
            </span>
            {cart.length > 0 && (
              <button
                onClick={() => setCart([])}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--ink-3)",
                  fontSize: "0.65rem",
                  cursor: "pointer",
                  padding: 0,
                  minHeight: "unset",
                  minWidth: "unset",
                }}
              >
                Clear All
              </button>
            )}
          </div>

          {/* Cart Items List */}
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", maxHeight: "150px" }}>
            {cart.length === 0 ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: "100px", color: "var(--ink-3)", gap: "6px" }}>
                <ShoppingCart className="w-6 h-6 stroke-[1.5]" />
                <span style={{ fontSize: "0.75rem" }}>Cart is empty</span>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--surface-border-subtle)",
                    borderRadius: "6px",
                    padding: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)" }}>{item.product.name.replace(" Soap", "")}</span>
                    <span style={{ fontSize: "0.6875rem", color: "var(--volt)" }}>₹{item.product.price} each</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {/* Quantity selectors */}
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "var(--surface-raised)", borderRadius: "4px", padding: "2px" }}>
                      <button
                        onClick={() => updateQty(item.product.id, -1)}
                        style={{ border: "none", background: "transparent", color: "var(--ink)", cursor: "pointer", padding: "2px", minHeight: "unset", minWidth: "unset" }}
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-geist-mono)", padding: "0 4px" }}>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.product.id, 1)}
                        style={{ border: "none", background: "transparent", color: "var(--ink)", cursor: "pointer", padding: "2px", minHeight: "unset", minWidth: "unset" }}
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      style={{ border: "none", background: "transparent", color: "var(--ink-3)", cursor: "pointer", padding: "2px", minHeight: "unset", minWidth: "unset" }}
                    >
                      <Trash className="w-3.5 h-3.5 hover:text-red-400 transition" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Pricing Summary */}
          {cart.length > 0 && (
            <div style={{ borderTop: "1px solid var(--surface-border-subtle)", paddingTop: "8px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--ink-3)" }}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--ink-3)" }}>
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              {isPromoApplied && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--volt)" }}>
                  <span>Promo (10%)</span>
                  <span>-₹{discountAmt.toFixed(0)}</span>
                </div>
              )}
              
              {/* Promo input */}
              {!isPromoApplied ? (
                <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
                  <input
                    type="text"
                    placeholder="Promo code (ELYSOF10)"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    style={{
                      flex: 1,
                      fontSize: "0.6875rem",
                      padding: "4px 8px",
                      background: "var(--surface)",
                      border: "1px solid var(--surface-border-subtle)",
                      borderRadius: "4px",
                      color: "#fff",
                      outline: "none",
                    }}
                  />
                  <button
                    onClick={applyPromo}
                    style={{
                      background: "var(--volt)",
                      color: "#000",
                      border: "none",
                      borderRadius: "4px",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      padding: "4px 8px",
                      cursor: "pointer",
                      minHeight: "unset",
                      minWidth: "unset",
                    }}
                  >
                    Apply
                  </button>
                </div>
              ) : (
                <div style={{ fontSize: "0.65rem", color: "var(--volt)", fontWeight: 600 }}>✓ Promo code 'ELYSOF10' active!</div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", borderTop: "1px solid var(--surface-border-subtle)", paddingTop: "6px", marginTop: "4px" }}>
                <span>Total</span>
                <span style={{ color: "var(--volt)" }}>₹{total.toFixed(0)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
