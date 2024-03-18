import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SinglePost from './pages/SinglePost.jsx'
import AddPostForm from './pages/AddPostForm.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 not Found</div>
  },
  {
    path: '/single-post/:id',
    element: <SinglePost />,
    errorElement: <div>404 not Found</div>
  },
  {
    path: '/add-post',
    element: <AddPostForm />,
    errorElement: <div>Error in add post page.</div>
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
