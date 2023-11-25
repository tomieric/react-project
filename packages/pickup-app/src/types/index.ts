export interface Materials {
  id: string | number
  title: string
  image: string
  quantity: number
  count?: number
}

export interface CategoryItem {
  id: string | number
  type: string
  name: string,
  materials: Materials[]
}


export interface Category {
  id: string | number
  type: string
  name: string,
  categories: CategoryItem[]
}

export interface RecordData { 
  id: string
  date: string
  materials: Materials[]
}