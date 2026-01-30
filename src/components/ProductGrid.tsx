import { useState, useEffect, useRef } from 'react';
import { products } from '@/data/products';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState<Set<string>>(new Set());
  const productRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = entry.target.getAttribute('data-product-id');
            if (productId) {
              setVisibleProducts((prev) => new Set([...prev, productId]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    productRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProducts]);

  const setProductRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      productRefs.current.set(id, el);
    }
  };

  return (
    <section id="products" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-terracotta">
            Notre sélection
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Produits de saison
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Découvrez les trésors de nos terroirs, récoltés avec passion par nos producteurs locaux.
          </p>
        </div>

        {/* Layout with Filter and Grid */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 lg:shrink-0">
            <div className="sticky top-24">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  ref={setProductRef(product.id)}
                  data-product-id={product.id}
                  className={`transition-all duration-700 ${
                    visibleProducts.has(product.id)
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index % 6) * 100}ms` }}
                >
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="flex h-64 items-center justify-center rounded-xl bg-muted">
                <p className="text-muted-foreground">
                  Aucun produit dans cette catégorie.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
