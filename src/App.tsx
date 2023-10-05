import { useContext } from 'react';
import Login from './components/Login'
import SignUp from './components/SingUp';
import { PageContext } from './contexts/PageContext';

import './App.scss';


function App() {
  const { isRegisterPage } = useContext(PageContext)
  return (
    <main>
        { isRegisterPage ?
          <SignUp /> : <Login />
        }
    </main>
  )
}

export default App
