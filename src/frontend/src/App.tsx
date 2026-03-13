import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { PRODUCTS, type StaticProduct } from "@/data/products";
import { CartSheet } from "@/pages/CartSheet";
import { HomePage } from "@/pages/HomePage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { ProductListPage } from "@/pages/ProductListPage";
import { WishlistSheet } from "@/pages/WishlistSheet";
import { useState } from "react";
import { toast } from "sonner";

type Page =
  | { type: "home" }
  | { type: "category"; category: string }
  | { type: "product"; product: StaticProduct }
  | { type: "search"; query: string };

interface CartItem {
  product: StaticProduct;
  size: string;
  color: string;
  quantity: number;
}

export default function App() {
  const [page, setPage] = useState<Page>({ type: "home" });
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      if (prev.includes(id)) {
        toast.success("Removed from wishlist");
        return prev.filter((i) => i !== id);
      }
      toast.success("Added to wishlist ❤️");
      return [...prev, id];
    });
  };

  const addToCart = (product: StaticProduct, size = "", color = "") => {
    const sz = size || product.sizes[0] || "M";
    const col = color || product.colors[0] || "Default";
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.size === sz,
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.size === sz
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [...prev, { product, size: sz, color: col, quantity: 1 }];
    });
    toast.success(`${product.brand} added to bag!`);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== id));
  };

  const handleNavigate = (target: string) => {
    if (target === "home") setPage({ type: "home" });
    else setPage({ type: "home" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (q: string) => {
    setPage({ type: "search", query: q });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (category: string) => {
    setPage({ type: "category", category });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProductClick = (product: StaticProduct) => {
    setPage({ type: "product", product });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentPageType = page.type === "product" ? "product" : page.type;

  const renderPage = () => {
    if (page.type === "home") {
      return (
        <HomePage
          wishlist={wishlist}
          onWishlistToggle={toggleWishlist}
          onAddToCart={addToCart}
          onProductClick={handleProductClick}
          onCategoryClick={handleCategoryClick}
        />
      );
    }
    if (page.type === "category") {
      return (
        <ProductListPage
          category={page.category}
          wishlist={wishlist}
          onWishlistToggle={toggleWishlist}
          onAddToCart={addToCart}
          onProductClick={handleProductClick}
          onNavigateHome={() => setPage({ type: "home" })}
        />
      );
    }
    if (page.type === "product") {
      return (
        <ProductDetailPage
          product={page.product}
          wishlist={wishlist}
          onWishlistToggle={toggleWishlist}
          onAddToCart={addToCart}
          onNavigateHome={() => setPage({ type: "home" })}
          onNavigateCategory={handleCategoryClick}
        />
      );
    }
    if (page.type === "search") {
      const results = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(page.query.toLowerCase()) ||
          p.brand.toLowerCase().includes(page.query.toLowerCase()) ||
          p.category.toLowerCase().includes(page.query.toLowerCase()),
      );
      return (
        <ProductListPage
          category={
            results.length > 0
              ? `Search: "${page.query}"`
              : `No results for "${page.query}"`
          }
          wishlist={wishlist}
          onWishlistToggle={toggleWishlist}
          onAddToCart={addToCart}
          onProductClick={handleProductClick}
          onNavigateHome={() => setPage({ type: "home" })}
        />
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar
        cartCount={cartItems.length}
        wishlistCount={wishlist.length}
        onCartOpen={() => setCartOpen(true)}
        onWishlistOpen={() => setWishlistOpen(true)}
        onSearch={handleSearch}
        onNavigate={handleNavigate}
        currentPage={currentPageType}
      />

      <div className="flex-1">{renderPage()}</div>

      <Footer />

      <CartSheet
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onProductClick={handleProductClick}
      />

      <WishlistSheet
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        products={wishlistedProducts}
        onRemove={toggleWishlist}
        onAddToCart={addToCart}
        onProductClick={handleProductClick}
      />

      <Toaster position="bottom-right" />
    </div>
  );
}
