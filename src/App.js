import './App.css';
import VideoBehindText from './components/VideoBehindText';
import ColorWheels from './components/ColorWheels';

function App() {
  return (
    <div>
      <ColorWheels/>
      <div style={{height:"50rem"}}></div>
      <VideoBehindText/>
    </div>
  );
}

export default App;
