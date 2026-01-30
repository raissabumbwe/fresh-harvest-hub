import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/useCart';
import { ShoppingBag, Menu, X, Leaf } from 'lucide-react';

export function Header() {
  const { itemCount, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a
          href="/"
          className={`flex items-center gap-2 font-serif text-xl font-bold transition-colors ${
            isScrolled ? 'text-forest' : 'text-cream'
          }`}
        >
          <Leaf className="h-6 w-6" />
          <span>Marché Local</span>
        </a>

        {/* Desktop Navigation */}
        <ul
          className={`hidden items-center gap-8 md:flex ${
            isScrolled ? 'text-foreground' : 'text-cream'
          }`}
        >
          <li>
            <a
              href="#products"
              className="text-sm font-medium transition-colors hover:text-terracotta"
            >
              Nos Produits
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-terracotta"
            >
              Producteurs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-terracotta"
            >
              Notre Engagement
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-terracotta"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(true)}
            className={`relative flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-all ${
              isScrolled
                ? 'bg-forest text-cream hover:bg-forest-dark'
                : 'bg-cream/20 text-cream backdrop-blur-sm hover:bg-cream/30'
            }`}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="hidden sm:inline">Panier</span>
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-xs font-bold text-cream">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-forest' : 'text-cream'}`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-cream/95 shadow-lg backdrop-blur-md md:hidden">
          <ul className="container mx-auto flex flex-col gap-4 px-6 py-6">
            <li>
              <a
                href="#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium text-foreground transition-colors hover:text-terracotta"
              >
                Nos Produits
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium text-foreground transition-colors hover:text-terracotta"
              >
                Producteurs
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium text-foreground transition-colors hover:text-terracotta"
              >
                Notre Engagement
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium text-foreground transition-colors hover:text-terracotta"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
