import r2wc from "@r2wc/react-to-web-component";
import MrCinemaApp from "./App";

let WebComponent = r2wc(MrCinemaApp);

customElements.define("backoffice-app", WebComponent);