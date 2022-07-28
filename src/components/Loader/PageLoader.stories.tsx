import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PageLoader } from "./PageLoader";

export default {
  title: "components/Loader/PageLoader",
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => (
  <PageLoader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
