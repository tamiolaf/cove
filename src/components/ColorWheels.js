import '../scss/ColorWheel.scss';

const ColorWheels = () => {
  return (
    <div>
      <div className={"red wheel"}>
        <div className={"red splash"}></div>
      </div>
      <div className={"blue wheel"}>
        <div className={"blue splash"}></div>
      </div>
      <div className={"yellow wheel"}>
        <div className={"yellow splash"}></div>
      </div>
    </div>
  )
}

export default ColorWheels;