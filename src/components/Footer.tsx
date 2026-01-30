import { Leaf, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2 font-serif text-xl font-bold">
              <Leaf className="h-6 w-6" />
              <span>Marché Local</span>
            </a>
            <p className="text-cream/70">
              Connecter les producteurs locaux aux consommateurs responsables 
              depuis 2020.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream/70 transition-colors hover:text-cream">
                  Nos Produits
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 transition-colors hover:text-cream">
                  Nos Producteurs
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 transition-colors hover:text-cream">
                  Notre Engagement
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 transition-colors hover:text-cream">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Légal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream/70 transition-colors hover:text-cream">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 transition-colors hover:text-cream">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 transition-colors hover:text-cream">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 transition-colors hover:text-cream">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/70">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>12 Rue du Marché, 75001 Paris</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@marchelocal.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/20 pt-8 text-center text-sm text-cream/50">
          <p>© 2024 Marché Local. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
