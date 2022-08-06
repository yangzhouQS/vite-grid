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

  drawInternal(value: string, context: CellContext, style: BaseStyle, helper: GridCanvasHelperAPI, _grid: ListGridAPI<T>, info: DrawCellInfo<T>): void {
    console.log(value)
    console.log(context)
    console.log(style)
    console.log(helper)
    console.log(_grid.records)
    console.log(info)
    helper.text('111', context, {
      color: '#e00404',
      textAlign: 'right',
    })
    //
  }
}
