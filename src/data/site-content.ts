import type {
  FeaturedDish,
  GalleryImage,
  MenuCategory,
  MenuItem,
  ReservationDetail,
  Testimonial,
} from '../types/site'

export const heroImage =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80'

export const navigationLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Contact', href: '#contact' },
]

export const statistics = [
  { value: '2019', label: 'Est.' },
  { value: '12', label: 'Awards' },
  { value: '200+', label: 'Dishes' },
  { value: '4.9', label: 'Rating' },
]

export const featuredDishes: FeaturedDish[] = [
  {
    name: 'Coal-Kissed Wagyu',
    category: 'Signature Main',
    price: '$48',
    description: 'A5 wagyu glazed with smoked shallot jus, bitter greens, and ember-charred leek ash.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Black Truffle Lumache',
    category: 'Pasta Course',
    price: '$34',
    description: 'Silken pasta folded with truffle cream, aged pecorino, and roasted garlic velvet.',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Burnt Citrus Pavlova',
    category: 'Dessert',
    price: '$19',
    description: 'Torched meringue, charred orange curd, and saffron cream over crisp almond praline.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
]

export const menuCategoryLabels: Record<MenuCategory, string> = {
  starters: 'Starters',
  mains: 'Mains',
  desserts: 'Desserts',
  drinks: 'Drinks',
}

export const menuCatalog: Record<MenuCategory, MenuItem[]> = {
  starters: [
    {
      name: 'Smoked Oyster',
      description: 'Green apple mignonette, kelp oil, and frozen horseradish snow.',
      price: '$16',
    },
    {
      name: 'Charred Endive',
      description: 'Blood orange, pecan praline, and warm gorgonzola custard.',
      price: '$18',
    },
    {
      name: 'Kingfish Crudo',
      description: 'Yuzu kosho, fermented cucumber, and dill blossom oil.',
      price: '$21',
    },
    {
      name: 'Cinder Carrot',
      description: 'Black garlic tahini, cumin honey, and crisp quinoa lace.',
      price: '$17',
    },
    {
      name: 'Foie Gras Torchon',
      description: 'Late-harvest fig, cocoa nib brioche, and candied walnut dust.',
      price: '$26',
    },
    {
      name: 'Lobster Tartlet',
      description: 'Shellfish cream, fennel pollen, and Meyer lemon gel.',
      price: '$24',
    },
  ],
  mains: [
    {
      name: 'Dry-Aged Ribeye',
      description: 'Bone marrow glaze, smoked onion, and potato pave.',
      price: '$58',
    },
    {
      name: 'Butter-Poached Halibut',
      description: 'Champagne veloute, white asparagus, and preserved lemon.',
      price: '$44',
    },
    {
      name: "Duck a l'Orange",
      description: 'Caramelized chicory, confit leg croquette, and burnt citrus lacquer.',
      price: '$46',
    },
    {
      name: 'Coal-Fired Cauliflower',
      description: 'Vadouvan cream, crisp capers, and saffron breadcrumb.',
      price: '$29',
    },
    {
      name: 'Venison Loin',
      description: 'Juniper reduction, blackberry gastrique, and celery root silk.',
      price: '$49',
    },
    {
      name: 'Truffle Chicken',
      description: 'Chicken jus gras, chestnut puree, and roasted maitake.',
      price: '$38',
    },
  ],
  desserts: [
    {
      name: 'Dark Chocolate Sphere',
      description: 'Salted caramel, cocoa sable, and tonka bean cream.',
      price: '$18',
    },
    {
      name: 'Ember Basque Cheesecake',
      description: 'Burnt honey glaze and macerated black cherries.',
      price: '$16',
    },
    {
      name: 'Pear Tarte Tatin',
      description: 'Brown butter pastry and vanilla bean creme fraiche.',
      price: '$17',
    },
    {
      name: 'Olive Oil Semifreddo',
      description: 'Candied citrus peel and toasted pistachio crumb.',
      price: '$15',
    },
    {
      name: 'Hazelnut Opera',
      description: 'Espresso ganache and praline crunch.',
      price: '$18',
    },
    {
      name: 'Affogato Nocturne',
      description: 'Single-origin espresso over malted vanilla gelato.',
      price: '$14',
    },
  ],
  drinks: [
    {
      name: 'House Old Fashioned',
      description: 'Bourbon, toasted spice syrup, and cedar smoke.',
      price: '$19',
    },
    {
      name: 'Midnight Negroni',
      description: 'Gin, black currant vermouth, and cacao nib bitter.',
      price: '$18',
    },
    {
      name: 'Saffron 75',
      description: 'Champagne, saffron cordial, and preserved lemon.',
      price: '$21',
    },
    {
      name: 'Pearl Martini',
      description: 'Vodka, dry vermouth, oyster leaf, and saline mist.',
      price: '$20',
    },
    {
      name: 'Nocturne Spritz',
      description: 'Amaro, blood orange, and sparkling rose.',
      price: '$17',
    },
    {
      name: 'Zero-Proof Ember',
      description: 'Smoked pineapple, lapsang tea, and citrus bitters.',
      price: '$14',
    },
  ],
}

export const galleryImages: GalleryImage[] = [
  {
    title: 'Velvet Booths',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    heightClass: 'h-[320px] sm:h-[360px]',
  },
  {
    title: 'Firelight Service',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
    heightClass: 'h-[420px] sm:h-[500px]',
  },
  {
    title: 'Candle Tables',
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
    heightClass: 'h-[280px] sm:h-[330px]',
  },
  {
    title: 'Private Dining',
    image:
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80',
    heightClass: 'h-[380px] sm:h-[430px]',
  },
  {
    title: 'Chef Counter',
    image:
      'https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&w=900&q=80',
    heightClass: 'h-[300px] sm:h-[350px]',
  },
  {
    title: 'Night Lounge',
    image:
      'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?auto=format&fit=crop&w=900&q=80',
    heightClass: 'h-[420px] sm:h-[500px]',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'A dining room built like cinema. Every course arrived with the confidence of a closing scene.',
    guest: 'Amelia Hart',
    date: 'January 2025',
  },
  {
    quote:
      'The tasting menu moved from smoke to citrus to velvet without a single soft note in the pacing.',
    guest: 'Jonah Sinclair',
    date: 'November 2024',
  },
  {
    quote:
      'Service felt choreographed, the room glowed, and the ribeye alone justified the reservation.',
    guest: 'Sofia Moreau',
    date: 'February 2025',
  },
]

export const reservationDetails: ReservationDetail[] = [
  {
    label: 'Address',
    value: '12 Ember Lane\nDowntown Culinary District',
  },
  {
    label: 'Phone',
    value: '+1 (212) 555-0198\nconcierge@emberdining.com',
  },
  {
    label: 'Opening Hours',
    value: 'Tue-Sat 17:30-23:30\nSun 17:30-22:00',
  },
]

export const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'TripAdvisor', href: 'https://www.tripadvisor.com' },
]
