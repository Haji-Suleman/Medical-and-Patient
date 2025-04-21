import SelectRole from './doctor/pages/SelectRole/SelectRole'
import { Route, Routes } from 'react-router-dom'
import SignUpDoctor from './doctor/pages/SignUp/SignUp'
import MainDoctor from './doctor/pages/Main/Main'
import SignUpPatient from './patient/pages/SignUp/SignUp'
import MainPatient from './patient/pages/Main/Main'
import { ToastContainer } from 'react-toastify'
import { useContext, } from 'react'
import { StoreContext } from './Context/StoreContext'
const App = () => {
  const context = useContext(StoreContext);
  if (!context) return null;
  const {token} = context;
  
  return (
    <>
    <ToastContainer/>
      <Routes>
        {token?
        <>
        </>:
        <>
        <Route path='/' element={<SelectRole />} />
        <Route path='/doctor/signup' element={<SignUpDoctor />} />
        <Route path='/patient/signup' element={<SignUpPatient />} />
        </>
        }
        <Route path='/doctor/home' element={<MainDoctor />} />
        <Route path='/patient/home' element={<MainPatient />} />
      </Routes>
    </>
  )
}

export default App
