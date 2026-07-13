import TableFooter from "./TableFooter";

const meta = {
  title: "Components/TableFooter",
  component: TableFooter,
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
    text: "End of table",
    backgroundColor: "black",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled footer",
    backgroundColor: "black",
    disabled: true,
  },
};