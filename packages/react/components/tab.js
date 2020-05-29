import React from 'react';
import f7 from '../utils/f7';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import F7PageContent from './page-content';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';

class F7Tab extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.__reactRefs = {};

    this.state = (() => {
      return {
        tabContent: null
      };
    })();

    (() => {
      Utils.bindMethods(this, ['onTabShow', 'onTabHide', 'onPtrPullStart', 'onPtrPullMove', 'onPtrPullEnd', 'onPtrRefresh', 'onPtrDone', 'onInfinite']);
    })();
  }

  onPtrPullStart(...args) {
    this.dispatchEvent('ptr:pullstart ptrPullStart', ...args);
  }

  onPtrPullMove(...args) {
    this.dispatchEvent('ptr:pullmove ptrPullMove', ...args);
  }

  onPtrPullEnd(...args) {
    this.dispatchEvent('ptr:pullend ptrPullEnd', ...args);
  }

  onPtrRefresh(...args) {
    this.dispatchEvent('ptr:refresh ptrRefresh', ...args);
  }

  onPtrDone(...args) {
    this.dispatchEvent('ptr:done ptrDone', ...args);
  }

  onInfinite(...args) {
    this.dispatchEvent('infinite', ...args);
  }

  show(animate) {
    if (!this.$f7) return;
    this.$f7.tab.show(this.refs.el, animate);
  }

  onTabShow(el) {
    if (this.eventTargetEl !== el) return;
    this.dispatchEvent('tab:show tabShow', el);
  }

  onTabHide(el) {
    if (this.eventTargetEl !== el) return;
    this.dispatchEvent('tab:hide tabHide', el);
  }

  render() {
    const self = this;
    const props = self.props;
    const {
      tabActive,
      id,
      className,
      style,
      pageContent,
      ptr,
      ptrDistance,
      ptrPreloader,
      ptrBottom,
      ptrMousewheel,
      infinite,
      infiniteDistance,
      infinitePreloader,
      infiniteTop,
      hideBarsOnScroll,
      hideNavbarOnScroll,
      hideToolbarOnScroll
    } = props;
    const tabContent = self.state.tabContent;
    const classes = Utils.classNames(className, 'tab', {
      'tab-active': tabActive
    }, Mixins.colorClasses(props));
    let TabContent;
    if (tabContent) TabContent = tabContent.component;
    {
      if (pageContent) {
        return React.createElement(F7PageContent, {
          id: id,
          style: style,
          ref: __reactNode => {
            this.__reactRefs['el'] = __reactNode;
          },
          className: classes,
          ptr: ptr,
          ptrDistance: ptrDistance,
          ptrPreloader: ptrPreloader,
          ptrBottom: ptrBottom,
          ptrMousewheel: ptrMousewheel,
          infinite: infinite,
          infiniteTop: infiniteTop,
          infiniteDistance: infiniteDistance,
          infinitePreloader: infinitePreloader,
          onPtrPullStart: self.onPtrPullStart,
          onPtrPullMove: self.onPtrPullMove,
          onPtrPullEnd: self.onPtrPullEnd,
          onPtrRefresh: self.onPtrRefresh,
          onPtrDone: self.onPtrDone,
          onInfinite: self.onInfinite,
          hideBarsOnScroll: hideBarsOnScroll,
          hideNavbarOnScroll: hideNavbarOnScroll,
          hideToolbarOnScroll: hideToolbarOnScroll
        }, tabContent ? React.createElement(TabContent, Object.assign({
          key: tabContent.id
        }, tabContent.props)) : this.slots['default']);
      }

      return React.createElement('div', {
        id: id,
        style: style,
        ref: __reactNode => {
          this.__reactRefs['el'] = __reactNode;
        },
        className: classes
      }, tabContent ? React.createElement(TabContent, Object.assign({
        key: tabContent.id
      }, tabContent.props)) : this.slots['default']);
    }
  }

  componentDidMount() {
    const self = this;
    const el = self.refs.el;
    self.setState({
      tabContent: null
    });
    self.$f7ready(() => {
      self.$f7.on('tabShow', self.onTabShow);
      self.$f7.on('tabHide', self.onTabHide);
      self.eventTargetEl = el;
      self.routerData = {
        el,
        component: self,

        setTabContent(tabContent) {
          self.setState({
            tabContent
          });
        }

      };
      f7.routers.tabs.push(self.routerData);
    });
  }

  componentWillUnmount() {
    const self = this;

    if (self.$f7) {
      self.$f7.off('tabShow', self.onTabShow);
      self.$f7.off('tabHide', self.onTabHide);
    }

    if (!self.routerData) return;
    f7.routers.tabs.splice(f7.routers.tabs.indexOf(self.routerData), 1);
    self.routerData = null;
    self.eventTargetEl = null;
    delete self.routerData;
    delete self.eventTargetEl;
  }

  componentDidUpdate() {
    const self = this;
    if (!self.routerData) return;
    f7.events.emit('tabRouterDidUpdate', self.routerData);
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

__reactComponentSetProps(F7Tab, Object.assign(Object.assign({
  id: [String, Number],
  className: String,
  style: Object,
  tabActive: Boolean
}, Mixins.colorProps), {}, {
  pageContent: {
    type: Boolean,
    default: false
  },
  ptr: Boolean,
  ptrDistance: Number,
  ptrPreloader: {
    type: Boolean,
    default: true
  },
  ptrBottom: Boolean,
  ptrMousewheel: Boolean,
  infinite: Boolean,
  infiniteTop: Boolean,
  infiniteDistance: Number,
  infinitePreloader: {
    type: Boolean,
    default: true
  },
  hideBarsOnScroll: Boolean,
  hideNavbarOnScroll: Boolean,
  hideToolbarOnScroll: Boolean
}));

F7Tab.displayName = 'f7-tab';
export default F7Tab;