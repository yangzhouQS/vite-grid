export function get(name = ''): symbol {
	return Symbol.for(name);
}

export function getEventTargetSymbol(): '$$$$event_target_symbol$$$$' {
	return get('protected.event_target') as any;
}

export function getThemeSymbol(): '$$$$theme_symbol$$$$' {
	return get('protected.theme') as any;
}

export function getDrawGridSymbol(): '$$$$draw_grid_symbol$$$$' {
	return get('protected.draw_grid') as any;
}

export function getListGridSymbol(): '$$$$list_grid_symbol$$$$' {
	return get('protected.list_grid') as any;
}

export function getProtectedSymbol(): '$$$$protected symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('protected') as any;
}

export function getCheckColumnStateId(): '$$$$chkcol.stateID symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('chkcol.stateID') as any;
}

export function getRadioColumnStateId(): '$$$$rdcol.stateID symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('rdcol.stateID') as any;
}

export function getButtonColumnStateId(): '$$$$btncol.stateID symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('btncol.stateID') as any;
}

export function getColumnFadeinStateId(): '$$$$col.fadein_stateID symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('col.fadein_stateID') as any;
}

export function getBranchGraphColumnStateId(): '$$$$branch_graph_col.stateID symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('branch_graph_col.stateID') as any;
}

export function getSmallDialogInputEditorStateId(): '$$$$small_dialog_input_editor.stateID symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('small_dialog_input_editor.stateID') as any;
}

export function getInlineInputEditorStateId(): '$$$$inline_input_editor.stateID symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('inline_input_editor.stateID') as any;
}

export function getInlineMenuEditorStateId(): '$$$$inline_menu_editor.stateID symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('inline_menu_editor.stateID') as any;
}

export function getCheckHeaderStateId(): '$$$$check_header.stateID symbol$$$$' /* It is treated as a string so that it can be handled easily with typescript. */ {
	return get('check_header.stateID') as any;
}
