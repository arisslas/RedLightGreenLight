import { LitElement, html, css } from 'lit';
import './my-login.js';

class LightGame extends LitElement {
  static properties = {
    header: { type: String },
    isActive: { type: Boolean },
  };

  static styles = css``;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html` <my-login></my-login> `;
  }
}

customElements.define('light-game', LightGame);
