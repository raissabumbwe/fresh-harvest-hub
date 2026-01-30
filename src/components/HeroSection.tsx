import { useState, useEffect, useCallback } from 'react';
import heroFarm from '@/assets/hero-farm.jpg';
import heroHoney from '@/assets/hero-honey.jpg';
import heroFruits from '@/assets/hero-fruits.jpg';
import heroCheese from '@/assets/hero-cheese.jpg';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: heroFarm,
    badge: '🌱 Produits frais & locaux',
    title: 'La fraîcheur du champ,',
    highlight: 'directement',
    titleEnd: 'chez vous',
    description: 'Découvrez les meilleurs produits de nos agriculteurs locaux. Du producteur à votre table, sans intermédiaire.',
    cta: 'Découvrir nos récoltes',
  },
  {
    image: heroFruits,
    badge: '🍎 Fruits de saison',
    title: 'Des fruits gorgés',
    highlight: 'de soleil',
    titleEnd: '',
    description: 'Cueillis à parfaite maturité dans nos vergers, nos fruits révèlent toute leur saveur naturelle.',
    cta: 'Voir les fruits',
  },
  {
    image: heroCheese,
    badge: '🧀 Artisanat local',
    title: 'Fromages',
    highlight: "d'exception",
    titleEnd: '',
    description: 'Découvrez le savoir-faire de nos artisans fromagers, héritiers de traditions centenaires.',
    cta: 'Découvrir la crémerie',
  },
  {
    image: heroHoney,
    badge: '🍯 Douceurs naturelles',
    title: 'Le miel doré',
    highlight: 'de nos ruches',
    titleEnd: '',
    description: 'Un nectar précieux récolté avec respect des abeilles, aux saveurs florales uniques.',
    cta: "Explorer l'épicerie",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToSlide = useCallback((index: number, dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next, 'next');
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev, 'prev');
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[90vh] min-h-[650px] w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-forest-dark/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <span
              key={`badge-${currentSlide}`}
              className={`mb-4 inline-block rounded-full bg-cream/20 px-4 py-2 text-sm font-medium text-cream backdrop-blur-sm ${
                isAnimating
                  ? direction === 'next'
                    ? 'animate-slide-in-up'
                    : 'animate-slide-in-down'
                  : ''
              }`}
              style={{ animationDelay: '0ms' }}
            >
              {slide.badge}
            </span>
            
            {/* Title */}
            <h1
              key={`title-${currentSlide}`}
              className={`mb-6 font-serif text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl xl:text-7xl ${
                isAnimating
                  ? direction === 'next'
                    ? 'animate-slide-in-up'
                    : 'animate-slide-in-down'
                  : ''
              }`}
              style={{ animationDelay: '100ms' }}
            >
              {slide.title}{' '}
              <span className="text-terracotta-light">{slide.highlight}</span>
              {slide.titleEnd && ` ${slide.titleEnd}`}
            </h1>
            
            {/* Description */}
            <p
              key={`desc-${currentSlide}`}
              className={`mb-8 max-w-lg text-lg text-cream/80 sm:text-xl ${
                isAnimating
                  ? direction === 'next'
                    ? 'animate-slide-in-up'
                    : 'animate-slide-in-down'
                  : ''
              }`}
              style={{ animationDelay: '200ms' }}
            >
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div
              key={`cta-${currentSlide}`}
              className={`flex flex-col gap-4 sm:flex-row ${
                isAnimating
                  ? direction === 'next'
                    ? 'animate-slide-in-up'
                    : 'animate-slide-in-down'
                  : ''
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <Button
                onClick={scrollToProducts}
                size="lg"
                className="group bg-terracotta px-8 py-6 text-lg font-semibold text-cream transition-all duration-300 hover:bg-terracotta-dark hover:shadow-elevated"
              >
                {slide.cta}
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

      {/* Navigation Arrows */}
      <div className="absolute left-4 right-4 top-1/2 z-20 flex -translate-y-1/2 justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-all hover:bg-cream/20 hover:scale-110 lg:h-14 lg:w-14"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="h-6 w-6 lg:h-7 lg:w-7" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-all hover:bg-cream/20 hover:scale-110 lg:h-14 lg:w-14"
          aria-label="Slide suivant"
        >
          <ChevronRight className="h-6 w-6 lg:h-7 lg:w-7" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index, index > currentSlide ? 'next' : 'prev')}
            className={`group relative h-3 transition-all duration-300 ${
              index === currentSlide ? 'w-10' : 'w-3'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          >
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-terracotta'
                  : 'bg-cream/40 group-hover:bg-cream/60'
              }`}
            />
            {index === currentSlide && (
              <span
                className="absolute inset-0 origin-left rounded-full bg-terracotta-light"
                style={{
                  animation: 'progress 6s linear forwards',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0">
        <div className="flex flex-col items-center gap-2 text-cream/60">
          <span className="text-sm hidden sm:block">Défiler</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}
