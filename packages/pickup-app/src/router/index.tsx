import { createHashRouter, RouteObject } from 'react-router-dom'

import App from '../App.tsx'
import Records from '@/pages/Records.tsx'
import RecordDetail from '@/pages/RecordDetai.tsx'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/records',
    element: <Records />
  },
  {
    path: '/records/:id',
    element: <RecordDetail />
  }
]

const router = createHashRouter(routes, {
  basename: `${import.meta.env.BASE_URL}`
})

export default router