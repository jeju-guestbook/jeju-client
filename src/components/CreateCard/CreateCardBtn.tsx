import { BtnProps } from '../../types/BtnProps';
import * as Style from './CreateCardBtn.style';

function CreateCardBtn(props: BtnProps) {
  return (
    <Style.BtnContainer
      onClick={() => {
        window.navigator.share({
          title: document.title,
          url: window.location.href,
        });
      }}
    >
      {props.content}
    </Style.BtnContainer>
  );
}

export default CreateCardBtn;
