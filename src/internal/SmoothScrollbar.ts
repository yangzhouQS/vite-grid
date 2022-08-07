import type { ScrollableAPI } from '@/ts-types';
import { EventHandler } from './EventHandler';
import style from './style';
import { browser, event } from './utils';
import Scrollbar from 'smooth-scrollbar';

const MAX_SCROLL = browser.heightLimit - 1000;

export default class SmoothScrollbar implements ScrollableAPI {
	private _handler: EventHandler;
	private _scrollable: HTMLDivElement;
	private _height: number;
	private _width: number;
	private _endPointElement: HTMLDivElement;
	private _p: number;
	private _smoothScrollbar: any;

	public constructor() {
		this._handler = new EventHandler();

		this._scrollable = document.createElement('div');
		this._scrollable.classList.add('grid-scrollable');
		this._height = 0;
		this._width = 0;

		const scrollbar = Scrollbar.init(this._scrollable, {});
		console.log(scrollbar);
		this._smoothScrollbar = scrollbar;
		this._handler.on(this._scrollable, 'click', (e) => {
			if (e.target !== this._scrollable) {
				event.cancel(e);
			}
		});

		this._p = 1;

		this._endPointElement = document.createElement('div');
		this._endPointElement.classList.add('grid-scroll-end-point');
		this._update();
		this._scrollable.appendChild(this._endPointElement);
	}

	public calcTop(top: number) {
		const relativeTop = top - this.scrollTop;
		return this._scrollable.scrollTop + relativeTop;
	}

	public getElement() {
		return this._scrollable;
	}

	public setScrollSize(width: number, height: number) {
		this._width = width;
		this._height = height;
		this._update();
	}

	public get scrollWidth() {
		return this._width;
	}

	public set scrollWidth(width: number) {
		this._width = width;
		this._update();
	}

	public get scrollHeight() {
		return this._height;
	}

	public set scrollHeight(height: number) {
		this._height = height;
		this._update();
	}

	public get scrollLeft() {
		return Math.max(Math.ceil(this._scrollable.scrollLeft), 0);
	}

	public set scrollLeft(scrollLeft: number) {
		this._scrollable.scrollLeft = scrollLeft;
	}

	public get scrollTop() {
		return Math.max(Math.ceil(this._scrollable.scrollTop / this._p), 0);
	}

	public set scrollTop(scrollTop: number) {
		this._scrollable.scrollTop = scrollTop * this._p;
	}

	public onScroll(fn: EventListener) {
		this._handler.on(this._scrollable, 'scroll', fn);
	}

	public dispose() {
		this._smoothScrollbar.destroy();
		this._handler.dispose();
	}

	public update() {
		this._update();
	}

	private _update() {
		let domHeight;
		if (this._height > MAX_SCROLL) {
			const sbSize = style.getScrollBarSize();
			const { offsetHeight } = this._scrollable;
			const vScrollRange = MAX_SCROLL - offsetHeight + sbSize;
			const rScrollRange = this._height - offsetHeight + sbSize;
			this._p = vScrollRange / rScrollRange;
			domHeight = MAX_SCROLL;
		} else {
			this._p = 1;
			domHeight = this._height;
		}
		domHeight -= 1;
		const domWidth = this._width - 1;

		this._endPointElement.style.top = `${ domHeight.toFixed() }px`;
		this._endPointElement.style.left = `${ domWidth.toFixed() }px`;

		this._smoothScrollbar.update();
	}
}
