import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { StaticProduct } from "@/data/products";
import {
  ChevronRight,
  Heart,
  RefreshCw,
  Shield,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ProductDetailPageProps {
  product: StaticProduct;
  wishlist: number[];
  onWishlistToggle: (id: number) => void;
  onAddToCart: (product: StaticProduct, size: string, color: string) => void;
  onNavigateHome: () => void;
  onNavigateCategory: (category: string) => void;
}

export function ProductDetailPage({
  product,
  wishlist,
  onWishlistToggle,
  onAddToCart,
  onNavigateHome,
  onNavigateCategory,
}: ProductDetailPageProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "");
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToBag = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    onAddToCart(product, selectedSize, selectedColor);
    toast.success(`${product.name} added to bag!`);
  };

  const COLOR_MAP: Record<string, string> = {
    "Navy Blue": "#1e3a5f",
    Black: "#1a1a1a",
    White: "#f5f5f5",
    "Sky Blue": "#87ceeb",
    "Light Pink": "#ffb6c1",
    "Dark Blue": "#00008b",
    "Mid Blue": "#4169e1",
    Olive: "#6b7c3c",
    Navy: "#001f5b",
    "Royal Blue": "#4169e1",
    Maroon: "#800000",
    Beige: "#f5f0dc",
    Grey: "#808080",
    Charcoal: "#36454f",
    Khaki: "#c3b091",
    Blue: "#0066cc",
    Red: "#cc0000",
  };

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
          <button
            type="button"
            onClick={() => onNavigateCategory(product.category)}
            className="hover:text-myntra-pink"
          >
            {product.category}
          </button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-myntra-charcoal font-semibold truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative bg-myntra-lightgray rounded overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-[600px] object-cover object-top"
              />
              {product.isNew && (
                <div className="absolute top-3 left-3 bg-myntra-pink text-white text-xs font-bold px-2 py-1">
                  NEW
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-1/2 lg:py-2">
            <h2 className="text-lg font-bold text-myntra-charcoal">
              {product.brand}
            </h2>
            <h1 className="text-xl font-normal text-myntra-gray mt-1">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 bg-myntra-green text-white text-xs font-bold px-2 py-1 rounded">
                <span>{product.rating}</span>
                <Star className="w-3 h-3 fill-white" />
              </div>
              <span className="text-sm text-myntra-gray">
                {product.reviewCount.toLocaleString("en-IN")} Ratings
              </span>
              <span className="text-sm text-myntra-green font-medium">
                &{" "}
                {Math.floor(product.reviewCount * 0.3).toLocaleString("en-IN")}{" "}
                Reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mt-4 pb-4 border-b border-border">
              <span className="text-2xl font-bold text-myntra-charcoal">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-base text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-base font-bold text-myntra-green">
                {product.discount}% OFF
              </span>
            </div>

            {/* Color selector */}
            {product.colors.length > 0 && (
              <div className="mt-5">
                <p className="text-sm font-semibold text-myntra-charcoal mb-2">
                  Color: <span className="font-normal">{selectedColor}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      type="button"
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? "border-myntra-charcoal scale-110"
                          : "border-transparent hover:border-border"
                      }`}
                      style={{ backgroundColor: COLOR_MAP[color] || "#ccc" }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-myntra-charcoal">
                  Select Size
                </p>
                <button
                  type="button"
                  className="text-xs text-myntra-pink font-semibold"
                >
                  Size Chart
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded-full text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-myntra-charcoal text-myntra-charcoal bg-myntra-charcoal/5 font-bold"
                        : "border-border text-myntra-gray hover:border-myntra-charcoal"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-xs text-muted-foreground mt-2">
                  Please select a size
                </p>
              )}
            </div>

            {/* CTAs */}
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                data-ocid="product.wishlist_button"
                onClick={() => onWishlistToggle(product.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 border-2 font-bold text-sm rounded-sm transition-colors ${
                  isWishlisted
                    ? "border-myntra-pink text-myntra-pink bg-myntra-pink/5"
                    : "border-border text-myntra-charcoal hover:border-myntra-charcoal"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? "fill-myntra-pink" : ""}`}
                />
                {isWishlisted ? "WISHLISTED" : "WISHLIST"}
              </button>
              <button
                type="button"
                data-ocid="product.add_button"
                onClick={handleAddToBag}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-myntra-pink text-white font-bold text-sm rounded-sm hover:bg-pink-600 transition-colors"
              >
                <span className="text-lg">🛍</span>
                ADD TO BAG
              </button>
            </div>

            {/* Delivery info */}
            <div className="mt-6 grid grid-cols-3 gap-2 border border-border rounded p-3">
              <div className="flex flex-col items-center gap-1 text-center">
                <Truck className="w-4 h-4 text-myntra-green" />
                <span className="text-[10px] text-myntra-gray">
                  Free Delivery
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center border-x border-border">
                <RefreshCw className="w-4 h-4 text-myntra-green" />
                <span className="text-[10px] text-myntra-gray">
                  14 Days Return
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <Shield className="w-4 h-4 text-myntra-green" />
                <span className="text-[10px] text-myntra-gray">
                  Secure Payment
                </span>
              </div>
            </div>

            {/* Accordion details */}
            <div className="mt-6">
              <Accordion type="single" collapsible defaultValue="description">
                <AccordionItem value="description">
                  <AccordionTrigger className="text-sm font-semibold text-myntra-charcoal uppercase tracking-wider">
                    Product Description
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-myntra-gray">
                    {product.description}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm font-semibold text-myntra-charcoal uppercase tracking-wider">
                    Product Details
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 text-sm text-myntra-gray">
                      <li className="flex gap-2">
                        <span className="font-medium text-myntra-charcoal w-28">
                          Brand:
                        </span>
                        {product.brand}
                      </li>
                      <li className="flex gap-2">
                        <span className="font-medium text-myntra-charcoal w-28">
                          Category:
                        </span>
                        {product.category}
                      </li>
                      <li className="flex gap-2">
                        <span className="font-medium text-myntra-charcoal w-28">
                          Available Sizes:
                        </span>
                        {product.sizes.join(", ")}
                      </li>
                      <li className="flex gap-2">
                        <span className="font-medium text-myntra-charcoal w-28">
                          Colors:
                        </span>
                        {product.colors.join(", ")}
                      </li>
                      <li className="flex gap-2">
                        <span className="font-medium text-myntra-charcoal w-28">
                          Rating:
                        </span>
                        {product.rating} / 5
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger className="text-sm font-semibold text-myntra-charcoal uppercase tracking-wider">
                    Returns &amp; Exchange
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-myntra-gray">
                    Easy 14-day returns and exchange. Products must be unused
                    and in original packaging with all tags attached. Free
                    pickup from your doorstep for returns.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
