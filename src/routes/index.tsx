import { Route, Routes } from "react-router-dom";
import { Painel } from "../home/painel";

//import { NotFound } from "../components/notFound";

export function AppRoutes() {
  // const registration = LocalStorageToken.getLocalStorageRegistration();
  //const location = useLocation();

  // const isHomeRoute = location.pathname.toLowerCase().includes("/home");

  return (
    <Routes>
      <Route path="/" element={<Painel />} />
      {/* <Route
        path="/home"
        element={!registration && isHomeRoute ? <Navigate to="/" /> : <Home />}
      /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
