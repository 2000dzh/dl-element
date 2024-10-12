import { fn } from '@storybook/test';
// import { DlTooltip } from 'dl-element';
import DlTooltip from '../../../components/Tooltip/Tooltip.vue'
// import 'dl-element/dist/theme/Tooltip.css';
import type { StoryObj, Meta } from '@storybook/vue3';


type Story = StoryObj<typeof DlTooltip>;

const meta: Meta<typeof DlTooltip> = {
	title: 'Example/Tooltip',
	component: DlTooltip,
	tags: ['autodocs'],
	argTypes: {
		trigger: {
			options: ['hover', 'click', 'contextmenu'],
			control: {
				type: 'select',
			},
		},
		placement: {
			options: ['top', 'bottom', 'left', 'right'],
			control: {
				type: 'select',
			},
		},
	},
	args: {
		'onVisible-change': fn(),
	},
};

export const Default: Story = {
	args: {
		content: 'This is a tooltip',
		placement: 'top',
		trigger: 'hover',
	},
	render: (args) => ({
		components: { DlTooltip },
		setup() {
			return {
				args,
			};
		},
		template: `
      <DlTooltip v-bind="args">
          <div style="height:30px;width:200px;background:red;padding:auto">trigger</div>
      </DlTooltip>
    `,
	}),
};

export default meta;
