import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Fullbody() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
      videoRef.current.pause();
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startWorkout = () => {
    setIsRunning(true);
    videoRef.current.play();
  };

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="workout-layout">
      <div className="workout-card">
       
        <h2>Forearm Workout Video</h2>
         <video
          ref={videoRef}
          src="/videos/fullbody.mp4"
          muted
          loop
          className="workout-video"
        />
          <p>Follow the workout shown in the video</p>
      </div>

      <div className="timer-panel">
        <div className="timer-circle">{formatTime(timeLeft)}</div>

        {!isRunning && timeLeft > 0 && (
          <button onClick={startWorkout} className="start-btn">
            Start Workout
          </button>
        )}

        <button
          className="next-btn"
          disabled={timeLeft > 0}
          onClick={() => navigate("/abs-workout")}
        >
          Next Workout
        </button>
      </div>
    </div>
  );
}
