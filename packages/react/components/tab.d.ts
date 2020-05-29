import * as React from 'react';

declare namespace F7Tab {
  interface Props {
    slot? : string
    id? : string | number
    className? : string
    style? : React.CSSProperties
    tabActive? : boolean
    color? : string
    colorTheme? : string
    textColor? : string
    bgColor? : string
    borderColor? : string
    rippleColor? : string
    themeDark? : boolean
    pageContent? : boolean
    ptr? : boolean
    ptrDistance? : number
    ptrPreloader? : boolean
    ptrBottom? : boolean
    ptrMousewheel? : boolean
    infinite? : boolean
    infiniteTop? : boolean
    infiniteDistance? : number
    infinitePreloader? : boolean
    hideBarsOnScroll? : boolean
    hideNavbarOnScroll? : boolean
    hideToolbarOnScroll? : boolean
    onPtrPullStart? : (...args: any[]) => void
    onPtrPullMove? : (...args: any[]) => void
    onPtrPullEnd? : (...args: any[]) => void
    onPtrRefresh? : (...args: any[]) => void
    onPtrDone? : (...args: any[]) => void
    onInfinite? : (...args: any[]) => void
    onTabShow? : (el?: any) => void
    onTabHide? : (el?: any) => void
  }
}
declare class F7Tab extends React.Component<F7Tab.Props, {}> {
  onPtrPullStart(...args : any[]) : unknown
  onPtrPullMove(...args : any[]) : unknown
  onPtrPullEnd(...args : any[]) : unknown
  onPtrRefresh(...args : any[]) : unknown
  onPtrDone(...args : any[]) : unknown
  onInfinite(...args : any[]) : unknown
  show(animate? : any) : unknown
  onTabShow(el? : any) : unknown
  onTabHide(el? : any) : unknown
}
export default F7Tab;