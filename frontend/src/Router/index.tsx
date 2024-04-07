import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import NewAppoinment from "../pages/NewAppoinment";
import Login from "../pages/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../types/Reducers.type";
import ListAppoinments from "../pages/ListAppoinments";
import AppoinmentPage from "../pages/AppoinmentPage";
import appActions from "../redux/actions/app.actions";
import localStorageUtils from "../utils/localStorage.utils";
import ListDaysOfConsult from "../pages/DaysOfConsult/ListDays";
import Error404 from "../pages/404";
import NewDayOfConsult from "../pages/DaysOfConsult/NewDay";
import AllClients from "../pages/Clients/AllClients";


export default function Router() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state: RootReducerType) => state.app);
  const { pathname } = window.location;

  const tokenLS = localStorageUtils.token.get(); 


  useEffect(() => {
    if (tokenLS) {
      dispatch(appActions.setToken(tokenLS));
      return;
    }

    if (!token && (pathname !== '/login' && !pathname.startsWith('/new-appoinment'))) {
      navigate('/login');
    }
  }, [token, navigate, pathname, dispatch, tokenLS]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-appoinment/:id" element={<NewAppoinment />} />
      <Route path="/appoinments" element={<ListAppoinments />} />
      <Route path="/appoinment/:id" element={<AppoinmentPage />} />
      <Route path="/list-days-of-consult" element={<ListDaysOfConsult />} />
      <Route path="/days-of-consult/create" element={<NewDayOfConsult />} />
      <Route path='/all-clients' element={<AllClients />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}