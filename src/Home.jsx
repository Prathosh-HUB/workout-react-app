import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="page">
      <div className="bg-image"><img src="./imgs/gymbg.avif" alt="" /></div>

      <div className="content">
        <h1 className="hero-title">Transform Your Body</h1>
        <p className="hero-subtitle">Choose your level and start today</p>

        <div className="product-container">

          <div className="product-card">
            <div className="product-image"><img src="./imgs/OIP.webp" alt="BEginer" /></div>
            <h2>Beginner</h2>
            <p>Start simple. Build consistency.</p>
            <Link to="/focus-area">
              <button className="card-btn1">Start</button>
            </Link>
          </div>

          <div className="product-card">
            <div className="product-image"><img src="./imgs/OIP (1).webp" alt="intermediate" /></div>
            <h2>Intermediate</h2>
            <p>Push harder. Get stronger.</p>
            <Link to="/focus-area">
              <button className="card-btn2">Start</button>
            </Link>
          </div>

          <div className="product-card">
            <div className="product-image"><img src="./imgs/download.webp" alt="advance" /></div>
            <h2>Advanced</h2>
            <p>Train like an athlete.</p>
            <Link to="/focus-area">
              <button className="card-btn3">Start</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
