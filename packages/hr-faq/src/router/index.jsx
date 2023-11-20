import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Lookup from '../pages/Lookup'
import QA from '../pages/QA'
import Comment from '../pages/Comment'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lookup',
    element: <Lookup />,
  },
  {
    path: '/qa',
    element: <QA />,
  },
  {
    path: '/comment',
    element: <Comment />,
  }
 ], {
  basename: import.meta.env.PROD ? `/${APP_NAME}/` : '/'
})

export default router
