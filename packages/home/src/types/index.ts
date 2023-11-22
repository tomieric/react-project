export interface CaseData {
  id: string | number
  title: string
  desc: string
  url: string,
  posts: string | string[],
  stack: string[]
}

export interface Props {
  data: CaseData
}

export interface SearchParam {
  type: 'stack' | 'title',
  keyword: string
}