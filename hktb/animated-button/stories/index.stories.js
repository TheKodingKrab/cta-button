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

function Template({ title = 'Meditation & Moods', play = false, icon, slot }) {
  return html`
    <animated-button .title=${title} ?play=${play} .icon=${icon}>
      ${slot}
    </animated-button>
  `;
}

export const Headspace = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Happy',
  icon: 'social:mood',
  play: true,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`A title that should show up because of the slot`,
};
