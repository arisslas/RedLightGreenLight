import { LitElement, html, css } from 'lit';

class MyLogin extends LitElement {
  static properties = {
    header: { type: String },
    actionText: { type: String },
    userName: { type: String },
  };

  static styles = css`
    .container {
      width: 400px;
      margin: auto;
      padding: 36px 48px 48px 48px;
      background-color: #f2efee;

      border-radius: 11px;
      box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
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
    }

    .login-form label {
      text-align: center;
      display: block;
      margin-bottom: 8px;
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
    this.actionText = 'nanna';
    this.userName = '';
  }

  render() {
    return html`
      <div class="container">
        <h2 class="login-title">${this.userName}</h2>

        <form class="login-form">
          <div>
            <label for="name">Name </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              required
              @change=${this.updateName}
            />
          </div>
          <button
            class="btn btn--form"
            type="submit"
            value="Log in"
            @click=${this.handleAction}
          >
            Log in
          </button>
        </form>
      </div>
    `;
  }

  handleAction(e) {
    e.preventDefault();
    console.log(`boton ${this.userName}`);
  }

  updateName(e) {
    this.userName = e.srcElement.value;
    console.log(this.userName);
  }
}

customElements.define('my-login', MyLogin);
