import { Props } from '../types/index'

function ShowCase({ data }: Props) {
  return (
    <a href={data.url} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden no-underline hover:opacity-90 hover:shadow-lg">
      <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: `url("${data.posts}")` }}>
      </div>
      <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">{data.title}</h3>
          <span className="text-gray-500 mt-2">{data.desc}</span>
      </div>
    </a>
  )
}

export default ShowCase