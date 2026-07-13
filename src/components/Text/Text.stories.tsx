import Text from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    text: {
      control: "text",
    },
    backgroundColor: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

export const Default = {
  args: {
    text: "This is my text component",
    backgroundColor: "transparent",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled text",
    backgroundColor: "transparent",
    disabled: true,
  },
};