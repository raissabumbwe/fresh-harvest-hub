import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/hooks/useCart';
import { CartDrawer } from '@/components/CartDrawer';
import { Leaf, Clock, HandCoins, Truck, Package, Home } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Engagement = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Truck,
      title: 'Circuit Court',
      description: 'Moins de 50km entre le producteur et votre assiette. Zéro intermédiaire, zéro gaspillage.',
    },
    {
      icon: Leaf,
      title: 'Respect de la Saisonnalité',
      description: 'Nous proposons uniquement des produits de saison, récoltés à maturité pour un goût optimal.',
    },
    {
      icon: HandCoins,
      title: 'Juste Rémunération',
      description: '70% du prix revient directement au producteur. Une agriculture qui fait vivre nos campagnes.',
    },
  ];

  const timeline = [
    { icon: Leaf, title: 'Récolte', time: '6h00', description: 'Cueillette à l\'aube' },
    { icon: Package, title: 'Préparation', time: '10h00', description: 'Tri et conditionnement' },
    { icon: Truck, title: 'Livraison', time: '14h00', description: 'Départ vers nos points' },
    { icon: Home, title: 'Chez vous', time: '18h00', description: 'Fraîcheur garantie' },
  ];

  const stats = [
    { value: '15', label: 'Producteurs locaux' },
    { value: '100%', label: 'Bio ou Raisonné' },
    { value: '0', label: 'Intermédiaire' },
    { value: '24h', label: 'Champ à assiette' },
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Vision Section */}
          <section
            id="vision"
            ref={(el) => (sectionRefs.current['vision'] = el)}
            className={`relative py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background transition-all duration-1000 ${
              visibleSections.has('vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="container mx-auto px-4 text-center max-w-4xl">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Notre Philosophie
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
                Plus qu'une vente,
                <br />
                <span className="text-primary">un soutien à la terre</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nous croyons en une agriculture qui respecte les hommes, les animaux et notre planète. 
                Chaque achat est un vote pour un monde plus durable, où les petits producteurs 
                peuvent vivre dignement de leur passion. Ensemble, redessinons le lien entre 
                la terre et nos tables.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </section>

          {/* 3 Pillars Section */}
          <section
            id="pillars"
            ref={(el) => (sectionRefs.current['pillars'] = el)}
            className={`py-20 md:py-28 bg-[#F5F0E8] transition-all duration-1000 delay-200 ${
              visibleSections.has('pillars') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c5a9' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Nos 3 Piliers Fondateurs
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Des engagements concrets qui guident chacune de nos décisions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section
            id="timeline"
            ref={(el) => (sectionRefs.current['timeline'] = el)}
            className={`py-20 md:py-28 bg-background transition-all duration-1000 delay-300 ${
              visibleSections.has('timeline') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Du Champ à l'Assiette en 24h
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Suivez le parcours de vos produits, de la récolte à votre table
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden md:block" />
                
                <div className="grid md:grid-cols-4 gap-8">
                  {timeline.map((step, index) => (
                    <div
                      key={step.title}
                      className={`relative text-center ${
                        index % 2 === 0 ? 'md:pt-0 md:pb-24' : 'md:pt-24 md:pb-0'
                      }`}
                    >
                      {/* Circle indicator */}
                      <div className="relative z-10 mx-auto w-20 h-20 bg-card border-4 border-primary rounded-full flex items-center justify-center shadow-lg mb-4">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <div className="bg-card rounded-xl p-4 shadow-md border border-border/50">
                        <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-2">
                          {step.time}
                        </span>
                        <h3 className="font-serif text-lg text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats Banner */}
          <section
            id="stats"
            ref={(el) => (sectionRefs.current['stats'] = el)}
            className={`py-16 bg-primary transition-all duration-1000 delay-400 ${
              visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-4xl md:text-5xl text-primary-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-primary-foreground/80 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-28 bg-[#F5F0E8]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Prêt à rejoindre le mouvement ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Découvrez nos produits frais et soutenez l'agriculture locale dès aujourd'hui.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
              >
                Découvrir nos produits
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Engagement;
