import DisplayText from '../../../components/atoms/topography/DisplayText.vue';

export default {
  title: 'atoms/topography/DisplayText',
  component: DisplayText,
  argTypes: {
    text: { control: 'Display Text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DisplayText },
  template: '<DisplayText :text="text" />',
});

export const Title = Template.bind({});
Title.args = {
  text: 'Offices',
};
