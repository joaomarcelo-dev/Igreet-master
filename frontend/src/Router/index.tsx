import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewAppoinment from "../pages/NewAppoinment";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-appoinment/:id" element={<NewAppoinment />} />
    </Routes>
  )
}