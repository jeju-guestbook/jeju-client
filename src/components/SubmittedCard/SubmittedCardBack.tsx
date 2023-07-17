import { SubmittedBackProps } from '../../types/Submitted';
import * as Style from './SubmittedCardBack.style';

function SubmittedCardBack(props: SubmittedBackProps) {
  return <Style.BackContainer>{props.content}</Style.BackContainer>;
}

export default SubmittedCardBack;
