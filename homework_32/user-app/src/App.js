import './App.css';
import UsersPage from './components/UsersPage/UsersPage';
import UserPage from './components/UserPage/UserPage';
import { Route, Routes, Outlet } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='users' element={<UsersLayout />}>
        <Route index element={<UsersPage />} />
        <Route path=':userId' element={<UserPage />} />
      </Route>
    </Routes>
  );
}

const UsersLayout = () => {
  return (
    <main className='main'>
      <Outlet />
    </main>
  );
};

export default App;
