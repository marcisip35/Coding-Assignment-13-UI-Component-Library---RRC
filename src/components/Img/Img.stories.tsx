import Img from "./Img";

const meta = {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    caption: {
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
    alt: "orange cat yawning",
    caption: "Sleepy Cat Image",
    backgroundColor: "black",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    alt: "disabled orange cat yawning",
    caption: "Disabled Cat Image",
    backgroundColor: "black",
    disabled: true,
  },
};