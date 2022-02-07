export function init() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var label = this.getAttribute("label");
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
              background-color: #FF8282;
              width: 100%;
              height: 60px;
          }
          @media(min-width: 800px){
            .root{
                height: 80px;
            }
        }
          `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("header-el", Header);
}
