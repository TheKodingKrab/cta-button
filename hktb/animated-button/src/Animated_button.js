import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";


export class Animated_button extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 25px;
        color: var(--animated-button-text-color, #000);
        --animatedbuttonBackgroundColor: #ff7e1d;
        --animatedbuttonTextColor: #413d45;
        --animatedbuttonFont: sans-serif;
        --disabledBackground: rgba(0, 0, 0, 0.2); /*light grey*/
        --buttonActive: #CBC3E3; /*light purple*/
      }
  
      button {
        display: inline-block;
        text-align: center;
        color: var(--animatedbuttonTextColor);
        background-color: var(--animatedbuttonBackgroundColor);
        padding: 0.5rem 2rem;
        margin-bottom: 10px;
        border: 2px solid var(--animatedbuttonBackgroundColor);
        border-radius: 5px;
        whitespace: nowrap;
        font-family: var(--animatedbuttonFont);
        font-size: 0.8em;
        text-decoration: none;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        min-width: 200px;
      }

      button:hover {
        color: rgba(65,61,69,0.6);
        background-color: #ff9c03;
        text-decoration: none;
        cursor: pointer;
      }

      button:focus {
        color: var(--animatedbuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
        outline: 0;
      }

      button:disabled {
        /*color: var(--animatedbuttonTextColor);
        background-color: var(--disabledBackground);*/
        opacity: 0.6;
        cursor: not-allowed;
      }

      button:active {
        background-color: var(--buttonActive);
      }

      a {
        font-family: var(--animatedbuttonFont);
        color: var(--animatedbuttonTextColor);
        text-decoration: none;
      }

      a:hover {
        color: var(--animatedbuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
      }

      a:focus {
        color: var(--animatedbuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
      }

      label {
        margin-left: 15px;
        color: var(--animatedbuttonTextColor);
        font-family: var(--animatedbuttonFont);
        font-size: 0.8em;
      }
      `;
    }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      link: { type: String },
      editMode: { type: Boolean },
      buttonState: { type: Boolean },
      icon: { type: String },
    };
  }

  static get tag() {
    return 'animated-button';
  }

  constructor() {
    super();
    this.title = 'CTA Button';
    this.link = 'https://www.headspace.com/';
    this.buttonState = false;
    this.accentColor = 'salmon';
    this.icon = 'image:wb-sunny';
    if (this.querySelector('a')) {
      this.link = this.querySelector('a').getAttribute('href');
      this.title = this.querySelector('button').value;
      this.innerHTML = null;
    }
  }

  _clickButton(e) {
    if (this.editMode) {
      // because bryan told me to
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  __toggleDisabled() {
    if (this.buttonState === false) {
      this.buttonState = true;
    } else {
      this.buttonState = false;
    }
  }

  render() {
    return html`
      <a
        tabindex="-1"
        href="${this.link}"
        target="_blank"
        rel="noopener"
        role="button"
        part="animated-button-link"
        @click=${this._clickButton}
        ?contenteditable="${this.editMode}"
      >
        <button .disabled="${this.buttonState}">
          <simple-icon-lite icon="${this.icon}"></simple-icon-lite>
          ${this.title}
        </button>
      </a>
      <br />
      <label for="disableCheck">Disable button</label>
      <input
        id="disableCheck"
        type="checkbox"
        name="disableCheck"
        @click=${this.__toggleDisabled}
      />
    `;
  }
}
