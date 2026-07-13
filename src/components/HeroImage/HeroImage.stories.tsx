import HeroImage from "./HeroImage";

const meta = {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    src: {
      control: "text",
    },
    title: {
      control: "text",
    },
    subtitle: {
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
    title: "Super Cat",
    subtitle: "A hero image",
    backgroundColor: "black",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Hero Image",
    subtitle: "This hero image is currently disabled",
    backgroundColor: "black",
    disabled: true,
  },
};