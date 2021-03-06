import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import F7Icon from './icon';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';

class F7Chip extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.__reactRefs = {};

    (() => {
      Utils.bindMethods(this, ['onClick', 'onDeleteClick']);
    })();
  }

  onClick(event) {
    this.dispatchEvent('click', event);
  }

  onDeleteClick(event) {
    this.dispatchEvent('delete', event);
  }

  render() {
    const self = this;
    const props = self.props;
    const {
      media,
      text,
      deleteable,
      className,
      id,
      style,
      mediaTextColor,
      mediaBgColor,
      outline,
      icon,
      iconMaterial,
      iconF7,
      iconMd,
      iconIos,
      iconAurora,
      iconColor,
      iconSize
    } = props;
    let iconEl;
    let mediaEl;
    let labelEl;
    let deleteEl;

    if (icon || iconMaterial || iconF7 || iconMd || iconIos || iconAurora) {
      iconEl = React.createElement(F7Icon, {
        material: iconMaterial,
        f7: iconF7,
        icon: icon,
        md: iconMd,
        ios: iconIos,
        aurora: iconAurora,
        color: iconColor,
        size: iconSize
      });
    }

    if (media || iconEl || self.slots && self.slots.media) {
      const mediaClasses = Utils.classNames('chip-media', mediaTextColor && `text-color-${mediaTextColor}`, mediaBgColor && `bg-color-${mediaBgColor}`);
      mediaEl = React.createElement('div', {
        className: mediaClasses
      }, iconEl, media, this.slots['media']);
    }

    if (text || self.slots && (self.slots.text || self.slots.default && self.slots.default.length)) {
      labelEl = React.createElement('div', {
        className: 'chip-label'
      }, text, this.slots['text'], this.slots['default']);
    }

    if (deleteable) {
      deleteEl = React.createElement('a', {
        ref: __reactNode => {
          this.__reactRefs['deleteEl'] = __reactNode;
        },
        className: 'chip-delete'
      });
    }

    const classes = Utils.classNames(className, 'chip', {
      'chip-outline': outline
    }, Mixins.colorClasses(props));
    return React.createElement('div', {
      ref: __reactNode => {
        this.__reactRefs['el'] = __reactNode;
      },
      id: id,
      style: style,
      className: classes
    }, mediaEl, labelEl, deleteEl);
  }

  componentWillUnmount() {
    this.refs.el.removeEventListener('click', this.onClick);

    if (this.refs.deleteEl) {
      this.refs.deleteEl.removeEventListener('click', this.onDeleteClick);
    }
  }

  componentDidMount() {
    this.refs.el.addEventListener('click', this.onClick);

    if (this.refs.deleteEl) {
      this.refs.deleteEl.addEventListener('click', this.onDeleteClick);
    }
  }

  get slots() {
    return __reactComponentSlots(this.props);
  }

  dispatchEvent(events, ...args) {
    return __reactComponentDispatchEvent(this, events, ...args);
  }

  get refs() {
    return this.__reactRefs;
  }

  set refs(refs) {}

}

__reactComponentSetProps(F7Chip, Object.assign(Object.assign({
  id: [String, Number],
  className: String,
  style: Object,
  media: String,
  text: [String, Number],
  deleteable: Boolean,
  mediaBgColor: String,
  mediaTextColor: String,
  outline: Boolean
}, Mixins.colorProps), Mixins.linkIconProps));

F7Chip.displayName = 'f7-chip';
export default F7Chip;