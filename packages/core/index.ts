import { makeInstaller } from '@dl-element/utils';
import componens from './componens.ts';
import '@dl-element/theme/index.css'

const installer = makeInstaller(componens);

export * from '@dl-element/components';
export default installer
