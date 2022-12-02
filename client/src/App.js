import logo from './logo.svg';
import './App.css';
import Header from './components/featurs/Header/Header';
import Footer from './components/featurs/Footer/Footer';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
