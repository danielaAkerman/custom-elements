export function init() {
  class ButtonOutlined extends HTMLElement {
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
              width: calc(100% - 4px);
              height: 55px;
              background-color: white;
              border: solid 2px;
              border-radius: 4px;
              border-color: rgb(7, 158, 158);
              font-family: 'Poppins', sans-serif;
            }
            .root:hover{
              background-color: rgb(187, 245, 245);
            }
            `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("buttonoutlined-el", ButtonOutlined);
}
