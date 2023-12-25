import { useMemo, useState } from 'react'
import { CaseData, SearchParam } from './types/index'

import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Search from './components/Search.tsx'
import Hero from './components/Hero.tsx'
import HotCase from './components/HotCase.tsx'
import ShowCase from './components/ShowCase.tsx'

function App() {
  const [caseList] = useState<CaseData[]>([
    {
      id: 0,
      title: '物资领取平台',
      desc: '通过扫码轻松打开应用进行物资领取，并可查询领取记录',
      url: '/pickup-app/',
      posts: 'https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144',
      stack: ['react']
    },
    {
      id: 1,
      title: 'Todo',
      desc: '工作计划',
      url: '/todo/',
      posts: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      stack: ['react']
    },
    {
      id: 2,
      title: 'HR FAQ',
      desc: '行政人事问答帮助中心',
      url: '/hr-faq/',
      posts: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      stack: ['react']
    },
    {
      id: 3,
      title: 'HR FAQ',
      desc: '行政人事问答帮助中心',
      url: '/hr-faq/',
      posts: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
      stack: ['react']
    },
    {
      id: 4,
      title: 'HR FAQ',
      desc: '行政人事问答帮助中心',
      url: '/hr-faq/',
      posts: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      stack: ['react']
    },
    {
      id: 5,
      title: 'HR FAQ',
      desc: '行政人事问答帮助中心',
      url: '/hr-faq/',
      posts: 'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      stack: ['react']
    },
    {
      id: 6,
      title: 'HR FAQ',
      desc: '行政人事问答帮助中心',
      url: '/hr-faq/',
      posts: 'https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80',
      stack: ['react']
    }
  ])

  const hotCases = useMemo(() => {
    return caseList.slice(1, 3)
  }, [])

  const showCases = useMemo(() => {
    return caseList.slice(3)
  }, [caseList])

  const [filterShowCases, setFilterShowCases] = useState(showCases)
  function onSearch({ type, keyword }: SearchParam) {
    if (!keyword) {
      setFilterShowCases(showCases)
      return
    }

    if (type === 'title') {
      setFilterShowCases(
        showCases.filter(cs => cs.title.includes(keyword))
      )
    } else if (type === 'stack') {
      setFilterShowCases(
        showCases.filter(cs => cs.stack.includes(keyword))
      )
    }
  }

  return (
    <div className="bg-white">
      <header>
        <div className="container mx-auto px-6 py-12">
          <Header />
          <Search onSearch={onSearch} />
        </div>
      </header>
      <main className="my-8">
        <div className="container mx-auto px-6">
          <Hero data={caseList[0]} />

          <div className="md:flex mt-8 md:-mx-4">
            { hotCases.map(item => (<HotCase key={item.id} data={item} />))}
          </div>
          <div className="my-16">
            <h3 className="text-gray-600 text-2xl font-medium">Show Cases</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {filterShowCases.map(item => (<ShowCase key={item.id} data={item} />))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
