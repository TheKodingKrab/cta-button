import { html } from 'lit';
import '../animated-button.js';

export default {
  title: 'Animated Button',
  component: 'animated-button',
  argTypes: {
    title: { control: 'text' },
    play: { control: 'boolean' },
    icon: { control: 'text' },
  },
};

function Template({ title = 'Hello world', play = false, icon, slot }) {
  return html`
    <animated-button .title=${title} ?play=${play} .icon=${icon}>
      ${slot}
    </animated-button>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
  icon: 'save',
  play: true,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`A title that should show up because of the slot`,
};
