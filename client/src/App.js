import './App.css';
import Header from './components/featurs/Header/Header';
import Home from "./components//pages/Home/Home";
import Footer from "./components/featurs/Footer/Footer";
import ProductsProvider from './contexts/products-contexts';
function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Header />
        <Home />
        <Footer />
      </ProductsProvider>

    </div>
  );
}

export default App;
