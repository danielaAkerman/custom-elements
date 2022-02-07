export function init() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var label = this.getAttribute("label")
      var div = document.createElement("div");
      var style = document.createElement("style");

      div.classList.add("root");
      div.textContent = label;

      style.textContent = `

          .root{
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 22px;
              background-color: #FFA0EA;
              width: 100%;
              height: 233px;
          }
          `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("footer-el", Footer);
}
