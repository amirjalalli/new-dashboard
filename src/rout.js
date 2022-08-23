import Factory from "./Pages/Factory";
import Integrations from "./Pages/Integrations";
import Reports from "./Pages/Reports";
import Support from "./Pages/Support";

let rout = [
  { path: "./", element: <Factory /> },
  { path: "./integrations", element: <Integrations /> },
  { path: "./reports", element: <Reports /> },
  { path: "./support", element: <Support /> },
];

export default rout;
