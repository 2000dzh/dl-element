import { getCurrentInstance } from 'vue';
import type { ComponentInternalInstance } from 'vue';

export default function useGlobelProperties() {
	const { appContext } = getCurrentInstance() as ComponentInternalInstance;
	return appContext.config.globalProperties;
}
