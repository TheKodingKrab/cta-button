import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 5px;
        --ctabuttonColor: black;
        --ctabuttonBackgroundColor: white;
        --ctabuttonActiveBackgroundColor: red;
        --ctabuttonActiveColor: white;
        --ctabuttonDisabledBackgroundColor: grey;
        --ctabuttonFontFamily: 'Times New Roman', sans-serif;
      }
      :host([disabled]) {
        pointer-events: none;
        color: var(--ctabuttonColor);
        cursor: not-allowed;
      }
      .assignment {
        background-color: var(--ctabuttonBackgroundColor: white;);
        color: var(--ctabuttonColor);
        font-size: 25px;
        font-family: var(--ctabuttonFontFamily);
        border-radius: 12px;
        border: 2px solid black;
        text-decoration: none;
        padding: 6px;
      }
      .assignment:hover,
      .assignment:focus,
      .assignment:active {
        background-color: var(--ctabuttonActiveBackgroundColor);
        color: var(--ctabuttonActiveColor);
      }
      .assignment:disabled {
        color: var(--ctabuttonColor);
        background-color: var(--ctabuttonDisabledBackgroundColor);
        cursor: not-allowed;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      disabled: { type: Boolean, reflect: true },
      icon: { type: String },
      iconleft: { type: String},
      iconright: { type: String},
    };
  }

  constructor() {
    super();
    this.title = 'Click Here!';
    this.link =
      'https://memegenerator.net/instance/85545491/yes-i-did-it-baby-yes-i-did-it';
    this.disabled = false;
    this.iconleft = 'hardware:keyboard-arrow-left';
    this.iconright = 'hardware:keyboard-arrow-right';
  }

  // _navigateToLink() {
  //   // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
  //   window.open(this.link, "_blank");
  // }

  render() {
    return html`
      <a
        href="${this.link}"
        target="_blank"
        tabindex="-1"
        rel="noopener noreferrer"
      >
        <button class="assignment" ?disabled="${this.disabled}">
          <simple-icon-lite icon="${this.iconright}"> </simple-icon-lite> ${this.title} <simple-icon-lite icon="${this.iconleft}"></simple-icon-lite>
        </button>
      </a>
    `;
  }
}
