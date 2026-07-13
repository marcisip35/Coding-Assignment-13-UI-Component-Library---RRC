import styled from "styled-components";
import { CardProps } from "./Card.types";

const CardBox = styled.div<{ $backgroundColor?: string; $disabled?: boolean }>`
  background-color: ${(props) =>
        props.$disabled ? "#444" : props.$backgroundColor || "black"};

  color: white;
  width: 320px;
  max-width: 100%;
  padding: 20px;
  border: 4px solid black;
  border-radius: 20px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? "0.6" : "1")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 26px;
`;

const CardText = styled.p`
  font-size: 17px;
  margin: 0 0 15px 0;
`;

const CardButton = styled.button<{ $disabled?: boolean }>`
  background-color: ${(props) => (props.$disabled ? "#333" : "white")};
  color: ${(props) => (props.$disabled ? "#aaaaaa" : "black")};
  border: 3px solid black;
  border-radius: 12px;
  padding: 10px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

function Card({
    title = "Card Title",
    text = "This is a simple card component.",
    buttonText = "Read More",
    backgroundColor = "black",
    disabled = false,
}: CardProps) {
    return (
        <CardBox
            data-testid="card-box"
            $backgroundColor={backgroundColor}
            $disabled={disabled}
        >
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
            <CardButton $disabled={disabled} disabled={disabled}>
                {buttonText}
            </CardButton>
        </CardBox>
    );
}

export default Card;
export { Card };