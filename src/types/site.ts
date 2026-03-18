export type FeaturedDish = {
  name: string
  category: string
  price: string
  description: string
  image: string
}

export type MenuItem = {
  name: string
  description: string
  price: string
}

export type GalleryImage = {
  title: string
  image: string
  heightClass: string
}

export type Testimonial = {
  quote: string
  guest: string
  date: string
}

export type ReservationDetail = {
  label: string
  value: string
}

export type MenuCategory = 'starters' | 'mains' | 'desserts' | 'drinks'
