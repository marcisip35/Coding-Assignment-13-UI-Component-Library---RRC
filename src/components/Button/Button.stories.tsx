import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: {
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
    label: "Click Me",
    backgroundColor: "black",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Button",
    backgroundColor: "black",
    disabled: true,
  },
};
