import Router from "./router";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./style/global";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}
