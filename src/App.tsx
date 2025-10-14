import { BrowserRouter } from "react-router";
import LabelForm from "./home/painel/components/create-barcode-qrcode";
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <LabelForm />
    </BrowserRouter>
  );
}

export default App;
