import type { StaticProduct } from "@/data/products";
import { Heart, X } from "lucide-react";

interface WishlistSheetProps {
  open: boolean;
  onClose: () => void;
  products: StaticProduct[];
  onRemove: (id: number) => void;
  onAddToCart: (product: StaticProduct) => void;
  onProductClick: (product: StaticProduct) => void;
}

export function WishlistSheet({
  open,
  onClose,
  products,
  onRemove,
  onAddToCart,
  onProductClick,
}: WishlistSheetProps) {
  if (!open) return null;

  const handleImageClick = (product: StaticProduct) => {
    onProductClick(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 w-full cursor-default"
        onClick={onClose}
        aria-label="Close wishlist"
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <h2 className="font-bold text-myntra-charcoal text-lg">
            My Wishlist ({products.length})
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-myntra-lightgray rounded"
          >
            <X className="w-5 h-5 text-myntra-charcoal" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
              <Heart className="w-16 h-16 text-border" />
              <h3 className="font-bold text-myntra-charcoal text-lg">
                Your wishlist is empty
              </h3>
              <p className="text-sm text-myntra-gray">
                Save items you love to your wishlist
              </p>
              <button
                type="button"
                onClick={onClose}
                className="bg-myntra-pink text-white px-8 py-3 font-semibold text-sm"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {products.map((product) => (
                <div key={product.id} className="flex gap-3 p-4">
                  <button
                    type="button"
                    onClick={() => handleImageClick(product)}
                    className="flex-shrink-0"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-24 object-cover object-top bg-myntra-lightgray rounded"
                    />
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-myntra-charcoal">
                      {product.brand}
                    </p>
                    <p className="text-xs text-myntra-gray truncate">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="font-bold text-sm text-myntra-charcoal">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-myntra-green font-semibold">
                        {product.discount}% off
                      </span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => {
                          onAddToCart(product);
                        }}
                        className="flex-1 text-xs font-semibold py-1.5 bg-myntra-pink text-white hover:bg-pink-600 transition-colors"
                      >
                        MOVE TO BAG
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemove(product.id)}
                        className="flex-1 text-xs font-semibold py-1.5 border border-border text-myntra-gray hover:border-myntra-charcoal transition-colors"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
