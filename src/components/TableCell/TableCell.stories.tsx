import TableCell from "./TableCell";

const meta = {
  title: "Components/TableCell",
  component: TableCell,
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
    text: "Cell Data",
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Cell",
    backgroundColor: "white",
    disabled: true,
  },
};
