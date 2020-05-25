import $ from 'dom7';
import Utils from '../../utils/utils';

const Button = {
  loading(el) {
    const app = this;
    const $el = $(el);
    if ($el.length) {
      const elem = $el[0];
      elem.disabled = true;
      elem.dataset.resetText = elem.innerText;
      let text = elem.dataset.loadingText ? elem.dataset.loadingText : elem.innerText;
      let color = elem.dataset.loadingIconClass ? elem.dataset.loadingIconClass : 'color-white';
      let icon = "<span class='preloader "+color+"'></span>";
      elem.innerHTML = elem.dataset.loadingIconPosition=="right" ?  (text + icon) : (icon + text);
      $el.find('.preloader').each((index, preloaderEl) => {
        app.preloader.init(preloaderEl);
      });
    }
  },
  reset(el) {
    const app = this;
    const $el = $(el);
    if ($el.length) {
      const elem = $el[0];
      elem.disabled = false;
      elem.innerHTML = elem.dataset.resetText;
    }
  }
}

export default {
  name: 'button',
  create() {
    const app = this;
    Utils.extend(app, {
      button: {
        loading: Button.loading.bind(app),
        reset: Button.reset.bind(app),
      },
    });
  },  
};
