import React, { useState, useEffect } from "react";
import "./Animation.css";

const Animation = () => {
  const fieldWidth = 600;
  const fieldHeight = 400;
  const diameter = 100;

  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;

  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [spinDuration, setSpinDuration] = useState("2s");

  const toggleRun = () => {
    setRunning(!running);
    if (!running) {
      startSpin();
    } else {
      stopSpin();
    }
  };

  const calculate = () => {
    setX((prevX) => {
      if (goRight) {
        if (prevX >= maxLeft) {
          setGoRight(false);
          setRandomSpinSpeed();
          return prevX;
        }
        return prevX + 5;
      } else {
        if (prevX <= 0) {
          setGoRight(true);
          setRandomSpinSpeed();
          return prevX;
        }
        return prevX - 5;
      }
    });

    setY((prevY) => {
      if (goDown) {
        if (prevY >= maxTop) {
          setGoDown(false);
          setRandomSpinSpeed();
          return prevY;
        }
        return prevY + 5;
      } else {
        if (prevY <= 0) {
          setGoDown(true);
          setRandomSpinSpeed();
          return prevY;
        }
        return prevY - 5;
      }
    });
  };

  const process = () => {
    if (running) {
      calculate();
    }
  };

  const startSpin = () => {
    const ball = document.getElementById("ball");
    ball.style.animation = `spin ${spinDuration} linear infinite`;
  };

  const stopSpin = () => {
    const ball = document.getElementById("ball");
    ball.style.animation = "none";
  };

  const setRandomSpinSpeed = () => {
    const randomDuration = Math.floor(Math.random() * 1.5) + 0.5;
    setSpinDuration(`${randomDuration}s`);
  };

  useEffect(() => {
    setRandomSpinSpeed();
    const interval = setInterval(process, 25);
    return () => clearInterval(interval);
  }, [running, goRight, goDown]);

  const swapBall = (image) => {
    const ball = document.getElementById("ball");
    ball.style.backgroundImage = `url('/${image}.png')`; // เส้นทางของรูปภาพ
    ball.style.backgroundSize = "100% 100%"; // ทำให้รูปเต็มพื้นที่บอล
    ball.style.backgroundPosition = "center"; // จัดรูปภาพให้อยู่ตรงกลาง
    ball.style.backgroundRepeat = "no-repeat"; // ไม่ให้รูปภาพซ้ำ
  };

  return (
    <div>
      <div
        id="field"
        style={{
          width: fieldWidth,
          height: fieldHeight,
          position: "relative",
          border: "1px solid black",
        }}
      >
        <div
          id="ball"
          style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            height: `${diameter}px`,
            width: `${diameter}px`,
            borderRadius: "50%",
            backgroundSize: "100% 100%", // ทำให้รูปเต็มพื้นที่บอล
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", // ป้องกันการซ้ำของรูป
          }}
        />
      </div>
      <button
        id="run"
        onClick={toggleRun}
        className={`btn ${running ? "btn-danger" : "btn-success"}`}
      >
        {running ? "PAUSE" : "RUN"}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => swapBall("Basketball")}
      >
        Basketball
      </button>
      <button className="btn btn-primary" onClick={() => swapBall("football")}>
        Football
      </button>
      <button
        className="btn btn-primary"
        onClick={() => swapBall("volleyball")}
      >
        Volleyball
      </button>
      <button className="btn btn-primary" onClick={() => swapBall("face")}>
        Human
      </button>
      <button className="btn btn-primary" onClick={() => swapBall("cartoon")}>
        Cartoon
      </button>
      <button className="btn btn-primary" onClick={() => swapBall("logo")}>
        Logo
      </button>
    </div>
  );
};

export default Animation;
