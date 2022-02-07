export function init() {
  class TextField extends HTMLElement {
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
                flex-direction: column;
                font-size: 18px;
                font-family: 'Poppins', sans-serif;
                margin: auto;
            }
            input{
                display: flex;
                min-width: 312px;
                max-width: 353px;
                height: 55px;
                font-size: 18px;
                font-family: 'Poppins', sans-serif;
                border-radius: 4px;
                background-color: #c3c3c3;
                border: none;
            }
            `;

      div.innerHTML = `
      <label>${label}</label>
      <input placeholder="Ingrese su ${label}"></input>
      `      

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("textfield-el", TextField);
}
