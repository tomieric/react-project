import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import Todo from '@/pages/Todo'
import Done from '@/pages/Done'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Todo />,
        index: true
      },
      {
        path: 'todo',
        element: <Todo />
      },
      {
        path: 'done',
        element: <Done />,
      }
    ]
  }
 ], {
  // basename: import.meta.env.PROD ? `/${APP_NAME}/` : '/'
  basename: import.meta.env.BASE_URL
})

export default router
