import SelectRole from './pages/SelectRole/SelectRole'
import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Main from './pages/Main/Main'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element=<SelectRole /> />
        <Route path='/signup' element=<SignUp /> />
        <Route path='/home' element=<Main /> />
      </Routes>
    </>
  )
}

export default App
