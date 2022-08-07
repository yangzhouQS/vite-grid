import { Style } from '@/columns/style/Style';
import { RowIndexStyleOption } from '@/ts-types';

export class RowIndexStyle extends Style {
	constructor(style: RowIndexStyleOption = {}) {
		super(style);
		this.textAlign = style.textAlign || 'center';
	}
}
