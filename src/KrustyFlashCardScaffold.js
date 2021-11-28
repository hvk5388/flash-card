import { LitElement, html, css } from 'lit';

export class KrustyFlashCardScaffold extends LitElement {
  static get tag() {
    return 'krusty-flash-card-scaffold';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    setTimeout(() => {
      import('./KrustyKard.js');
    }, 0);
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {};
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
        border: 2px solid pink;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <krusty-image><slot name="back"></slot></krusty-image>
      <p><slot name="front"></slot></p>
      <flash-card-body><slot name="back"></slot></flash-card-body>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/flash-card.haxProperties.json`, import.meta.url)
      .href;
  }
}