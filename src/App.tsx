import { useContext } from 'react';
import Login from './components/Login'
import SignUp from './components/SingUp';
import { PageContext } from './contexts/PageContext';
import { AuthContext } from './contexts/AuthContext';

import './App.scss';
import Dashboard from './components/Dashboard';


function App() {
  const { isRegisterPage } = useContext(PageContext)
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <main>
        {
          isAuthenticated ? <Dashboard /> :  
            isRegisterPage ?
              <SignUp /> : <Login />
        }
    </main>
  )
}

export default App
