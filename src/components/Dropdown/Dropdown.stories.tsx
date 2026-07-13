import Dropdown from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    label: {
      control: "text",
    },
    options: {
      control: "object",
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
    label: "Pick a move",
    options: ["Rock", "Paper", "Scissors", "Lizard", "Spock"],
    backgroundColor: "black",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled dropdown",
    options: ["Rock", "Paper", "Scissors", "Lizard", "Spock"],
    backgroundColor: "black",
    disabled: true,
  },
};
