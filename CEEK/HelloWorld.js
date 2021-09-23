import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
        --ctabuttonBackgroundColor: #000;
        --ctabuttonTextColor: #ffffff
        --ctabuttonFont: 'Inter', sans-serif;
        --disabledBackground: rgba(0,0,0,0.4);
        --buttonActive: #ffdada;
      }

      __button { 
        display: block;
        text-align: right;
        color: var(--ctabuttonBackgroundColor);  
        background-color: black;
        padding: 0.5rem 2rem;
        border: 2px solid royalblue;
        border-radius: 5px;
        white-space: nowrap;
        font-family: var(--ctabuttonFont);


      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
    this.buttonColor(this.counter)
  }

  _decrement() {
    if (this.counter > 0) {
      this.counter -= 1;
    }
    this.buttonColor(this.counter)
    
  }



render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <h2>${this.title} Nr. ${this.counter}!</h2>
    <button @click=${this._decrement}>decrement</button>
    <h2>${this.title} Nr. ${this.counter}!</h2>
    <button @click=${this.__button}>__button</button>
    `;
  }

  
}
