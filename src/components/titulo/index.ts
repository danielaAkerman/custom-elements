export function init() {
  class Titulo extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var label = this.getAttribute("label")
      var h1 = document.createElement("h1");
      var style = document.createElement("style");

      h1.classList.add("root");
      h1.textContent = label;

      style.textContent = `
  
            .root{
                display: block;
                font-weight: bold;
                font-size: 52px;
            }
            `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(h1);
      shadow.appendChild(style);
    }
  }
  customElements.define("titulo-el", Titulo);
}
