import { DlCollapse, DlCollapseItem } from 'dl-element';
import 'dl-element/dist/theme/Collapse.css'
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof DlCollapse>;

const meta: Meta<typeof DlCollapse> = {
	title: 'Example/Collapse',
	component: DlCollapse,
	subcomponents: { DlCollapseItem },
	tags: ['autodocs'],
};

export const Default: Story = {
	render: (args) => ({
		components: {
			DlCollapse,
			DlCollapseItem,
		},
		setup() {
			return {
				args,
			};
		},
		template: `
    <dl-collapse v-bind="args">
      <dl-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </dl-collapse-item>
      <dl-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </dl-collapse-item>
      <dl-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </dl-collapse-item>
    </dl-collapse>
    `,
	}),
	args: {
		accordion: true,
		modelValue: ['a'],
	},
};

export default meta;
