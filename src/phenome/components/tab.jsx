/* eslint array-callback-return: "off" */
/* eslint consistent-return: "off" */
import f7 from '../utils/f7';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';

import F7PageContent from './page-content';

export default {
  name: 'f7-tab',
  props: {
    id: [String, Number],
    className: String, // phenome-react-line
    style: Object, // phenome-react-line
    tabActive: Boolean,
    ...Mixins.colorProps,
    // Page Content Props
    pageContent: {
      type: Boolean,
      default: false,
    },
    ptr: Boolean,
    ptrDistance: Number,
    ptrPreloader: {
      type: Boolean,
      default: true,
    },
    ptrBottom: Boolean,
    ptrMousewheel: Boolean,
    infinite: Boolean,
    infiniteTop: Boolean,
    infiniteDistance: Number,
    infinitePreloader: {
      type: Boolean,
      default: true,
    },
    hideBarsOnScroll: Boolean,
    hideNavbarOnScroll: Boolean,
    hideToolbarOnScroll: Boolean,
  },
  state() {
    return {
      tabContent: null,
    };
  },
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
      hideToolbarOnScroll,
    } = props;
    const tabContent = self.state.tabContent;

    const classes = Utils.classNames(
      className,
      'tab',
      {
        'tab-active': tabActive,
      },
      Mixins.colorClasses(props),
    );

    let TabContent;
    if (tabContent) TabContent = tabContent.component;
    if (process.env.COMPILER === 'react') {
      if (pageContent) {
        return (
          <F7PageContent id={id} style={style} ref="el" className={classes}
            ptr={ptr}
            ptrDistance={ptrDistance}
            ptrPreloader={ptrPreloader}
            ptrBottom={ptrBottom}
            ptrMousewheel={ptrMousewheel}
            infinite={infinite}
            infiniteTop={infiniteTop}
            infiniteDistance={infiniteDistance}
            infinitePreloader={infinitePreloader}
            onPtrPullStart={self.onPtrPullStart}
            onPtrPullMove={self.onPtrPullMove}
            onPtrPullEnd={self.onPtrPullEnd}
            onPtrRefresh={self.onPtrRefresh}
            onPtrDone={self.onPtrDone}
            onInfinite={self.onInfinite}
            hideBarsOnScroll={hideBarsOnScroll}
            hideNavbarOnScroll={hideNavbarOnScroll}
            hideToolbarOnScroll={hideToolbarOnScroll}
          >
            {tabContent ? (
              <TabContent key={tabContent.id} {...tabContent.props} />
            ) : (
              <slot />
            )}
          </F7PageContent>
        );
      }
      return (
        <div id={id} style={style} ref="el" className={classes}>
          {tabContent ? (
            <TabContent key={tabContent.id} {...tabContent.props} />
          ) : (
            <slot />
          )}
        </div>
      );
    }
    if (process.env.COMPILER === 'vue') {
      if (pageContent) {
        return (
          <F7PageContent id={id} style={style} ref="el" className={classes}
            ptr={ptr}
            ptrDistance={ptrDistance}
            ptrPreloader={ptrPreloader}
            ptrBottom={ptrBottom}
            ptrMousewheel={ptrMousewheel}
            infinite={infinite}
            infiniteTop={infiniteTop}
            infiniteDistance={infiniteDistance}
            infinitePreloader={infinitePreloader}
            onPtrPullStart={self.onPtrPullStart}
            onPtrPullMove={self.onPtrPullMove}
            onPtrPullEnd={self.onPtrPullEnd}
            onPtrRefresh={self.onPtrRefresh}
            onPtrDone={self.onPtrDone}
            onInfinite={self.onInfinite}
            hideBarsOnScroll={hideBarsOnScroll}
            hideNavbarOnScroll={hideNavbarOnScroll}
            hideToolbarOnScroll={hideToolbarOnScroll}
          >
            {tabContent ? (
              <TabContent key={tabContent.id} {...tabContent.props} />
            ) : (
              <slot />
            )}
          </F7PageContent>
        );
      }
      return (
        <div id={id} style={style} ref="el" className={classes}>
          {tabContent ? (
            <TabContent key={tabContent.id} props={tabContent.props} />
          ) : (
            <slot />
          )}
        </div>
      );
    }
  },
  componentDidCreate() {
    Utils.bindMethods(this, [
      'onTabShow', 
      'onTabHide',
      'onPtrPullStart',
      'onPtrPullMove',
      'onPtrPullEnd',
      'onPtrRefresh',
      'onPtrDone',
      'onInfinite'
    ]);
  },
  componentDidUpdate() {
    const self = this;
    if (!self.routerData) return;
    f7.events.emit('tabRouterDidUpdate', self.routerData);
  },
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
  },
  componentDidMount() {
    const self = this;
    const el = self.refs.el;

    self.setState({ tabContent: null });

    self.$f7ready(() => {
      self.$f7.on('tabShow', self.onTabShow);
      self.$f7.on('tabHide', self.onTabHide);
      self.eventTargetEl = el;
      self.routerData = {
        el,
        component: self,
        setTabContent(tabContent) {
          self.setState({ tabContent });
        },
      };
      f7.routers.tabs.push(self.routerData);
    });
  },
  methods: {
    onPtrPullStart(...args) {
      this.dispatchEvent('ptr:pullstart ptrPullStart', ...args);
    },
    onPtrPullMove(...args) {
      this.dispatchEvent('ptr:pullmove ptrPullMove', ...args);
    },
    onPtrPullEnd(...args) {
      this.dispatchEvent('ptr:pullend ptrPullEnd', ...args);
    },
    onPtrRefresh(...args) {
      this.dispatchEvent('ptr:refresh ptrRefresh', ...args);
    },
    onPtrDone(...args) {
      this.dispatchEvent('ptr:done ptrDone', ...args);
    },
    onInfinite(...args) {
      this.dispatchEvent('infinite', ...args);
    },
    show(animate) {
      if (!this.$f7) return;
      this.$f7.tab.show(this.refs.el, animate);
    },
    onTabShow(el) {
      if (this.eventTargetEl !== el) return;
      this.dispatchEvent('tab:show tabShow', el);
    },
    onTabHide(el) {
      if (this.eventTargetEl !== el) return;
      this.dispatchEvent('tab:hide tabHide', el);
    },
  },
};
