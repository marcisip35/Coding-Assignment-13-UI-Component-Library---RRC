import TableHeader from "./TableHeader";

const meta = {
  title: "Components/TableHeader",
  component: TableHeader,
  argTypes: {
    headings: {
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
    headings: ["Name", "Role", "Status"],
    backgroundColor: "black",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    headings: ["Name", "Role", "Status"],
    backgroundColor: "black",
    disabled: true,
  },
};
