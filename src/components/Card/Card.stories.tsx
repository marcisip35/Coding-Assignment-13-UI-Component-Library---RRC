import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: {
      control: "text",
    },
    text: {
      control: "text",
    },
    buttonText: {
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
    title: "Cat Card",
    text: "This card can be reused for content on a page.",
    buttonText: "Open Card",
    backgroundColor: "black",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Card",
    text: "This card is greyed out because it is disabled.",
    buttonText: "Disabled",
    backgroundColor: "black",
    disabled: true,
  },
};