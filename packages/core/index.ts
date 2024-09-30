import { makeInstaller } from '@dl-element/utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import componens from './componens.ts';
import '@dl-element/theme/index.css';

library.add(fas)
const installer = makeInstaller(componens);

export * from '@dl-element/components';
export default installer;
