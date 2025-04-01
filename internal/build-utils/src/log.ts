import fs from 'node:fs/promises';
import { logRoot } from './paths';

export const createLogFile = async (pkgPath: string, content: string) => {
	try {
		await fs.writeFile(`${logRoot}/${pkgPath}`, content);
	} catch {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		// 忽略创建日志报错
	}
};
