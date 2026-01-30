import heroImage from '@/assets/hero-farm.jpg';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mains de fermier tenant des légumes frais"
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-cream/20 px-4 py-2 text-sm font-medium text-cream backdrop-blur-sm">
              🌱 Produits frais & locaux
            </span>
            
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl xl:text-7xl">
              La fraîcheur du champ,{' '}
              <span className="text-terracotta-light">directement</span> chez vous
            </h1>
            
            <p className="mb-8 max-w-lg text-lg text-cream/80 sm:text-xl">
              Découvrez les meilleurs produits de nos agriculteurs locaux. 
              Du producteur à votre table, sans intermédiaire.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={scrollToProducts}
                size="lg"
                className="group bg-terracotta px-8 py-6 text-lg font-semibold text-cream transition-all duration-300 hover:bg-terracotta-dark hover:shadow-elevated"
              >
                Découvrir nos récoltes
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cream/30 bg-transparent px-8 py-6 text-lg font-semibold text-cream backdrop-blur-sm transition-all hover:border-cream hover:bg-cream/10"
              >
                Nos producteurs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-cream/60">
          <span className="text-sm">Défiler</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}
