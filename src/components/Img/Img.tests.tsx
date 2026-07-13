import { render, screen } from "@testing-library/react";
import Img from "./Img";

describe("Img", () => {
  test("image is visible", () => {
    render(<Img alt="Test Cat Image" caption="Test Cat" />);

    const image = screen.getByAltText("Test Cat Image");

    expect(image).toBeVisible();
  });

  test("image background changes when disabled", () => {
    render(<Img alt="Disabled Cat Image" disabled={true} />);

    const imageBox = screen.getByTestId("image-box");

    expect(imageBox).toHaveStyleRule("background-color", "#444");
  });
});
