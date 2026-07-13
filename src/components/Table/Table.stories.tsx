import Table from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    headings: {
      control: "object",
    },
    rows: {
      control: "object",
    },
    footerText: {
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
    headings: ["Name", "Role", "Status"],
    rows: [
      ["Marc", "Student", "Active"],
      ["Cat", "Hero", "Sleeping"],
    ],
    footerText: "End of table",
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    headings: ["Name", "Role", "Status"],
    rows: [
      ["Disabled", "Student", "Inactive"],
      ["Cat", "Hero", "Sleeping"],
    ],
    footerText: "Disabled table",
    backgroundColor: "white",
    disabled: true,
  },
};