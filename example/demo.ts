import './styles/example.css';
import { ListGrid, columns } from '../src/main';
import { getListData } from './utils/generate';

const listData = getListData(100);
const headerColumns: any = [
	{
		caption: '序号', width: 100,
		columnType: new columns.type.RowIndex,
		style: {
			aaa: 'aaa',
			color: 'red',
			font: '18px "-apple-system","BlinkMacSystemFont","PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑","Helvetica Neue",Helvetica,Arial,sans-serif',
			textAlign: 'center',
		},
	},
	{
		field: 'userId', caption: 'userId', width: 360,
		columnType: new columns.type.Column({}),
		style: {
			color: 'red',
			font: '18px "-apple-system","BlinkMacSystemFont","PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑","Helvetica Neue",Helvetica,Arial,sans-serif',
		}
	},
	{ field: 'username', caption: 'username', width: 200 },
	{ field: 'phone', caption: 'phone', width: 200 },
	{ field: 'email', caption: 'Email', width: 250 },
	{ field: 'address', caption: 'address', width: 250 },
	{ field: 'avatar', caption: 'avatar', width: 250 },
	{ field: 'password', caption: 'password', width: 250 },
	{ field: 'birthdate', caption: 'birthdate', width: 250 },
	{ field: 'registeredAt', caption: 'registeredAt', width: 250 },
];

new ListGrid({
	parentElement: document.getElementById('app'),
	header: headerColumns,
	frozenColCount: 1,
	records: listData,
	// theme: 'BASIC',
	// theme: 'MATERIAL_DESIGN'
});

// grid.theme = customTheme as themes
