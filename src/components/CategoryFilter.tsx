import { categories } from '@/data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      {/* Mobile: Horizontal scroll */}
      <div className="flex gap-2 overflow-x-auto pb-2 md:hidden">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedCategory === category.id
                ? 'bg-forest text-cream shadow-soft'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Desktop: Vertical sidebar style */}
      <div className="hidden md:block">
        <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
          Catégories
        </h3>
        <nav className="flex flex-col gap-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-forest text-cream shadow-soft'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
              {selectedCategory === category.id && (
                <span className="ml-auto h-2 w-2 rounded-full bg-terracotta" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
