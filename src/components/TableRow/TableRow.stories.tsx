import TableRow from "./TableRow";

const meta = {
  title: "Components/TableRow",
  component: TableRow,
  argTypes: {
    cells: {
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
    cells: ["Marc", "Student", "Active"],
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    cells: ["Disabled", "Student", "Inactive"],
    backgroundColor: "white",
    disabled: true,
  },
};
