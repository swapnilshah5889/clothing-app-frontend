import './App.css';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {

  const Shop = () => { 
    return <h1>Shop</h1>;
  }

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
