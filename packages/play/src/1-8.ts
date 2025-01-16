import { onScopeDispose, effectScope, ref } from 'vue';

const myFn = () => {
	let initialized = false;
	let state: any;
	const scope = effectScope(true);

	return (...args: Array<any>) => {
		if (initialized) {
			return state;
		}

		state = scope.run(() => {
			const data = ref(1);

			const setData = (num: number) => {
				data.value = num;
				if (num > 670) {
					scope.stop();
				}
			};

			onScopeDispose(() => {
				console.log('cleaned!');
			});
			// scope.stop(); // logs 'cleaned!'
			return { data, setData };
		});
		initialized = true;

		return state;
	};
};

export const mydsa = myFn();
