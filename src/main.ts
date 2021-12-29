import "./style.css";
import "./types.d.ts";

import App from "./App.xht";

declare function App(): {
  $dom: HTMLElement;
};

const target = document.getElementById("root") as HTMLDivElement;

target.appendChild(App().$dom);
