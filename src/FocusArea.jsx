import { Link } from "react-router-dom";
import "./FocusArea.css";
import { useNavigate } from "react-router-dom";


export default function FocusArea() {
  const navigate = useNavigate();

  return (
    <div className="focus-page">
      <div className="bg-image"><img src="./imgs/gymbg.avif" alt="" /></div>

      <div className="content">
        <h1 className="focus-title">Focus Area</h1>
        <p className="focus-subtitle">Select the muscle group to train</p>

        <div className="focus-container">
       
       <Link to="/fullbody-workout" className="focus-link">
          <div className="focus-card">
            <div className="focus-image"><img src="./imgs/fullbody.webp" alt="fb" /></div>
            <h2>Full Body</h2>
          </div>
</Link>
       <Link to="/abs-workout" className="focus-link">
          <div className="focus-card">
            <div className="focus-image"><img src="./imgs/abs.webp" alt="fb" /></div>
            <h2>Abs</h2>
          </div>
</Link>
       <Link to="/chest-workout" className="focus-link">
          <div className="focus-card">
            <div className="focus-image"><img src="./imgs/chest.webp" alt="fb" /></div>
            <h2>Chest</h2>
          </div></Link>

       <Link to="/shoulder-workout" className="focus-link">
          <div className="focus-card">
            <div className="focus-image"><img src="./imgs/arm.webp" alt="fb" /></div>
            <h2>Arms</h2>
          </div>
          </Link>
       <Link to="/leg-workout" className="focus-link">
  <div className="focus-card">
    <div className="focus-image">
      <img src="./imgs/leg.webp" alt="Leg workout" />
    </div>
    <h2>Legs</h2>
  </div>
</Link>

        
       <Link to="/back-workout" className="focus-link">
          <div className="focus-card">
            <div className="focus-image"><img src="./imgs/back.webp" alt="fb" /></div>
            <h2>Back</h2>
          </div>
          </Link>
          
       <Link to="/forearm-workout" className="focus-link">
           <div className="focus-card">
            <div className="focus-image"><img src="./imgs/4arm.webp" alt="fb" /></div>
            <h2>ForeArm</h2>
          </div></Link>
          
       <Link to="/shoulder-workout" className="focus-link">
           <div className="focus-card">
            <div className="focus-image"><img src="./imgs/shoulder.webp" alt="fb" /></div>
            <h2>Shoulder</h2>
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
