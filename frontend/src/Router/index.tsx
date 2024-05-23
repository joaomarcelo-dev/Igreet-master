import { Route, Routes } from "react-router-dom";


import Error404 from "../pages/404";

import Form from "../pages/Form";


export default function Router() {
  return (
    <Routes>
      <Route path="/form/:codeService" element={ <Form /> } />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}