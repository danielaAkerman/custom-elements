export function init() {
  class Titulo extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var label = this.getAttribute("label")
      var p = document.createElement("p");
      var style = document.createElement("style");

      p.classList.add("root");
      p.textContent = label;

      style.textContent = `
  
            .root{
                display: block;
                font-size: 18px;
            }
            `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(p);
      shadow.appendChild(style);
    }
  }
  customElements.define("bodytext-el", Titulo);
}
