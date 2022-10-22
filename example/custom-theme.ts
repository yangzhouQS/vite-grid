// 自定义主题
export const customTheme = {
	color: 'red',
	frozenRowsColor: 'red',
	defaultBgColor: '#FDD',
	frozenRowsBgColor: '#EAA',
	selectionBgColor: '#FDA',
	highlightBgColor: '#FDC',
	underlayBackgroundColor: '#FEE',
	// You can also change the theme apply in the state by using callback.
	frozenRowsBorderColor(args: any) {
		const {
			row,
			grid: { frozenRowCount },
		} = args;
		if (frozenRowCount - 1 === row) {
			return [ '#F88' /*top*/, '#F88' /*right and left*/, 'red' /*bottom*/ ];
		} else {
			return '#F88';
		}
	},
	borderColor(args: any) {
		const {
			col,
			grid: { colCount },
		} = args;
		if (colCount - 1 === col) {
			return [ 'red' /*top*/, '#F88' /*right*/, 'red' /*bottom*/, null /*left*/ ];
		} else {
			return [ 'red' /*top and bottom*/, null /*right and left*/ ];
		}
	},
	highlightBorderColor: '#FD5',
	checkbox: {
		uncheckBgColor: '#FDD',
		checkBgColor: 'rgb(255, 73, 72)',
		borderColor: 'red',
	},
	button: {
		color: '#FDD',
		bgColor: '#F55',
	},
	font: '16px sans-serif',
	header: {
		sortArrowColor: '#D00',
	},
	messages: {
		infoBgColor: 'gray',
		errorBgColor: 'red',
		warnBgColor: 'yellow',
		boxWidth: 12,
		markHeight: 15,
	},
};
