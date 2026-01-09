

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FocusArea from "./FocusArea";
import LegWorkout from "./LegWorkout";
import ShoulderWorkout from "./ShoulderWorkout";
import ChestWorkout from "./ChestWorkout";
import BackWorkout from "./BackWorkout";
import ArmWorkout from "./ArmWorkout"; 
import AbsWorkout from "./AbsWorkout"; 
import Fullbody from "./Fullbody"; 
import ForearmWorkout from "./ForearmWorkout"; 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus-area" element={<FocusArea />} />
        <Route path="/leg-workout" element={<LegWorkout />} />
        <Route path="/shoulder-workout" element={<ShoulderWorkout />} />
        <Route path="/chest-workout" element={<ChestWorkout />} />
        <Route path="/back-workout" element={<BackWorkout />} />
        <Route path="/arm-workout" element={<ArmWorkout />} />
        <Route path="/fullbody-workout" element={<Fullbody />} />
        <Route path="/abs-workout" element={<AbsWorkout />} />
        <Route path="/forearm-workout" element={<ForearmWorkout />} />
      </Routes>
    </BrowserRouter>
  );
}

