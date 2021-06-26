import { html, css, LitElement } from 'lit-element';

export class MyComponent extends LitElement {
  static get styles() {
    return css`
      .btn-steven{
        background-color:#ffbb44;
      }
      :host {
        display: block;
        padding: 25px;
        color: var(--my-component-text-color, #000);
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
    this.title = 'Hola soy Steven';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button class="btn-steven" @click=${this.__increment}>increment</button>
    `;
  }
}
