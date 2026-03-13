import { ProductCard } from "@/components/ProductCard";
import {
  CATEGORIES,
  PRODUCTS,
  type StaticProduct,
  TOP_BRANDS,
} from "@/data/products";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface HomePageProps {
  wishlist: number[];
  onWishlistToggle: (id: number) => void;
  onAddToCart: (product: StaticProduct) => void;
  onProductClick: (product: StaticProduct) => void;
  onCategoryClick: (category: string) => void;
}

export function HomePage({
  wishlist,
  onWishlistToggle,
  onAddToCart,
  onProductClick,
  onCategoryClick,
}: HomePageProps) {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/assets/generated/hero-banner.dim_1200x500.jpg"
          alt="Men's Fashion"
          className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center">
          <div className="ml-8 sm:ml-16">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white/80 text-sm font-medium tracking-widest uppercase mb-2"
            >
              New Season
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Men&apos;s
              <br />
              <span className="text-myntra-pink">Fashion</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 mt-2 text-sm sm:text-base"
            >
              Up to 70% off on top brands
            </motion.p>
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => onCategoryClick("T-Shirts")}
              className="mt-6 bg-myntra-pink text-white px-8 py-3 font-semibold text-sm tracking-wider hover:bg-pink-600 transition-colors rounded-sm"
            >
              SHOP NOW
            </motion.button>
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => onCategoryClick("Suits & Blazers")}
            className="cursor-pointer rounded-sm overflow-hidden relative h-36 sm:h-48 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center group w-full text-left"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_#fff_0%,_transparent_70%)]" />
            <div className="relative z-10 pl-8">
              <p className="text-white/70 text-xs tracking-widest uppercase mb-1">
                Formal Collection
              </p>
              <h3 className="text-white text-2xl font-bold font-display">
                Suits &amp;
                <br />
                Blazers
              </h3>
              <p className="text-myntra-pink text-sm font-semibold mt-1">
                Upto 50% OFF
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-28 h-full opacity-30 bg-gradient-to-l from-white" />
            <span className="absolute bottom-4 right-4 text-white/60 text-xs font-medium group-hover:text-white transition-colors flex items-center gap-1">
              Explore <ChevronRight className="w-3 h-3" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => onCategoryClick("Ethnic Wear")}
            className="cursor-pointer rounded-sm overflow-hidden relative h-36 sm:h-48 bg-gradient-to-br from-amber-900 to-orange-950 flex items-center group w-full text-left"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_#fbbf24_0%,_transparent_70%)]" />
            <div className="relative z-10 pl-8">
              <p className="text-amber-300/70 text-xs tracking-widest uppercase mb-1">
                Festive Ready
              </p>
              <h3 className="text-white text-2xl font-bold font-display">
                Ethnic
                <br />
                Wear
              </h3>
              <p className="text-amber-400 text-sm font-semibold mt-1">
                Starting ₹799
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-28 h-full opacity-30 bg-gradient-to-l from-amber-700" />
            <span className="absolute bottom-4 right-4 text-amber-300/60 text-xs font-medium group-hover:text-amber-300 transition-colors flex items-center gap-1">
              Explore <ChevronRight className="w-3 h-3" />
            </span>
          </button>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-myntra-charcoal">
            Shop by Category
          </h2>
          <button
            type="button"
            className="text-sm text-myntra-pink font-semibold flex items-center gap-1 hover:underline"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto scroll-hide pb-2 sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 sm:overflow-x-visible sm:pb-0">
          {CATEGORIES.map((cat, idx) => (
            <motion.button
              type="button"
              key={cat.id}
              data-ocid={`categories.item.${idx + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => onCategoryClick(cat.name)}
              className="flex-shrink-0 w-24 sm:w-auto cursor-pointer group text-left"
            >
              <div className="relative overflow-hidden rounded">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-xs font-semibold text-myntra-charcoal mt-2 group-hover:text-myntra-pink transition-colors">
                {cat.name}
              </p>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-myntra-charcoal">
            Trending Now
          </h2>
          <button
            type="button"
            className="text-sm text-myntra-pink font-semibold flex items-center gap-1 hover:underline"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
          {PRODUCTS.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx + 1}
              onProductClick={onProductClick}
              onWishlistToggle={onWishlistToggle}
              onAddToCart={onAddToCart}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </section>

      {/* Top Brands */}
      <section className="bg-myntra-lightgray py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-myntra-charcoal text-center mb-6">
            Top Brands
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TOP_BRANDS.map((brand) => (
              <button
                type="button"
                key={brand}
                className="bg-white px-5 py-3 rounded border border-border shadow-sm hover:shadow-card hover:border-myntra-pink transition-all cursor-pointer text-sm font-bold text-myntra-charcoal"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
