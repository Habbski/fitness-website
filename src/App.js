import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Cover from './components/Cover';
import ReviewCarousel from './components/ReviewCarousel';

function App() {
  return (
    <div className='App'>
      <Cover />
      <Info />
      <ReviewCarousel />
    </div>
  );
}

export default App;
