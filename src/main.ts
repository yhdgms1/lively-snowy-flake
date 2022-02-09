import "./style.css";
import "./types.d.ts";

import App from "./App.xht";

const target = document.getElementById("root") as HTMLDivElement;

target.appendChild(App().$dom);
