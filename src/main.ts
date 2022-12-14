import type * as TYPES from './ts-types';
import * as columns from './columns';
import * as core from './core';
import * as data from './data';
import * as headers from './headers';
import * as icons from './icons';
import * as register from './register';
import * as themes from './themes';
import * as tools from './tools';
import {
	// ColumnDefine,
	// GroupHeaderDefine,
	// HeaderDefine,
	// HeadersDefine,
	ListGrid,
	// ListGridConstructorOptions,
} from './ListGrid';
import { GridCanvasHelper } from './GridCanvasHelper';
// import type { Theme } from "./themes/theme";

export { getInternal as _getInternal } from './get-internal';
import { ListGrid as _ListGrid } from './ListGrid';
/**
 * Cheetah Grid
 * @namespace cheetahGrid
 */
export {
	/**
   * Types
   * @namespace cheetahGrid.TYPES
   */
	TYPES,
	core,
	tools,
	// impl Grids
	ListGrid,
	// ListGrid types
	// ListGridConstructorOptions,
	// ColumnDefine,
	// HeaderDefine,
	// GroupHeaderDefine,
	// objects
	columns,
	headers,
	themes,
	data,
	// helper
	GridCanvasHelper,
	getIcons,
	//plugin registers
	register,
};

function getIcons(): { [key: string]: TYPES.IconDefine } {
	return icons.get();
}

// backward compatibility
export default {
	core,
	tools,
	// impl Grids
	ListGrid,
	// objects
	columns,
	headers,
	themes,
	data,
	// helper
	GridCanvasHelper,
	//plugin registers
	register,
	get icons(): { [key: string]: TYPES.IconDefine } {
		return getIcons();
	},
};

