import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../routes/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ManageAccount from '../components/Account/ManageAccount/ManageAccount';
import MyAccount from '../components/Account/MyAccount/MyAccount';
import Shop from '../components/Shop/Shop';
import ItemView from '../routes/ItemView';
import CategoryView from '../routes/CategoryView';
import SearchView from '../routes/Search';
import CartItemsProvider from '../Context/CartItemsProvider';
import Login from '../components/Authentication/Login/Login';
import Register from '../components/Authentication/Register/Register';
import Wishlist from '../components/Wishlist';
import WishItemsProvider from '../Context/WishItemsProvider';
// eslint-disable-next-line
import DrawerNav from '../components/Nav/DrawerNav/DrawerNav';
// eslint-disable-next-line
import Checkout from '../components/Checkout/Checkout';
import SearchProvider from '../Context/SearchProvider';

function App() {
  return (
    <CartItemsProvider>
      <WishItemsProvider>
        <SearchProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account/me" element={<MyAccount />} />
              <Route path="/account/manage" element={<ManageAccount />} />
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/register" element={<Register />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/category/:id" element={<CategoryView />} />
              <Route path="/item/men/:id" element={<ItemView />} />
              <Route path="/item/women/:id" element={<ItemView />} />
              <Route path="/item/kids/:id" element={<ItemView />} />
              <Route path="/item/featured/:id" element={<ItemView />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search/*" element={<SearchView />} />
              <Route path="/admin" element={<Wishlist />} />
            </Routes>
            <Footer />
          </Router>
        </SearchProvider>
      </WishItemsProvider>
    </CartItemsProvider>
  );
}

export default App;
