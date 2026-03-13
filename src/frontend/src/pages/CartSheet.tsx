import type { StaticProduct } from "@/data/products";
import { ShoppingBag, Trash2, X } from "lucide-react";

interface CartItem {
  product: StaticProduct;
  size: string;
  color: string;
  quantity: number;
}

interface CartSheetProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onProductClick: (product: StaticProduct) => void;
}

export function CartSheet({
  open,
  onClose,
  items,
  onRemove,
  onProductClick,
}: CartSheetProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const savings = items.reduce(
    (sum, item) =>
      sum + (item.product.originalPrice - item.product.price) * item.quantity,
    0,
  );

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
        aria-label="Close cart"
      />
      <div
        data-ocid="cart.panel"
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <div>
            <h2 className="font-bold text-myntra-charcoal text-lg">My Bag</h2>
            {items.length > 0 && (
              <p className="text-xs text-myntra-green font-semibold">
                You&apos;re saving ₹{savings.toLocaleString("en-IN")} on this
                order!
              </p>
            )}
          </div>
          <button
            type="button"
            data-ocid="cart.close_button"
            onClick={onClose}
            className="p-1.5 hover:bg-myntra-lightgray rounded transition-colors"
          >
            <X className="w-5 h-5 text-myntra-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
              <ShoppingBag className="w-16 h-16 text-border" />
              <h3 className="font-bold text-myntra-charcoal text-lg">
                Your bag is empty
              </h3>
              <p className="text-sm text-myntra-gray">Add items to it now</p>
              <button
                type="button"
                onClick={onClose}
                className="bg-myntra-pink text-white px-8 py-3 font-semibold text-sm"
              >
                SHOP NOW
              </button>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}-${idx}`}
                  className="flex gap-3 p-4"
                >
                  <button
                    type="button"
                    onClick={() => handleImageClick(item.product)}
                    className="flex-shrink-0"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover object-top bg-myntra-lightgray rounded"
                    />
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-myntra-charcoal">
                      {item.product.brand}
                    </p>
                    <p className="text-xs text-myntra-gray truncate">
                      {item.product.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-myntra-gray">
                        Size:{" "}
                        <span className="font-medium text-myntra-charcoal">
                          {item.size}
                        </span>
                      </span>
                      <span className="text-xs text-myntra-gray">
                        Color:{" "}
                        <span className="font-medium text-myntra-charcoal">
                          {item.color}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-myntra-charcoal">
                          ₹{item.product.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-muted-foreground line-through">
                          ₹{item.product.originalPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-myntra-green font-semibold">
                          {item.product.discount}% off
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.product.id)}
                        className="p-1 hover:text-myntra-pink transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-muted-foreground hover:text-myntra-pink" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-myntra-charcoal">
                  ₹{total.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-muted-foreground">
                  {items.length} item{items.length > 1 ? "s" : ""}
                </p>
              </div>
              <button
                type="button"
                className="bg-myntra-pink text-white px-8 py-3 font-bold text-sm hover:bg-pink-600 transition-colors"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
