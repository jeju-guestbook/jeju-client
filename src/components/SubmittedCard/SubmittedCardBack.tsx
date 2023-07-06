import * as Style from "./SubmittedCardBack.style";

interface CardbackProps {
  content: string;
}

function SubmittedCardBack({ content }: CardbackProps) {
  return <Style.BackContainer>{content}</Style.BackContainer>;
}

export default SubmittedCardBack;
