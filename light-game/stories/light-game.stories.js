import { html } from 'lit';
import '../src/light-game.js';

export default {
  title: 'LightGame',
  component: 'light-game',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <light-game
      style="--light-game-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </light-game>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
