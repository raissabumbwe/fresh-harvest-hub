export interface Producer {
  name: string;
  image: string;
  location: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: 'legumes' | 'fruits' | 'cremerie' | 'epicerie';
  badge?: 'bio' | 'local';
  producer: Producer;
  description: string;
}

export const producers: Producer[] = [
  {
    name: "Marie Dupont",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
    location: "Ferme des Tilleuls, Normandie",
    description: "Agricultrice passionnée depuis 25 ans, Marie cultive ses légumes en agriculture biologique."
  },
  {
    name: "Jean-Pierre Martin",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    location: "Les Vergers du Soleil, Provence",
    description: "Producteur de fruits depuis trois générations, Jean-Pierre perpétue les méthodes traditionnelles."
  },
  {
    name: "Sophie Bernard",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    location: "Fromagerie de la Vallée, Auvergne",
    description: "Artisane fromagère, Sophie transforme le lait de ses vaches en délicieux fromages."
  },
  {
    name: "Pierre Lefebvre",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    location: "Le Rucher Doré, Bourgogne",
    description: "Apiculteur respectueux des abeilles, Pierre récolte un miel d'exception."
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Tomates Anciennes",
    price: 4.90,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop",
    category: "legumes",
    badge: "bio",
    producer: producers[0],
    description: "Variétés anciennes cultivées en plein champ, gorgées de soleil."
  },
  {
    id: "2",
    name: "Carottes de Sable",
    price: 2.50,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    category: "legumes",
    badge: "local",
    producer: producers[0],
    description: "Carottes douces et croquantes, cultivées dans un sol sablonneux."
  },
  {
    id: "3",
    name: "Pommes Gala",
    price: 3.20,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
    category: "fruits",
    badge: "bio",
    producer: producers[1],
    description: "Pommes sucrées et juteuses, cueillies à parfaite maturité."
  },
  {
    id: "4",
    name: "Fraises Gariguette",
    price: 8.50,
    unit: "barquette 500g",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
    category: "fruits",
    badge: "local",
    producer: producers[1],
    description: "Fraises parfumées au goût d'enfance, récoltées à la main."
  },
  {
    id: "5",
    name: "Fromage de Chèvre",
    price: 12.00,
    unit: "pièce",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
    category: "cremerie",
    badge: "local",
    producer: producers[2],
    description: "Fromage frais au lait cru, texture crémeuse et saveur délicate."
  },
  {
    id: "6",
    name: "Beurre Fermier",
    price: 6.50,
    unit: "250g",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop",
    category: "cremerie",
    badge: "bio",
    producer: producers[2],
    description: "Beurre baratté à l'ancienne, au goût de noisette."
  },
  {
    id: "7",
    name: "Miel de Fleurs",
    price: 9.90,
    unit: "pot 500g",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
    category: "epicerie",
    badge: "bio",
    producer: producers[3],
    description: "Miel polyfloral aux notes florales subtiles."
  },
  {
    id: "8",
    name: "Courgettes",
    price: 2.80,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1563252722-6434563a985d?w=400&h=400&fit=crop",
    category: "legumes",
    badge: "local",
    producer: producers[0],
    description: "Courgettes tendres et savoureuses du potager."
  },
  {
    id: "9",
    name: "Poires Williams",
    price: 4.50,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=400&h=400&fit=crop",
    category: "fruits",
    badge: "bio",
    producer: producers[1],
    description: "Poires fondantes au parfum envoûtant."
  },
  {
    id: "10",
    name: "Œufs Fermiers",
    price: 4.20,
    unit: "boîte de 6",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    category: "cremerie",
    badge: "bio",
    producer: producers[2],
    description: "Œufs de poules élevées en plein air."
  },
  {
    id: "11",
    name: "Confiture de Figues",
    price: 7.50,
    unit: "pot 350g",
    image: "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=400&h=400&fit=crop",
    category: "epicerie",
    badge: "local",
    producer: producers[3],
    description: "Confiture artisanale aux figues du verger."
  },
  {
    id: "12",
    name: "Aubergines",
    price: 3.40,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=400&h=400&fit=crop",
    category: "legumes",
    badge: "bio",
    producer: producers[0],
    description: "Aubergines charnues parfaites pour vos ratatouilles."
  }
];

export const categories = [
  { id: 'all', label: 'Tous les produits', icon: '🌾' },
  { id: 'legumes', label: 'Légumes', icon: '🥬' },
  { id: 'fruits', label: 'Fruits', icon: '🍎' },
  { id: 'cremerie', label: 'Crémerie', icon: '🧀' },
  { id: 'epicerie', label: 'Épicerie', icon: '🍯' },
] as const;
