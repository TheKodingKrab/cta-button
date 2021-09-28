import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

/*
Other side notes/issues: 
Create contrast and dark mode. (CSS needs to generate dark mode, how?)
Find out how to do Sound on button click (MP3 button??) 
Keyboard navigable (tab)  
Storybook documentation (Thurs) 
Tests?????
Publish to NPM, we may go over this. 
*/

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      /*
    Want to make button look better: what stylistic choice to make? 
    How to add effects to the button? (Fireworks, confetti, etc.)
    */
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

      /*
      :host([disabled]) prevents the icons from being clicked as a link 
      Solved an issue where when disabled the icons would link to site when clicked
      */

      :host([disabled]) {
        pointer-events: none;
        color: var(--ctabuttonColor);
        background-color: var(--ctabuttonDisabledBackgroundColor);
        cursor: not-allowed;
      }

      :host([darkMode]) {
        --ctabuttonBackgroundColor: white;
        --ctabuttonColor: black;
      }

      :host([darkMode]:active) {
        --ctabuttonBackgroundColor: #c4acac;
      }

      /* 
      Why is this giving me an error? 
      Thought it was syntax error but comparsions with coltons code show no discrepancies 
      At least none that I saw (Could have missed something?)
      Again: how can we get more states/effects on this button? 
      */

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
      /* 
      Adds hover, focus, and active states to the button 
      Possible to add other states that produce effects? 
      */
      .assignment:hover,
      .assignment:focus,
      .assignment:active {
        background-color: var(--ctabuttonActiveBackgroundColor);
        color: var(--ctabuttonActiveColor);
      }
      /*
      Disables the button when box is clicked 
      Any better way to disable it then clicking a checkbox? 
      Maybe disable after link is clicked?
      */
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
      /*
      Makes the Button disabled
      iconLeft: {type: Boolean, reflect: true},
      iconRight: {type, Boolean, reflect: true}
      */
    };
  }

  // You want the default values in the contructor
  // Your constructor works because it automatically reads in the default values themselves
  // SET DEFAULT VALUES IN HERE
  constructor() {
    super();
    this.title = 'Click Here!';
    this.link =
      'https://imgflip.com/memegenerator/232844223/Soyboy-Vs-Yes-Chad';
    this.disabled = false;
    this.iconLeft = 'hardware:keyboard-arrow-left';
    this.iconRight = 'hardware:keyboard-arrow-right';
    /*
    
    */
  }
  // Why did colton comment this out? Do we even need this?
  // Still Yet to Answer:
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
          <simple-icon-lite icon="${this.iconRight}"> </simple-icon-lite> ${this
            .title}
          <simple-icon-lite icon="${this.iconLeft}"></simple-icon-lite>
        </button>
      </a>
    `;
  }
}
