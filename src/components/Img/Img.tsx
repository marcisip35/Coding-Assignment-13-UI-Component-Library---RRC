import styled from "styled-components";
import { ImgProps } from "./Img.types";
import catImage from "./Orange-colored-cat-yawns-displaying-teeth.webp";

const ImageBox = styled.div<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${(props) =>
    props.$disabled ? "#444" : props.$backgroundColor || "black"};

  width: 420px;
  max-width: 100%;
  padding: 12px;
  border: 4px solid black;
  border-radius: 20px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CatImg = styled.img<{ $disabled?: boolean }>`
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  border-radius: 14px;
  filter: ${(props) => (props.$disabled ? "grayscale(100%)" : "none")};
`;

const Caption = styled.p<{ $disabled?: boolean }>`
  color: ${(props) => (props.$disabled ? "#cccccc" : "white")};
  text-align: center;
  font-size: 18px;
  margin: 10px 0 0 0;
`;

function Img({
  src = catImage,
  alt = "orange cat yawning",
  caption = "Sleepy Cat Image",
  backgroundColor = "black",
  disabled = false,
}: ImgProps) {
  return (
    <ImageBox
      data-testid="image-box"
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      <CatImg src={src} alt={alt} $disabled={disabled} />
      <Caption $disabled={disabled}>{caption}</Caption>
    </ImageBox>
  );
}

export default Img;
export { Img };
