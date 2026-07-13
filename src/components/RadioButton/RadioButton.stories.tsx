import RadioButton from "./RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: {
      control: "text",
    },
    options: {
      control: "object",
    },
    name: {
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
    label: "Pick a move",
    options: ["Rock", "Paper", "Scissors", "Lizard", "Spock"],
    name: "moves",
    backgroundColor: "black",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled radio buttons",
    options: ["Rock", "Paper", "Scissors", "Lizard", "Spock"],
    name: "disabled-moves",
    backgroundColor: "black",
    disabled: true,
  },
};