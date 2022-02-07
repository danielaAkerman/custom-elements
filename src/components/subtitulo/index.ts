export function init() {
  class Subtitulo extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var label = this.getAttribute("label")
      var h2 = document.createElement("h2");
      var style = document.createElement("style");

      h2.classList.add("root");
      h2.textContent = label;

      style.textContent = `
  
            .root{
                display: block;
                font-weight: bold;
                font-size: 38px;
                margin-top: 75px;
            }
            `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(h2);
      shadow.appendChild(style);
    }
  }
  customElements.define("subtitulo-el", Subtitulo);
}
