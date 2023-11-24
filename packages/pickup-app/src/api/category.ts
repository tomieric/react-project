import { requst } from "@/utils";
import { Category, RecordData } from '@/types'

export function getCategories() {
  return requst.get<Category[]>('/json/data.json')
}

export function getRecords() {
  return requst.get<RecordData[]>('/json/records.json')
}