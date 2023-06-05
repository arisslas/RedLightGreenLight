import { LitElement, html, css } from 'lit';
import './views/my-login.js';

class LightGame extends LitElement {
  static properties = {
    header: { type: String },
    isActive: { type: String },
    playerName: { type: String },
  };

  static styles = css``;

  constructor() {
    super();
    this.header = 'My app';
    this.playerName = '';
  }

  render() {
    return html`
      <my-login
        formTitle="Create new player"
        buttonText="JOIN"
        @mi-evento=${({ detail }) => this.updateName(detail.message)}
      ></my-login>
      <div>name ${this.playerName}</div>
    `;
  }

  /* connectedCallback() {
    super.connectedCallback();
    this.addEventListener('mi-evento', (detail) => console.log(detail))
  } */

  updateName(newName) {
    this.playerName = newName;
  }
}

customElements.define('light-game', LightGame);
