import * as Style from './SubmittedCard.style';

import { SubmittedCardProps } from '../../types/Submitted';

function SubmittedCard(props: SubmittedCardProps) {
  return (
    <Style.SubmittedCardContainer>
      <img src={props.imageUrl || '/Hamduck.jpeg'} />
      <Style.SubmittedFooter>2023.07.07</Style.SubmittedFooter>
    </Style.SubmittedCardContainer>
  );
}

export default SubmittedCard;
