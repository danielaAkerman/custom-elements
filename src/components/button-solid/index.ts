export function init() {
  class ButtonSolid extends HTMLElement {
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
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 55px;
              background-color: rgb(7, 158, 158);
              border-radius: 4px;
              font-family: 'Poppins', sans-serif;
            }
            .root:hover{
              background-color: rgb(15, 197, 197);
            }
            `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("buttonsolid-el", ButtonSolid);
}
