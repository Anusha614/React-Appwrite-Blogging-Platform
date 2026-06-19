import { useEffect, useState } from 'react'
import {Header, Footer} from '../components/index'
import {useDispatch} from 'react-redux'
import  authService from '../Appwrite/Auth'
import { login,logout } from './store/authSlice'


function App() {
  
  const [loading, setLoading] = useState (true)
  const dispatch = useDispatch()

  useEffect (() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData){
          dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/*<Outlet/>*/}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null

}

export default App
