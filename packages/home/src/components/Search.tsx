import classnames from 'classnames'
import { ChangeEvent, useState } from 'react'

import { SearchParam } from '../types'

interface Props {
  onSearch?: (option: SearchParam) => void
}

function Search(props: Props) {
  const [keywords] = useState<string[]>([
    'react',
    'redux',
    'zustand',
    'mbox',
    '小程序',
  ])

  function handleSearchByStack(keyword: string) {
    props?.onSearch?.({ type: 'stack', keyword })
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    props.onSearch?.({ type: 'title', keyword: e.currentTarget.value })
  }

  return (
    <>
      <nav className={ classnames(['sm:flex sm:justify-center sm:items-center mt-4'])}>
        <div className="flex flex-col sm:flex-row">
          { keywords.map(key => (<a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" key={key} onClick={() => handleSearchByStack(key)}>{key}</a>))}
        </div>
      </nav>
      <div className="relative mt-6 max-w-lg mx-auto">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>

        <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="搜索" onChange={handleSearch} />
      </div>
    </>
  )
}

export default Search