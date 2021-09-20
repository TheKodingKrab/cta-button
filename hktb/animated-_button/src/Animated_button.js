import { html, css, LitElement } from 'lit';

export class Animated_button extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 25px;
        color: var(--animated-button-text-color, #000);
        --animatedbuttonBackgroundColor: #000;
        --animatedbuttonTextColor: #ffffff;
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
        border: 2px solid var(--animatedbuttonBackgroundColor);
        border-radius: 5px;
        whitespace: nowrap;
        font-family: var(--animatedbuttonFont);
        text-decoration: none;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
      }

      button:hover {
        color: var(--animatedbuttonBackgroundColor);
        background-color: transparent;
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
        color: var(--animatedbuttonTextColor);
        background-color: var(--disabledBackground);
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
      `;
    }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      link: { type: String },
      editMode: { type: Boolean },
      buttonState: { type: Boolean },
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
        <button .disabled="${this.buttonState}">${this.title}</button>
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
