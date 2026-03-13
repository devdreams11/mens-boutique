import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onCartOpen: () => void;
  onWishlistOpen: () => void;
  onSearch: (q: string) => void;
  onNavigate: (page: string, data?: unknown) => void;
  currentPage: string;
}

const NAV_LINKS = [{ label: "MEN", page: "home" }];

export function Navbar({
  cartCount,
  wishlistCount,
  onCartOpen,
  onWishlistOpen,
  onSearch,
  onNavigate,
  currentPage,
}: NavbarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-16 gap-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="flex-shrink-0 flex items-center gap-1 mr-2"
          >
            <span className="font-display font-bold text-2xl text-myntra-pink leading-none">
              boutique
            </span>
            <span className="font-display font-bold text-2xl text-myntra-charcoal leading-none">
              .men
            </span>
          </button>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-xl hidden sm:flex"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                data-ocid="nav.search_input"
                type="text"
                placeholder="Search for products, brands and more"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-myntra-lightgray rounded border-0 outline-none focus:ring-1 focus:ring-myntra-pink placeholder:text-muted-foreground text-myntra-charcoal"
              />
            </div>
          </form>

          <div className="flex-1 sm:hidden" />

          {/* Actions */}
          <div className="flex items-center gap-1 ml-auto sm:ml-0">
            <button
              type="button"
              data-ocid="nav.wishlist_button"
              onClick={onWishlistOpen}
              className="flex flex-col items-center px-3 py-1 text-myntra-charcoal hover:text-myntra-pink transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-0.5 hidden sm:block">
                Wishlist
              </span>
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 right-1 w-4 h-4 bg-myntra-pink text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              type="button"
              data-ocid="nav.cart_button"
              onClick={onCartOpen}
              className="flex flex-col items-center px-3 py-1 text-myntra-charcoal hover:text-myntra-pink transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-0.5 hidden sm:block">
                Bag
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 right-1 w-4 h-4 bg-myntra-pink text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              className="sm:hidden p-2 text-myntra-charcoal"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="sm:hidden px-4 pb-3">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-myntra-lightgray rounded border-0 outline-none focus:ring-1 focus:ring-myntra-pink"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Category nav */}
      <nav className="bg-white border-b border-border hidden sm:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-0">
            {NAV_LINKS.map((link) => (
              <li key={link.page}>
                <button
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => onNavigate("home")}
                  className={`flex items-center gap-1 px-4 py-3 text-sm font-semibold tracking-wider border-b-2 transition-colors ${
                    currentPage === "home" || currentPage.startsWith("product")
                      ? "border-myntra-charcoal text-myntra-charcoal"
                      : "border-transparent text-myntra-gray hover:text-myntra-charcoal hover:border-myntra-charcoal"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-white border-b border-border">
          <ul className="py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.page}>
                <button
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => {
                    onNavigate("home");
                    setMobileOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-semibold text-myntra-charcoal hover:bg-myntra-lightgray"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
