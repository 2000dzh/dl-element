import { zeroFill } from './common';

/**
 * @description: 1440点(1分钟一个点)
 * @param {Number} timeStamp 时间戳
 * @returns {Array} YYYY-MM-DD 00:01 YYYY-MM-DD 00:02 YYYY-MM-DD 00:03 ........
 */
export function time1440(timeStamp?: number) {
	const _timeStamp = timeStamp || Date.now();

	const year = new Date(_timeStamp).getFullYear();
	const month = new Date(_timeStamp).getMonth() + 1;
	const day = new Date(_timeStamp).getDate();
	const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`;

	return Array.from({ length: 1440 }, function (_, index) {
		const hour = Math.floor(index / 60);
		const minute = index % 60;
		const time = `${zeroFill(hour)}:${zeroFill(minute)}`;

		return `${date} ${time}`;
	});
}

/**
 * @description: 288点(5分钟一个点)
 * @param {Number} timeStamp 时间戳
 * @returns {Array} YYYY-MM-DD 00:00 YYYY-MM-DD 00:05 YYYY-MM-DD 00:10 ........
 */
export function time288(timeStamp?: number) {
	const _timeStamp = timeStamp || Date.now();

	const year = new Date(_timeStamp).getFullYear();
	const month = new Date(_timeStamp).getMonth() + 1;
	const day = new Date(_timeStamp).getDate();
	const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`;

	return Array.from({ length: 288 }, function (_, index) {
		const hour = Math.floor(index / 12);
		const minute = (index % 12) * 5;
		const time = `${zeroFill(hour)}:${zeroFill(minute)}`;

		return `${date} ${time}`;
	});
}

/**
 * @description: 96点(15分钟一个点)
 * @param {Number} timeStamp 时间戳
 * @returns {Array} YYYY-MM-DD 00:00 YYYY-MM-DD 00:15 YYYY-MM-DD 00:30 ........
 */
export function time96(timeStamp?: number) {
	const _timeStamp = timeStamp || Date.now();

	const year = new Date(_timeStamp).getFullYear();
	const month = new Date(_timeStamp).getMonth() + 1;
	const day = new Date(_timeStamp).getDate();
	const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`;

	return Array.from({ length: 96 }, function (_, index) {
		const hour = Math.floor(index / 4);
		const minute = (index % 4) * 15;
		const time = `${zeroFill(hour)}:${zeroFill(minute)}`;

		return `${date} ${time}`;
	});
}

/**
 * @description: 48点(30分钟一个点)
 * @param {Number} timeStamp 时间戳
 * @returns {Array} YYYY-MM-DD 00:00 YYYY-MM-DD 00:30 YYYY-MM-DD 01:00 ........
 */
export function time48(timeStamp?: number) {
	const _timeStamp = timeStamp || Date.now();

	const year = new Date(_timeStamp).getFullYear();
	const month = new Date(_timeStamp).getMonth() + 1;
	const day = new Date(_timeStamp).getDate();
	const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`;

	return Array.from({ length: 48 }, function (_, index) {
		const hour = Math.floor(index / 2);
		const minute = (index % 2) * 30;
		const time = `${zeroFill(hour)}:${zeroFill(minute)}`;

		return `${date} ${time}`;
	});
}

/**
 * @description: 24点(1小时一个点)
 * @param {Number} timeStamp 时间戳
 * @returns {Array} YYYY-MM-DD 01:00 YYYY-MM-DD 02:00 YYYY-MM-DD 03:00 ........
 */
export function time24(timeStamp?: number) {
	const _timeStamp = timeStamp || Date.now();

	const year = new Date(_timeStamp).getFullYear();
	const month = new Date(_timeStamp).getMonth() + 1;
	const day = new Date(_timeStamp).getDate();
	const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`;

	return Array.from({ length: 24 }, function (_, index) {
		const hour = zeroFill(index);
		const time = `${hour}:00`;

		return `${date} ${time}`;
	});
}
