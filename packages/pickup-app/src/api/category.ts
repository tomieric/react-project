import { requst } from "@/utils";
import { Category } from '@/types'

export function getCategories() {
  return requst.get<Category[]>('/json/data.json')
}