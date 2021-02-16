import BodyText from '../../../components/atoms/topography/BodyText.vue';

export default {
  title: 'atoms/topography/BodyText',
  component: BodyText,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BodyText },
  template: '<BodyText>Body Text</BodyText>',
});

export const Title = Template.bind({});
Title.args = {
};
