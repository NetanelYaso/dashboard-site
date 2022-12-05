import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/featurs/Header/Header";
import ProductsProvider from "./contexts/products-contexts";
import Home from "./components/pages/Home/Home"

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Header />
        <Home />
      </ProductsProvider>
    </div>
  );
}

export default App;
