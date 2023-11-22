import { Props } from '../types/index'

function ShowCase({ data }: Props) {
  return (
    <div className="h-64 rounded-md overflow-hidden bg-cover bg-center hover:shadow-lg" style={{ backgroundImage: `url("${data.posts}")` }}>
      <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-white font-semibold">{ data.title }</h2>
          <p className="mt-2 text-gray-400">{data.desc}</p>
          <a href={data.url} className="inline-flex items-center mt-4 pl-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500 border-0 no-underline">
              <span>立即访问</span>
              <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ShowCase