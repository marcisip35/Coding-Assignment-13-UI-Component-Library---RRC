import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

describe("HeroImage", () => {
    test("hero image is visible", () => {
        render(<HeroImage title="Test Hero Image" />);

        const heroTitle = screen.getByText("Test Hero Image");

        expect(heroTitle).toBeVisible();
    });

    test("hero image background changes when disabled", () => {
        render(<HeroImage title="Disabled Hero Image" disabled={true} />);

        const heroImage = screen.getByTestId("hero-image");

        expect(heroImage).toHaveStyleRule("background-color", "#444");
    });
});