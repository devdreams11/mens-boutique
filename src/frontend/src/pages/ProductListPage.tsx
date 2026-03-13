import { ProductCard } from "@/components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRODUCTS, type StaticProduct } from "@/data/products";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

interface ProductListPageProps {
  category: string;
  wishlist: number[];
  onWishlistToggle: (id: number) => void;
  onAddToCart: (product: StaticProduct) => void;
  onProductClick: (product: StaticProduct) => void;
  onNavigateHome: () => void;
}

const BRANDS = [
  "Roadster",
  "Peter England",
  "Levis",
  "Jack & Jones",
  "Manyavar",
  "Nike",
  "HRX",
  "Arrow",
  "Van Heusen",
  "Puma",
];
const SIZES = ["S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36"];

export function ProductListPage({
  category,
  wishlist,
  onWishlistToggle,
  onAddToCart,
  onProductClick,
  onNavigateHome,
}: ProductListPageProps) {
  const [sortBy, setSortBy] = useState("recommended");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const allProducts = useMemo(() => {
    const filtered = PRODUCTS.filter((p) => {
      if (
        category &&
        category !== "All" &&
        !category.startsWith("Search:") &&
        !category.startsWith("No results")
      ) {
        if (p.category !== category) return false;
      }
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand))
        return false;
      if (
        selectedSizes.length > 0 &&
        !p.sizes.some((s) => selectedSizes.includes(s))
      )
        return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });

    const sorted = [...filtered];
    if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") sorted.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "popularity")
      sorted.sort((a, b) => b.reviewCount - a.reviewCount);

    if (sorted.length === 0) return PRODUCTS;
    return sorted;
  }, [category, selectedBrands, selectedSizes, priceRange, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const FilterPanel = (
    <div data-ocid="filters.panel" className="space-y-6">
      {/* Brand filter */}
      <div>
        <h4 className="font-semibold text-myntra-charcoal text-sm mb-3 uppercase tracking-wider">
          Brand
        </h4>
        <div className="space-y-2 max-h-48 overflow-y-auto scroll-hide">
          {BRANDS.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
                className="border-border data-[state=checked]:bg-myntra-pink data-[state=checked]:border-myntra-pink"
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-sm text-myntra-gray cursor-pointer"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold text-myntra-charcoal text-sm mb-3 uppercase tracking-wider">
          Price Range
        </h4>
        <div className="space-y-2">
          {(
            [
              [0, 500],
              [500, 1000],
              [1000, 2000],
              [2000, 5000],
              [5000, 10000],
            ] as [number, number][]
          ).map(([min, max]) => (
            <div key={`${min}-${max}`} className="flex items-center gap-2">
              <Checkbox
                id={`price-${min}-${max}`}
                checked={priceRange[0] === min && priceRange[1] === max}
                onCheckedChange={() => setPriceRange([min, max])}
                className="border-border data-[state=checked]:bg-myntra-pink data-[state=checked]:border-myntra-pink"
              />
              <label
                htmlFor={`price-${min}-${max}`}
                className="text-sm text-myntra-gray cursor-pointer"
              >
                ₹{min.toLocaleString("en-IN")} - ₹{max.toLocaleString("en-IN")}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Size filter */}
      <div>
        <h4 className="font-semibold text-myntra-charcoal text-sm mb-3 uppercase tracking-wider">
          Size
        </h4>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              type="button"
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-2.5 py-1 text-xs border rounded transition-colors ${
                selectedSizes.includes(size)
                  ? "border-myntra-pink bg-myntra-pink/10 text-myntra-pink font-semibold"
                  : "border-border text-myntra-gray hover:border-myntra-charcoal"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Discount filter */}
      <div>
        <h4 className="font-semibold text-myntra-charcoal text-sm mb-3 uppercase tracking-wider">
          Discount
        </h4>
        <div className="space-y-2">
          {[
            "10% and above",
            "20% and above",
            "30% and above",
            "40% and above",
            "50% and above",
          ].map((d) => (
            <div key={d} className="flex items-center gap-2">
              <Checkbox
                id={d}
                className="border-border data-[state=checked]:bg-myntra-pink data-[state=checked]:border-myntra-pink"
              />
              <label
                htmlFor={d}
                className="text-sm text-myntra-gray cursor-pointer"
              >
                {d}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center gap-1 text-xs text-myntra-gray">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-myntra-pink"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3" />
          <span>Men</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-myntra-charcoal font-semibold">{category}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Header + Sort */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-myntra-charcoal">
              {category}
            </h1>
            <p className="text-xs text-muted-foreground">
              {allProducts.length} items
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden flex items-center gap-1.5 border border-border rounded px-3 py-1.5 text-sm text-myntra-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger
                data-ocid="sort.select"
                className="w-[180px] text-sm border-border focus:ring-myntra-pink"
              >
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0 border-r border-border pr-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-myntra-charcoal text-sm uppercase tracking-wider">
                Filters
              </h3>
              {(selectedBrands.length > 0 || selectedSizes.length > 0) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBrands([]);
                    setSelectedSizes([]);
                  }}
                  className="text-xs text-myntra-pink font-semibold"
                >
                  Clear All
                </button>
              )}
            </div>
            {FilterPanel}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
              {allProducts.map((product, idx) => (
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
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            role="button"
            tabIndex={0}
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowMobileFilters(false)}
            onKeyDown={(e) => e.key === "Escape" && setShowMobileFilters(false)}
            aria-label="Close filters"
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-bold text-myntra-charcoal">Filters</h3>
              <button type="button" onClick={() => setShowMobileFilters(false)}>
                <X className="w-5 h-5 text-myntra-gray" />
              </button>
            </div>
            <div className="p-4">{FilterPanel}</div>
            <div className="p-4 border-t border-border">
              <button
                type="button"
                onClick={() => setShowMobileFilters(false)}
                className="w-full bg-myntra-pink text-white py-3 font-semibold text-sm rounded-sm"
              >
                APPLY FILTERS
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
