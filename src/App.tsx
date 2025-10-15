import { BrowserRouter } from "react-router";
import CreateBarcodeQrCode from "./home/painel/components/create-barqr-code";
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <CreateBarcodeQrCode />
    </BrowserRouter>
  );
}

export default App;
