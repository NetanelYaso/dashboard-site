import './App.css';
import Header from "./components/featurs/Header/Header";
import ProductsProvider from "./contexts/products-contexts";
import Home from "./components/pages/Home/Home"
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>
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
