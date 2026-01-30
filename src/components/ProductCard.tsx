import { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Plus, User } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [showProducer, setShowProducer] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit,
    });
  };

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-xl bg-card shadow-soft transition-all duration-500 hover:shadow-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-3 top-3 z-10">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
              product.badge === 'bio'
                ? 'bg-forest text-cream'
                : 'bg-terracotta text-cream'
            }`}
          >
            {product.badge === 'bio' ? '🌿 Bio' : '📍 Local'}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-cream opacity-0 shadow-lg transition-all duration-300 hover:bg-terracotta-dark group-hover:opacity-100"
          aria-label={`Ajouter ${product.name} au panier`}
        >
          <Plus className="h-6 w-6" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 font-serif text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-forest">
              {product.price.toFixed(2)} €
            </span>
            <span className="ml-1 text-sm text-muted-foreground">
              / {product.unit}
            </span>
          </div>
          
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-forest text-cream hover:bg-forest-dark"
          >
            <ShoppingBag className="mr-1 h-4 w-4" />
            Ajouter
          </Button>
        </div>

        {/* Producer Section Toggle */}
        <button
          onClick={() => setShowProducer(!showProducer)}
          className="mt-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <User className="h-4 w-4" />
          <span>Rencontrez le producteur</span>
        </button>

        {/* Producer Info */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showProducer ? 'mt-4 max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex items-start gap-3 rounded-lg bg-muted p-3">
            <img
              src={product.producer.image}
              alt={product.producer.name}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-cream"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">
                {product.producer.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {product.producer.location}
              </p>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                {product.producer.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
