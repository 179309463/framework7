import Framework7, { CSSSelector, Framework7EventsClass, Framework7Plugin } from '../app/app-class';

export namespace Button {
  interface AppMethods {
      /** loading status */
      loading(el : HTMLElement | CSSSelector) : void

      /** reset status */
      reset(el : HTMLElement | CSSSelector) : void
  }
  interface AppParams {

  }
  interface AppEvents {

  }
}

declare const ButtonComponent: Framework7Plugin;
export default ButtonComponent;