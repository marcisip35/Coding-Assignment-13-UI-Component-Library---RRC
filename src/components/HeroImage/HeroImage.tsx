import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";
import heroCat from "./hero-cat.jpg";

const HeroBox = styled.div<{
  $image?: string;
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  background-color: ${(props) =>
    props.$disabled ? "#444" : props.$backgroundColor || "black"};

  background-image: ${(props) => `url(${props.$image})`};
  background-size: cover;
  background-position: center;

  width: 100%;
  max-width: 100%;
  min-height: calc(100vh - 110px);
  padding: 40px;
  border: none;
  border-radius: 0;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};
  filter: ${(props) => (props.$disabled ? "grayscale(100%)" : "none")};

  display: flex;
  align-items: end;

  @media (max-width: 600px) {
    width: 100%;
    min-height: 70vh;
    padding: 20px;
  }
`;

const TextBox = styled.div<{ $disabled?: boolean }>`
  background-color: rgba(0, 0, 0, 0.75);
  color: ${(props) => (props.$disabled ? "#cccccc" : "white")};
  padding: 18px;
  border-radius: 16px;
  max-width: 450px;
`;

const HeroTitle = styled.h2`
  margin: 0;
  font-size: 40px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled.p`
  margin: 8px 0 0 0;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

function HeroImage({
  src = heroCat,
  title = "UI Garden",
  subtitle = "React • Storybook • Components",
  backgroundColor = "black",
  disabled = false,
}: HeroImageProps) {
  return (
    <HeroBox
      data-testid="hero-image"
      $image={src}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      <TextBox $disabled={disabled}>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </TextBox>
    </HeroBox>
  );
}

export default HeroImage;
export { HeroImage };