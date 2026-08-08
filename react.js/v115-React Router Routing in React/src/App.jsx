
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import User from './components/User'

function App() {

  const router = createBrowserRouter([
        {
          path:"/",
          element:<> <Navbar/><Home/> </>
        },
        {
          path:"/Login",
          element: <><Navbar/><Login/> </>
        },
        {
          path:"/User/:username",
          element: <><Navbar/><User /> </>
        },
      
     ])
  

  return (
    <>
     <RouterProvider router={router} />
     
    </>
  )
}

export default App
