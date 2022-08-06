import { BaseColumn } from "@/columns/type/BaseColumn";
import { CellContext, GridCanvasHelperAPI, ListGridAPI, RowIndexOption } from "@/ts-types";
import { BaseStyle } from "@/columns/style/BaseStyle";
import { DrawCellInfo } from "@/ts-types-internal";


export class RowIndex<T> extends BaseColumn<T, string> {
  constructor(options: RowIndexOption = {}) {
    super(options);
  }

  clone(): RowIndex<T> {
    return new RowIndex(this);
  }

  drawInternal(value: string, context: CellContext, style: BaseStyle, helper: GridCanvasHelperAPI,
               _grid: ListGridAPI<T>, info: DrawCellInfo<T>): void {
    const cellInfo = info.getCell()
    helper.text(`${cellInfo.row}`, context, {
      color: '#e00404',
      textAlign: 'center',
    })
  }
}
