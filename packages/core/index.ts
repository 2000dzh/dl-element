import { makeInstaller } from '@dl-element/utils';
import components from './components.ts';
import '@dl-element/theme/index.css'

const installer = makeInstaller(components);

export * from './components.ts';
export default installer
