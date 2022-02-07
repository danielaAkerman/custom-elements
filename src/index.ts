import { init as headerComp } from "./components/header/index";
import { init as tituloComp } from "./components/titulo/index";
import { init as subtituloComp } from "./components/subtitulo/index";
import { init as textField } from "./components/text-field/index";
import { init as buttonSolid } from "./components/button-solid/index";
import { init as largeText } from "./components/large/index";
import { init as bodyText } from "./components/body/index";
import { init as ButtonOutlined } from "./components/button-outlined/index";
import { init as footer } from "./components/footer/index";

(function main() {
  headerComp();
  tituloComp();
  subtituloComp();
  textField();
  buttonSolid();
  largeText();
  bodyText();
  ButtonOutlined();
  footer();
})();
