import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { DotLoading } from 'antd-mobile'

import App from '../App.tsx'
// import Records from '@/pages/Records.tsx'
// import RecordDetail from '@/pages/RecordDetai.tsx'

const Records = lazy(() => import('@/pages/Records.tsx'))
const RecordDetail = lazy(() => import('@/pages/RecordDetail.tsx'))

type RouteConfig = [string, JSX.Element]
const createLazyRoute = (config: RouteConfig[]): RouteObject[] => {
  return config.map(
    ([path, view]) => ({
      path,
      element: <Suspense fallback={ <DotLoading /> }>{view}</Suspense>
    })
  )
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    index: true
  },
  // {
  //   path: '/records',
  //   element: <Suspense><Records /></Suspense>
  // },
  // {
  //   path: '/records/:id',
  //   element: <Suspense><RecordDetail /></Suspense>
  // }
  ...createLazyRoute([
    ['/records', <Records />],
    ['/records/:id', <RecordDetail />]
  ])
]

const router = createBrowserRouter(routes, {
  basename: `${import.meta.env.BASE_URL}`
})

export default router