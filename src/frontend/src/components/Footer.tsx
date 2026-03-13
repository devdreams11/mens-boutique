import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { SiGoogle } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-myntra-lightgray border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-myntra-charcoal text-sm mb-4 uppercase tracking-wider">
              Online Shopping
            </h4>
            <ul className="space-y-2">
              {[
                "Men",
                "Women",
                "Kids",
                "Home & Living",
                "Beauty",
                "Gift Cards",
                "Myntra Insider",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="text-sm text-myntra-gray hover:text-myntra-pink transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-myntra-charcoal text-sm mb-4 uppercase tracking-wider">
              Customer Policies
            </h4>
            <ul className="space-y-2">
              {[
                "Contact Us",
                "FAQ",
                "T&C",
                "Terms of Use",
                "Track Orders",
                "Shipping",
                "Cancellation",
                "Returns",
                "Privacy Policy",
                "Grievance Officer",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="text-sm text-myntra-gray hover:text-myntra-pink transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-myntra-charcoal text-sm mb-4 uppercase tracking-wider">
              Experience Boutique App
            </h4>
            <p className="text-sm text-myntra-gray mb-3">
              Download the App for the best experience
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="flex items-center gap-2 bg-black text-white rounded px-3 py-2 w-fit cursor-pointer hover:bg-zinc-800 transition-colors"
              >
                <SiGoogle className="w-4 h-4" />
                <div>
                  <p className="text-[9px] leading-none">GET IT ON</p>
                  <p className="text-xs font-semibold leading-none mt-0.5">
                    Google Play
                  </p>
                </div>
              </button>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-myntra-charcoal text-sm mb-3 uppercase tracking-wider">
                Keep In Touch
              </h4>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="text-myntra-gray hover:text-myntra-pink transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="text-myntra-gray hover:text-myntra-pink transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="text-myntra-gray hover:text-myntra-pink transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="text-myntra-gray hover:text-myntra-pink transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-myntra-charcoal text-sm mb-4 uppercase tracking-wider">
              Assured Quality
            </h4>
            <ul className="space-y-2">
              {[
                "100% Original",
                "Easy Returns",
                "Secure Payments",
                "Fast Delivery",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-myntra-green flex-shrink-0" />
                  <span className="text-sm text-myntra-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-myntra-gray">
            &copy; {year}. Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noreferrer"
              className="text-myntra-pink hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            In partnership with trusted brands across India
          </p>
        </div>
      </div>
    </footer>
  );
}
