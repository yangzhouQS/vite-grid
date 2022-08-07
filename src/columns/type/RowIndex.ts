import { BaseColumn } from '@/columns/type/BaseColumn';
import type { CellContext, GridCanvasHelperAPI, ListGridAPI, RowIndexOption } from '@/ts-types';
import type { DrawCellInfo } from '@/ts-types-internal';
import type { RowIndexStyle } from '@/columns/style/RowIndexStyle';


export class RowIndex<T> extends BaseColumn<T, string> {
	constructor(options: RowIndexOption = {}) {
		super(options);
	}

	clone(): RowIndex<T> {
		return new RowIndex(this);
	}

	drawInternal(
		_value: string,
		context: CellContext,
		style: RowIndexStyle,
		helper: GridCanvasHelperAPI,
		_grid: ListGridAPI<T>,
		info: DrawCellInfo<T>
	): void {
		const {
			textBaseline,
			font,
			color,
			textOverflow,
		} = style;
		const cellInfo = info.getCell();
		helper.text(`${ cellInfo.row }`, context, {
			color,
			font,
			textAlign: 'center',
			textBaseline,
			textOverflow,
		});
	}
}
