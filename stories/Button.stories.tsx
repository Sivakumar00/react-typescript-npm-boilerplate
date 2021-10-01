import Button from '@components/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Buttons/Glow on hover',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button label="Button" onClick={() => console.warn('Clicked')} />
);

export const Primary = Template.bind({});
