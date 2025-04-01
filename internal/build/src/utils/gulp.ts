import { buildRoot } from '@dl-element/build-utils';
import { run } from './process';
import type { TaskFunction } from 'gulp';

/**
 * @description 是给函数加上displayName属性，这样在gulp执行时，就可以显示出函数的名字
 */
export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
	Object.assign(fn, { displayName: name });

export const runTask = (name: string) =>
	withTaskName(`shellTask:${name}`, () =>
		run(`pnpm run start ${name}`, buildRoot)
	);
