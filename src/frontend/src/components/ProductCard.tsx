import type { StaticProduct } from "@/data/products";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: StaticProduct;
  index: number;
  onProductClick: (product: StaticProduct) => void;
  onWishlistToggle?: (id: number) => void;
  onAddToCart?: (product: StaticProduct) => void;
  isWishlisted?: boolean;
}

export function ProductCard({
  product,
  index,
  onProductClick,
  onWishlistToggle,
  onAddToCart,
  isWishlisted,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-ocid={`products.item.${index}`}
      className="product-card group cursor-pointer bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <button
        type="button"
        className="relative overflow-hidden bg-myntra-lightgray w-full text-left block"
        onClick={() => onProductClick(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`w-full aspect-[3/4] object-cover object-top transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-myntra-pink text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
              NEW
            </span>
          )}
          {product.isTrending && (
            <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
              TRENDING
            </span>
          )}
        </div>
        {/* Wishlist button */}
        <button
          type="button"
          data-ocid="product.wishlist_button"
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle?.(product.id);
          }}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted
                ? "fill-myntra-pink text-myntra-pink"
                : "text-myntra-gray"
            }`}
          />
        </button>
        {/* Add to cart on hover */}
        <button
          type="button"
          data-ocid="product.add_button"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.(product);
          }}
          className={`add-to-cart-btn absolute bottom-0 left-0 right-0 bg-white text-myntra-charcoal text-xs font-semibold py-2.5 text-center border-t border-border hover:bg-myntra-pink hover:text-white transition-colors ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{
            transition:
              "opacity 0.2s, transform 0.2s, background-color 0.15s, color 0.15s",
          }}
        >
          ADD TO BAG
        </button>
      </button>

      {/* Info */}
      <button
        type="button"
        className="p-2 w-full text-left block"
        onClick={() => onProductClick(product)}
      >
        <p className="font-bold text-xs text-myntra-charcoal">
          {product.brand}
        </p>
        <p className="text-xs text-myntra-gray truncate mt-0.5">
          {product.name}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
          <span className="font-bold text-sm text-myntra-charcoal">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-muted-foreground line-through">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
          <span className="text-xs font-semibold text-myntra-green">
            ({product.discount}% OFF)
          </span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <div className="flex items-center gap-0.5 bg-myntra-green text-white text-[10px] font-bold px-1 py-0.5 rounded">
            <span>{product.rating}</span>
            <Star className="w-2.5 h-2.5 fill-white" />
          </div>
          <span className="text-[10px] text-muted-foreground">
            ({product.reviewCount.toLocaleString("en-IN")})
          </span>
        </div>
      </button>
    </div>
  );
}
