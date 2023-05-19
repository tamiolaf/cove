import { useRef, useEffect } from "react";

export const AshayeAlbumPortrait= () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    openCamera();
  }, [videoRef]);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;


    let pixels = ctx.getImageData(0, 0, width, height);
    ctx.drawImage(video, 0, 0, width, height);

    console.log('pixels');
    console.log(pixels);

  }
/*
  const stop = (e) => {
    let video = videoRef.current;
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    for (let i = 0; i > tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }

    video.srcObject = null;
  }
*/
  const takePhoto = () => {
    paintToCanvas()
  };

  return (
    <div>
      <div>
        <video ref={videoRef} id="vid"/>
      </div>
      <button id="button" autoPlay onClick={openCamera}>
        Open WebCam
      </button>
      <button onClick={() => takePhoto()}>Take a photo</button>
      <canvas ref={photoRef} className="photo" />
      <div className="photo-booth">
          <div ref={stripRef} className="strip" />
        </div>
    </div>
  )
}

export default AshayeAlbumPortrait;