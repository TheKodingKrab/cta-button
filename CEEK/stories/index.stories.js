import { html } from 'lit';
import '../cta-button.js';

export default {
  title: 'CtaButton',
  component: 'cta-button',
  argTypes: {
    title: { control: 'text' },
    link: { control: 'text' },
    play: { control: 'boolean' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    dark: { control: 'boolean' },
    colorTxt: { control: 'color' },
    txt: { control: 'text' },
  },
};

function Template({
  title = 'Click Here',
  colorTxt,
  txt,
  disabled = false,
  dark = false,
  play = false,
  icon = '',
  link = '',
}) {
  return html`
    <cta-button
      .title=${title}
      ?play=${play}
      .icon=${icon}
      .disabled=${disabled}
      .dark=${dark}
      .link=${link}
      .colorTxt=${colorTxt}
      .txt=${txt}
    >
    </cta-button>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Title',
  icon: 'hardware:keyboard-arrow-left',
  play: true,
};
