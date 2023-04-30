import '../App.css'
import animation from '../animation.mp4';

const VideoBehindText = () => {
  return (
    <div>
      <section className="App-header">
        <div className="gsmr-logo">GSMR</div>
      </section>
      <section>

        <video id="vid" src={animation} controls autoPlay loop muted>
        </video>
      </section>
    </div>
  )
}

export default VideoBehindText;