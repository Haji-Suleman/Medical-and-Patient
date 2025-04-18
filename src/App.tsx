import SelectRole from './pages/SelectRole/SelectRole'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Main from './pages/Main/Main'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element=<SelectRole /> />
        <Route path='/doctor/signup' element=<SignUp /> />
        <Route path='/doctor/home' element=<Main /> />
      </Routes>
    </>
  )
}

export default App
