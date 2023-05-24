import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Cover from './components/Cover';
import ReviewCarousel from './components/ReviewCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Cover />
      <Info />
      <ReviewCarousel />
      <Footer />
    </div>
  );
}

export default App;
