import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/hooks/useCart';
import { CartDrawer } from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MapPin, Mail, Phone, Send, Leaf, ExternalLink } from 'lucide-react';
import { producers } from '@/data/products';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ProducteursContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dans les plus brefs délais.',
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const producerProfiles = [
    {
      ...producers[0],
      specialty: 'Maraîchère Bio',
      products: ['Tomates', 'Carottes', 'Courgettes'],
    },
    {
      ...producers[1],
      specialty: 'Arboriculteur',
      products: ['Pommes', 'Poires', 'Fraises'],
    },
    {
      ...producers[2],
      specialty: 'Fromagère Artisanale',
      products: ['Fromage de Chèvre', 'Beurre', 'Œufs'],
    },
    {
      ...producers[3],
      specialty: 'Apiculteur',
      products: ['Miel de Fleurs', 'Confiture'],
    },
  ];

  const faqs = [
    {
      question: 'Comment fonctionne la livraison ?',
      answer:
        'Nous livrons tous les mercredis et samedis dans un rayon de 30km autour de notre point de collecte. La livraison est gratuite à partir de 50€ d\'achat.',
    },
    {
      question: 'Puis-je retourner un produit ?',
      answer:
        'Si un produit ne vous satisfait pas, contactez-nous sous 24h avec une photo. Nous vous rembourserons ou remplacerons le produit lors de votre prochaine commande.',
    },
    {
      question: 'Les produits sont-ils vraiment bio ?',
      answer:
        'Tous nos producteurs sont certifiés Bio (AB) ou en agriculture raisonnée. Les certificats sont disponibles sur demande.',
    },
    {
      question: 'Puis-je visiter les exploitations ?',
      answer:
        'Oui ! Nous organisons des visites de ferme chaque premier dimanche du mois. Inscrivez-vous via le formulaire de contact.',
    },
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Nos Artisans & Contact
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Les Visages de Notre Terroir
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez les hommes et femmes passionnés qui cultivent vos produits avec amour et savoir-faire.
              </p>
            </div>
          </section>

          {/* Producers Grid */}
          <section className="py-16 md:py-20 bg-[#F5F0E8]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Nos Producteurs Partenaires
                </h2>
                <p className="text-muted-foreground">
                  15 exploitations familiales engagées pour une agriculture durable
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {producerProfiles.map((producer) => (
                  <div
                    key={producer.name}
                    className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Producer Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={producer.image}
                        alt={producer.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-1.5 text-white/90 text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="truncate">{producer.location.split(',')[1]?.trim()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Producer Info */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-serif text-lg text-foreground">{producer.name}</h3>
                          <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                            <Leaf className="w-3.5 h-3.5" />
                            {producer.specialty}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {producer.description}
                      </p>

                      {/* Product tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {producer.products.map((product) => (
                          <span
                            key={product}
                            className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {product}
                          </span>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        <span>Voir ses produits</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Contactez-Nous
                </h2>
                <p className="text-muted-foreground">
                  Une question, une suggestion ? Nous sommes à votre écoute.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Form */}
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                  <h3 className="font-serif text-xl text-foreground mb-6">Envoyez-nous un message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input
                          id="name"
                          placeholder="Jean Dupont"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean@exemple.fr"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input
                        id="subject"
                        placeholder="Votre sujet"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Écrivez votre message ici..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      {isSubmitting ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Contact Info & Map */}
                <div className="space-y-6">
                  {/* Info Cards */}
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                    <h3 className="font-serif text-xl text-foreground mb-6">Informations pratiques</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <a href="mailto:contact@terroir-local.fr" className="text-muted-foreground hover:text-primary transition-colors">
                            contact@terroir-local.fr
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Téléphone</p>
                          <a href="tel:+33123456789" className="text-muted-foreground hover:text-primary transition-colors">
                            01 23 45 67 89
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Point de collecte</p>
                          <p className="text-muted-foreground">
                            12 Rue du Marché<br />
                            75001 Paris
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50">
                    <div className="relative h-48 bg-primary/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <MapPin className="w-8 h-8 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">Point de collecte principal</p>
                          <p className="font-medium text-foreground">Paris 1er</p>
                        </div>
                      </div>
                      {/* Decorative map pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          </pattern>
                          <rect width="100" height="100" fill="url(#grid)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20 bg-[#F5F0E8]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Questions Fréquentes
                </h2>
                <p className="text-muted-foreground">
                  Tout ce que vous devez savoir avant de commander
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card rounded-xl px-6 border border-border/50 shadow-sm"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default ProducteursContact;
