import type { ColumnMenuItemOptions } from '../define';
import { CellAddress } from '@/ts-types';
import { ListGrid } from '@/ListGrid';
import { DataTransfer } from '@/ts-types-internal';

export interface BaseColumnOption {
  fadeinWhenCallbackInPromise?: boolean | null;
  transfer?: DataTransfer;
  copyTransfer?: DataTransfer;
  hidden?: boolean | ((record: any) => boolean)
}

export interface ITransformOption {
  value: unknown,
  cell: CellAddress,
  grid: ListGrid<any>
}

export interface NumberColumnOption extends BaseColumnOption {
  format?: Intl.NumberFormat;
}

export interface ButtonColumnOption extends BaseColumnOption {
  caption?: string;
}

export interface MenuColumnOption extends BaseColumnOption {
  options?: ColumnMenuItemOptions;
}

export interface IconColumnOption extends BaseColumnOption {
  tagName?: string;
  className?: string;
  content?: string;
  name?: string;
  iconWidth?: number;
}

export interface PercentCompleteBarColumnOption extends BaseColumnOption {
  min?: number;
  max?: number;
  formatter?: (value: string) => string;
}

export interface BranchGraphColumnOption extends BaseColumnOption {
  start?: 'top' | 'bottom';
  cache?: boolean;
}

// 自定义列类型
export type RowIndexOption = BaseColumnOption

export type SimpleBranchGraphCommand =
  | {
  command: 'branch';
  branch:
    | string
    | {
    from: string;
    to: string;
  };
}
  | {
  command: 'commit';
  branch: string;
}
  | {
  command: 'merge';
  branch: {
    from: string;
    to: string;
  };
}
  | {
  command: 'tag';
  branch: string;
  tag: string;
};
export type BranchGraphCommand =
  | SimpleBranchGraphCommand
  | undefined
  | null
  | SimpleBranchGraphCommand[];

export type ColumnTypeOption =
  | 'DEFAULT'
  | 'default'
  | 'NUMBER'
  | 'number'
  | 'CHECK'
  | 'check'
  | 'BUTTON'
  | 'button'
  | 'IMAGE'
  | 'image'
  | 'MULTILINETEXT'
  | 'multilinetext';

export type HeaderTypeOption =
  | 'DEFAULT'
  | 'default'
  | 'SORT'
  | 'sort'
  | 'CHECK'
  | 'check';
