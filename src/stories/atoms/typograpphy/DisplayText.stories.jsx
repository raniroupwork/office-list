import DisplayText from '../../../components/atoms/topography/DisplayText.vue';

export default {
  title: 'atoms/topography/DisplayText',
  component: DisplayText,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DisplayText },
  template: '<DisplayText>Offices</DisplayText>',
});

export const Title = Template.bind({});
Title.args = {
};
