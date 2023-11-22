import { Props } from '../types/index'

function HotCase({ data }: Props) {
  return (
    <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 hover:shadow-lg" style={{ backgroundImage: `url("${data.posts}")` }}>
      <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-white font-semibold">{ data.title }</h2>
          <p className="mt-2 text-gray-400">{data.desc}</p>
          <a href={data.url} className="flex items-center border-0 mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none no-underline hover:translate-x-2 transition-transform">
            <span>查看</span>
            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HotCase