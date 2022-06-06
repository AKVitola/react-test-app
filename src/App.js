import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllUsers from './components/AllUsers';
import UserDetails from './components/UserDetails';
import ProductsListing from './components/ProductsListing';
import ProductDetails from './components/ProductDetails';
import Gallery from './components/Gallery';
import PageNotFound from './components/PageNotFound';
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllUsers />} />
          <Route path='/users/:userId' element={<UserDetails />} />
          <Route path='/products' element={<ProductsListing />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
