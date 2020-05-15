import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  props: Object.assign({
    id: [String, Number],
    accordionOpposite: Boolean,
    accordionHightlight: Boolean
  }, Mixins.colorProps),
  name: 'f7-accordion',

  render() {
    const _h = this.$createElement;
    const props = this.props;
    const {
      className,
      id,
      style,
      accordionOpposite,
      accordionHightlight
    } = props;
    const classes = Utils.classNames(className, 'accordion-list', accordionOpposite && 'accordion-opposite', accordionHightlight && 'accordion-hightlight', Mixins.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },

  computed: {
    props() {
      return __vueComponentProps(this);
    }

  }
};