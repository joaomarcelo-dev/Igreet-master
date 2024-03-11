import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewAppoinment from "../pages/NewAppoinment";
import Login from "../pages/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../types/Reducers.type";
import localStorageUtils from "../utils/localStorage.utils";
import appActions from "../redux/actions/app.actions";

export default function Router() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootReducerType) => state.app);
  const { pathname } = window.location;

  useEffect(() => {
    const tokenLS = localStorageUtils.token.get();

    if (tokenLS) {
      dispatch(appActions.setToken(tokenLS));
    }

    if (!token && pathname !== '/login' && !pathname.startsWith('/new-appoinment')) {
      window.location.href = '/login';
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-appoinment/:id" element={<NewAppoinment />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}