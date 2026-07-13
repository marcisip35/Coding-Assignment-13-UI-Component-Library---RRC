import "./App.css";

import Button from "./components/Button";
import Label from "./components/Label";
import Text from "./components/Text";
import Dropdown from "./components/Dropdown";
import RadioButton from "./components/RadioButton";
import Img from "./components/Img";
import HeroImage from "./components/HeroImage";
import Card from "./components/Card";
import Table from "./components/Table";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import TableCell from "./components/TableCell";
import TableFooter from "./components/TableFooter";

function App() {
  return (
    <div className="app">
      <div className="siteHeader">
        <h1>Marc Isip UI Garden</h1>
      </div>

      <div className="heroSection">
        <HeroImage title="UI Garden" subtitle="React • Storybook • Components" />
      </div>

      <div className="componentGrid">
        <div className="componentBox">
          <h2>Buttons</h2>
          <div className="componentRow">
            <Button label="Default Button" />
            <Button label="Disabled Button" disabled={true} />
          </div>
        </div>

        <div className="componentBox">
          <h2>Text</h2>
          <div className="componentRow">
            <Label text="Username" />
            <Label text="Disabled Label" disabled={true} />
            <Text text="Normal Text" />
            <Text text="Disabled Text" disabled={true} />
          </div>
        </div>

        <div className="componentBox">
          <h2>Dropdown</h2>
          <div className="componentRow">
            <Dropdown />
            <Dropdown label="Disabled Dropdown" disabled={true} />
          </div>
        </div>

        <div className="componentBox">
          <h2>Radio Button</h2>
          <div className="componentRow">
            <RadioButton />
            <RadioButton label="Disabled Radio" disabled={true} />
          </div>
        </div>

        <div className="componentBox">
          <h2>Image</h2>
          <div className="componentRow">
            <Img />
          </div>
        </div>

        <div className="componentBox">
          <h2>Disabled Image</h2>
          <div className="componentRow">
            <Img caption="Disabled Cat Image" disabled={true} />
          </div>
        </div>

        <div className="componentBox">
          <h2>Card</h2>
          <div className="componentRow">
            <Card title="Cat Card" text="UI Garden Card" buttonText="Open Card" />
          </div>
        </div>

        <div className="componentBox">
          <h2>Disabled Card</h2>
          <div className="componentRow">
            <Card
              title="Disabled Card"
              text="UI Garden Card"
              buttonText="Disabled"
              disabled={true}
            />
          </div>
        </div>

        <div className="componentBox">
          <h2>Table</h2>
          <div className="tableWrap">
            <Table />
          </div>
        </div>

        <div className="componentBox">
          <h2>Table Parts</h2>
          <div className="tableWrap">
            <table>
              <TableHeader headings={["Component", "Type", "Status"]} />
              <tbody>
                <TableRow cells={["Button", "Input", "Complete"]} />
                <tr>
                  <TableCell text="Img" />
                  <TableCell text="Media" />
                  <TableCell text="Complete" />
                </tr>
              </tbody>
              <TableFooter text="Reusable table parts" />
            </table>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Marc Isip UI Garden</p>
      </div>
    </div>
  );
}

export default App;