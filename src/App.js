import './App.css';
import VideoBehindText from './components/VideoBehindText';
import ColorWheels from './components/ColorWheels';
import AshayeAlbumPortrait from './components/AshayeAlbumPortrait';

function App() {
  return (
    <div>
      <AshayeAlbumPortrait/>
      <div style={{height:"50rem"}}></div>
      <ColorWheels/>
      <div style={{height:"50rem"}}></div>
      <VideoBehindText/>
    </div>
  );
}

export default App;
