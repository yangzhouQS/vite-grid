import { BaseColumn } from "@/columns/type/BaseColumn";
import { CellContext, GridCanvasHelperAPI, ListGridAPI, RowIndexOption } from "@/ts-types";
import { DrawCellInfo } from "@/ts-types-internal";
import { RowIndexStyle } from "@/columns/style/RowIndexStyle";


export class RowIndex<T> extends BaseColumn<T, string> {
  constructor(options: RowIndexOption = {}) {
    super(options);
  }

  clone(): RowIndex<T> {
    return new RowIndex(this);
  }

  drawInternal(
    value: string,
    context: CellContext,
    style: RowIndexStyle,
    helper: GridCanvasHelperAPI,
    _grid: ListGridAPI<T>,
    info: DrawCellInfo<T>
  ): void {
    const {
      textAlign,
      textBaseline,
      font,
      color,
      textOverflow,
    } = style
    const cellInfo = info.getCell()
    helper.text(`${ cellInfo.row }`, context, {
      color,
      font,
      textAlign,
      textBaseline,
      textOverflow,
    })
  }
}
