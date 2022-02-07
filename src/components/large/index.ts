export function init() {
  class Large extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var label = this.getAttribute("label")
      var h3 = document.createElement("h3");
      var style = document.createElement("style");

      h3.classList.add("root");
      h3.textContent = label;

      style.textContent = `
  
            .root{
                display: block;
                font-weight: medium;
                font-size: 22px;
            }
            `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(h3);
      shadow.appendChild(style);
    }
  }
  customElements.define("largetext-el", Large);
}
