/**
 * @description: 补零
 */
export function zeroFill(num: number) {
	return num < 10 ? `0${num}` : String(num);
}