import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Alert from './alert.vue';
// import Icon from '../icon/icon.vue';

describe('Alert.vue', () => {
	const title = 'Test Alert' as const;
	const desc = 'This is a test description' as const;
	// it('should render the alert with default props', () => {
	// 	const wrapper = mount(Alert, {
	// 		props: {
	// 			title,
	// 		},
	// 		slots: {
	// 			default: desc,
	// 		},
	// 		global: {
	// 			stubs: ['DlIcon'],
	// 		},
	// 	});
	// 	expect(wrapper.text()).toContain(title);
	// 	expect(wrapper.text()).toContain(desc);

	// 	// close icon
	// 	const iconElement = wrapper.findComponent(Icon);
	// 	expect(iconElement.exists()).toBeTruthy();
	// 	expect(iconElement.attributes('icon')).toBe('xmark');

	// 	const wrapper2 = mount(() => (
	// 		<Alert title={title} description={desc}></Alert>
	// 	));

	// 	expect(wrapper2.text()).toContain(title);
	// 	expect(wrapper2.text()).toContain(desc);
	// });

	it('should allow custom content via slots', () => {
		const wrapper = mount(Alert, {
			props: {
				title: 'test title',
			},
			slots: {
				default: desc,
				title,
			},
		});
		expect(wrapper.text()).toContain(desc);
		expect(wrapper.text()).toContain(title);
		expect(wrapper.text()).not.toContain('test title');
	});

	it('should support centering text', () => {
		const wrapper = mount(Alert, {
			props: {
				title,
				description: desc,
				center: true,
			},
		});
		//class
		const rootNode = wrapper.find('.dl-alert');
		expect(rootNode.classes()).toContain('text-center');
	});

	it('should not render close icon when closable is false', () => {
		const wrapper = mount(Alert, {
			props: { closable: false },
		});
		expect(wrapper.find('.er-alert__close').exists()).toBe(false);
	});

	it('should toggle visibility when open and close methods are called', async () => {
		const wrapper = mount(Alert, {
			props: { title, closable: false },
		});
		await wrapper.vm.close();
		expect(wrapper.find('.dl-alert').attributes().style).toBe(
			'display: none;'
		);
		await wrapper.vm.open();
		expect(wrapper.find('.dl-alert').attributes().style).toBe('');
	});
});
