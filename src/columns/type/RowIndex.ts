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

  drawInternal(value: string, context: CellContext, style: BaseStyle, helper: GridCanvasHelperAPI, grid: ListGridAPI<T>, info: DrawCellInfo<T>): void {
    console.log(value)
    console.log(context)
    console.log(style)
    console.log(helper)
    console.log(grid)
    console.log(info)
    //
  }
}
