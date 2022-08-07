import styleCss from './style.css';

function styleInject(id: string, css: string) {
	if (css && typeof document !== 'undefined') {
		let styleElement;
		if (id) {
			const el = document.getElementById(id);
			if (el instanceof HTMLStyleElement) {
				styleElement = el as HTMLStyleElement;
			}
		}
		if (!styleElement) {
			styleElement = document.createElement('style');
			styleElement.type = 'text/css';
			styleElement.id = id;
			const headElement =
        document.head || document.getElementsByTagName('head')[0];
			headElement.appendChild(styleElement);
		}
		if ((styleElement as any).styleSheet) {
			(styleElement as any).styleSheet.cssText = css;
		} else {
			styleElement.innerHTML = '';
			styleElement.appendChild(document.createTextNode(css));
		}
	}
}

function getScrollBarWidth() {
	// https://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes
	const inner = document.createElement('p');
	inner.style.width = '100%';
	inner.style.height = '200px';

	const outer = document.createElement('div');
	outer.style.position = 'absolute';
	outer.style.top = '0px';
	outer.style.left = '0px';
	outer.style.visibility = 'hidden';
	outer.style.width = '200px';
	outer.style.height = '150px';
	outer.style.overflow = 'hidden';
	outer.appendChild(inner);

	document.body.appendChild(outer);
	const w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	let w2 = inner.offsetWidth;
	if (w1 === w2) {
		w2 = outer.clientWidth;
	}

	document.body.removeChild(outer);

	return w1 - w2;
}

let SCROLLBAR_SIZE = 0;

const hasMusselScrollbar = () => !!(window as any).mussel?.scrollbar;
const hasPerfectScrollbar = () => !!(window as any).PerfectScrollbar;
const hasSmoothScrollbar = !!(window as any).Scrollbar;
const initDocument = () => {
	let css = styleCss;
	if (hasMusselScrollbar() || hasPerfectScrollbar()) {
		css += `
      .system-grid .grid-scroll-end-point {
        width: 1px;
        height: 1px;
      }`;
	} else {
		SCROLLBAR_SIZE = getScrollBarWidth() || 10;
		css += `
      .system-grid .grid-scrollable {
        overflow: scroll;
      }
      .system-grid .grid-scroll-end-point {
        width: ${ SCROLLBAR_SIZE }px;
        height: ${ SCROLLBAR_SIZE }px;
      }
      .system-grid > canvas {
        width: -webkit-calc(100% - ${ SCROLLBAR_SIZE }px);
        width: calc(100% - ${ SCROLLBAR_SIZE }px);
        height: -webkit-calc(100% - ${ SCROLLBAR_SIZE }px);
        height: calc(100% - ${ SCROLLBAR_SIZE }px);
      }`;
	}
	styleInject('style', css);
};

const style = {
	initDocument() {
		style.initDocument = () => {
			// nothing
		};
		initDocument();
	},
	getScrollBarSize() {
		return SCROLLBAR_SIZE;
	},
	inject: styleInject,
	hasMusselScrollbar,
	hasPerfectScrollbar,
	hasSmoothScrollbar
};

export default style;
