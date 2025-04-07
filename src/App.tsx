import SelectRole from './pages/SelectRole/SelectRole'
import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element=<SelectRole /> />
        <Route path='/signup' element=<SignUp /> />
      </Routes>
    </>
  )
}

export default App
