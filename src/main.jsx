import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from '../components/login.jsx'
import AuthLayout from '../components/AuthLayout.jsx'
import AddPost from "./pages/addPost.jsx";
import Signup from './pages/signup.jsx'
import EditPost from "./pages/EditPosts.jsx";
import Post from './pages/posts.jsx'
import AllPosts from './pages/allPosts.jsx'


const router = createBrowserRouter ([

  {

    path:'/',
    element:<App/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/sign-up',
        element: (
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element: (
          <AuthLayout authentication>
            {""}
            <AllPosts/>
          </AuthLayout>
        ),
      },
      {
        path:'/add-post',
         element: (
          <AuthLayout authentication>
            {""}
            <AddPost/>
          </AuthLayout>
        ),
      },
      {
        path:'/edit-post/:slug',
         element: (
          <AuthLayout authentication>
            {""}
            <EditPost/>
          </AuthLayout>
        ),
      },
      {
        path:'/post/:slug',
         element: <Post/>
        
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
       <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
