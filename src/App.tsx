import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Sidebar from './Components/SideBar/SideBar';
import AppRoutes from './Routers/router';
function App() {

  return (
    <div className="">
      <NavBar />
      <div className='flex'>
     <Sidebar />
     <div className='bg-stone-200 flex-1 flex flex-col'> 
     <AppRoutes />
     </div>
     </div>
    </div>
  )
}

export default App
