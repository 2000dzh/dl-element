import { each, isFunction } from 'lodash-es';
import shell from 'shelljs';

interface HooksPluginType {
	rmFiles?: Array<string>;
	beforeBuild?: Function;
	afterBuild?: Function;
}

export default function hooksPlugin({
	rmFiles = [],
	beforeBuild,
	afterBuild,
}: HooksPluginType) {
	return {
		name: 'hooks-plugin',
		buildStart() {
			each(rmFiles, (fName) => shell.rm('-rf', fName));
			isFunction(beforeBuild) && beforeBuild();
		},
		buildEnd(err?: Error) {
			if (!err) {
				if (isFunction(afterBuild)) {
					afterBuild();
				}
			}
		},
	};
}
