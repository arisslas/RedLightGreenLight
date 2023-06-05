import { LitElement, html, css } from 'lit';
// TO-DO: refactor component properties to make-it reusable
class MyLogin extends LitElement {
  static properties = {
    header: { type: String },
    buttonText: { type: String },
    userName: { type: String },
    formTitle: { type: String },
  };

  static styles = css`
    .container {
      width: 300px;
      margin: auto;
      padding: 36px 48px 48px 48px;
      background-color: #f2efee;
      border-radius: 11px;
      box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
      text-align: center;
    }

    .login-title {
      padding: 15px;
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }

    .login-form {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 16px;
      position: relative;
    }

    .login-form label {
      position: absolute;
      margin: 15px 0;
      padding: 0 4px;
      color: #6c757d;
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      top: 0;
      left: 17px;
      transition: all 0.2s;
      transform-origin: 0% 0%;
      background: none;
      pointer-events: none;
    }

    .login-form input:valid + label,
    .login-form input:focus + label {
      transform: scale(0.8) translateY(-30px);
    }

    .login-form input {
      width: 100%;
      padding: 1.2rem;
      border-radius: 9px;
      border: none;
    }

    .login-form input:focus {
      outline: none;
      box-shadow: 0 0 0 4px rgba(253, 242, 233, 0.5);
      border: blue;
    }

    .btn--form {
      background-color: #f48982;
      color: #fdf2e9;
      align-self: end;
      padding: 8px;
    }

    .btn,
    .btn:link,
    .btn:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      border-radius: 9px;
      border: none;

      cursor: pointer;
      font-family: inherit;

      transition: all 0.3s;
    }

    button {
      outline: 1px solid #f48982;
    }

    .btn--form:hover {
      background-color: #fdf2e9;
      color: #f48982;
    }
  `;

  constructor() {
    super();
    this.buttonText = 'Register';
    this.userName = '';
  }

  render() {
    return html`
      <div class="container">
        <img src="./assets/mouse.png" width="100" alt="Form icon" />
        ${this.formTitle
          ? html`<h2 class="login-title">${this.formTitle}</h2>`
          : ''}

        <form class="login-form">
          <div class="field">
            <input
              id="userName"
              type="text"
              name="name"
              required
              @change=${this.updateName}
            />
            <label for="userName" title="formTitle">Name</label>
          </div>
          <button
            class="btn btn--form"
            type="submit"
            value="Log in"
            @click=${this.handleAction}
          >
            ${this.buttonText}
          </button>
        </form>
      </div>
    `;
  }

  handleAction(e) {
    e.preventDefault();
    if (this.userName) {
      const event = new CustomEvent('mi-evento', {
        detail: {
          message: this.userName,
        },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  }

  updateName(e) {
    this.userName = e.srcElement.value;
  }
}

customElements.define('my-login', MyLogin);
