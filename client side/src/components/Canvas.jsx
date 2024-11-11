import { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import io from "socket.io-client";
const socket = io("http://localhost:5001");

export default function Canvas() {
  const [dragging, setDragging] = useState(false);
  //   const [messages, setMessages] = useState([]);
  //   const ref = useRef(null);

  //   const handleDraw = (data) => {
  //     setMessages(data);
  //   };
  //   const handleClearDrawing = () => {
  //     ref.current.clearCanvas();
  //   };
  //   useEffect(() => {
  //     socket.on("drawn", (data) => {
  //       const parsedData = JSON.parse(data);
  //       setMessages(parsedData);
  //       ref.current.loadPaths(parsedData);
  //       console.log(data);
  //     });
  //   }, []);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       socket.emit("draw", JSON.stringify(messages));
  //     }, 500);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [JSON.stringify(messages)]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* <h1>Real-time Collaborative Drawing App</h1>
      <button onClick={handleClearDrawing}>Clear!</button> */}
      {/* <button onClick={() => {
        
      }}></button> */}
      {/* <ReactSketchCanvas
        ref={ref}
        width="100%"
        height="500px"
        canvasColor="transparent"
        strokeColor="#a855f7"
        onChange={handleDraw}
      /> */}

      <div
        className="main"
        style={{ height: "100%", width: "100%", background: "red" }}
        onMouseDown={() => setDragging(true)}
        onMouseMove={(event) => {
          if (dragging) {
            console.log(event);
          }
        }}
        onMouseUp={() => setDragging(false)}
      ></div>
    </div>
  );
}
