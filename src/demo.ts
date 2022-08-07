const toTypeString = (val: any) => {
	return Object.prototype.toString.call(val);
};

const typeName = (val: any) => {
	return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/, '$1').toLowerCase();
};

const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val: any, key: any) => hasOwnProperty.call(val, key);

const isFunction = (val: any) => toTypeString(val) === '[object Function]';
const isAsync = (val: any) => toTypeString(val) === '[object AsyncFunction]';
const isObject = (val: any) => val !== null && typeof val === 'object';
const isArray = Array.isArray;
const isString = (val: any) => typeof val === 'string';
const isNumber = (val: any) => typeof val === 'number';
const isBigInt = (val: any) => typeof val === 'bigint';
const isBoolean = (val: any) => typeof val === 'boolean';
const isRegExp = (val: any) => toTypeString(val) === '[object RegExp]';
const isDate = (val: any) => val instanceof Date;
const isMap = (val: any) => toTypeString(val) === '[object Map]';
const isSymbol = (val: any) => typeof val === 'symbol';
const isNullOrUndefined = (val: any) => {
	if (val === null) return true;
	if (typeof val === 'undefined') return true;
	return false;
};

function log() {
	console.log(...arguments);
}

export {
	log, // 打印调试信息
	toTypeString, // Object.prototype.toString.call(val: any)
	typeName, // 获取可以识别的名称

	hasOwnProperty,
	hasOwn,

	isFunction, // 验证普通函数
	isAsync, // 验证 async 的函数
	isObject, // 验证 Object
	isArray, // 验证数组
	isString, // 验证字符串
	isNumber, // 验证 number
	isBigInt, // 验证 BigInt
	isBoolean, // 验证 布尔
	isRegExp, // 验证正则类型
	isDate, // 验证日期
	isMap, // 验证 map
	isSymbol, // 验证 Symbol
	isNullOrUndefined // null 或者 undefined 返回 true
};
