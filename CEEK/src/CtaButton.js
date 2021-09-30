import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 25px;
        --ctabuttonColor: black; 
        --ctabuttonBackgroundColor: white; 
        --ctabuttonActiveBackgroundColor: green; 
        --ctabuttonActiveColor: yellow; 
        --ctabuttonDarkColor: white;
        --ctabuttonDarkBackgroundColor: black;
        --ctabuttonDisabledBackgroundColor: grey;
        --ctabuttonFontFamily: 'Times New Roman', sans-serif;

       
      }

      :host([disabled]) {
        pointer-events: none;
        color: var(--ctabuttonColor);
        cursor: not-allowed;
      }

      :host([dark]) {
        --ctabuttonBackgroundColor: white;
        --ctabuttonTextColor: black;
      }

      :host([colorful]) {
        --ctabuttonBackgroundColor: #ff00d4
        --ctabuttonTextColor: #66ff00
      }
      
      .assignment {
        
        display: inline-block;
        text-align: center;
        color: var(--ctabuttonColor);
        background-color: var(--ctabuttonBackgroundColor);
        font-size: 25px;
        padding: 0.5rem 2rem;
        font-family: var(--ctabuttonFontFamily);
        border-radius: 12px;
        border: 2px solid black;
        text-decoration: none;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        
      }
      .assignment:hover{
        color: white;
        background-color: black;
        border-color: var(--ctabuttonBackgroundColor);
        text-decoration: none;
        cursor: pointer;
      }
      .assignment:focus {
        color: var(--ctabuttonBackgroundColor);
        background-color: green;
        text-decoration: none;
      }
      .assignment:active {
        background-color: var(--ctabuttonActiveBackgroundColor);
        color: var(--ctabuttonActiveColor);
      }
      .assignment:disabled {
        color: var(--ctabuttonColor);
        background-color: var(--ctabuttonDisabledBackgroundColor);
        cursor: not-allowed;
      }
      :host([dark]) .assignment {
        color:var(--ctabuttonDarkColor);
        background-color: var(--ctabuttonDarkBackgroundColor);
      }
      :host([colorful]) .assignment {
        color: #ff00d4;
        background-color: #66ff00;
        border-color: black;
      }
      
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      disabled: { type: Boolean, reflect: true },
      icon: { type: String },
      iconleft: { type: String },
      iconright: { type: String },
      dark: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'Click Here!';
    this.title2 = 'to find out';
    this.title3 = 'what';
    this.title4 = 'the dog doin';
    this.link =
      'https://memegenerator.net/instance/85545491/yes-i-did-it-baby-yes-i-did-it';
    this.disabled = false;
    this.accentColor = 'red';
    this.dark = false;
    this.iconleft = 'hardware:keyboard-arrow-left';
    this.iconright = 'hardware:keyboard-arrow-right';
    this.sound = 'https://www.myinstants.com/media/sounds/what-da-dog-doin.mp3';
  }

  // eslint-disable-next-line class-methods-use-this
  __click() {
    this.__audio = new Audio();
    this.__audio.src = this.sound;
    this.__audio.play();
  }

  render() {
    return html`
      <a
        href="${this.link}"
        target="_blank"
        tabindex="-1"
        rel="noopener noreferrer"
        @click="${this.__click}"
      >
        <button perspective class="assignment" ?disabled="${this.disabled}">
          <simple-icon-lite icon="${this.iconright}"> </simple-icon-lite>

          ${this.title}
          <simple-icon-lite icon="${this.iconleft}"></simple-icon-lite>
        </button>
      </a>
    `;
  }
}
