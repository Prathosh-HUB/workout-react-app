import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllWorkout.css";

export default function BackWorkout() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isRunning, setIsRunning] = useState(false);
   const navigate = useNavigate();
  const goToNextWorkout = () => {
    navigate("/forearm-workout"); // next page route
  };
  useEffect(() => {
    let timer = null;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startWorkout = () => {
    setIsRunning(true);
  };

  const nextWorkout = () => {
    setIsRunning(false);
    setTimeLeft(300);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="workout-layout">
      {/* LEFT SIDE */}
      <div className="workout-card">
        <h2>Back Workout Video</h2>

<video
  className="workout-video"
  src="./videos/backbody.mp4"
  autoPlay
  loop
  muted
  
/>
        <p>Follow the workout shown in the video</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="timer-panel">
        <div className="timer-circle">{formatTime(timeLeft)}</div>

        {!isRunning ? (
          <button className="start-btn" onClick={startWorkout}>
            Start
          </button>
        ) : (
          <button className="reset-btn" onClick={nextWorkout}>
            Reset
          </button>
        )}
        <button className="next-btn" onClick={goToNextWorkout}>
    Next Workout 
  </button>
      </div>
    </div>
  );
}
