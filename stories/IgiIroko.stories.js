import { IgiIroko } from './IgiIroko';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/IgiIroko',
  component: IgiIroko,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'IgiIroko',
  },
};

export const Secondary = {
  args: {
    label: 'IgiIroko',
  },
};
