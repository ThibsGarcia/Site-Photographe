// Product.interface.ts

export interface ProductInterface {
  id: number
  date: string
  title: string
  author: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
}
