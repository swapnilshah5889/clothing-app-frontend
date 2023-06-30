import './App.css';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation.component';

const App = () => {

  const Shop = () => { 
    return <h1>Shop</h1>;
  }

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
