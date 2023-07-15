import { SubmittedBackProps } from "../../types/Submitted";
import * as Style from "./SubmittedCardBack.style";

function SubmittedCardBack(props: SubmittedBackProps) {
  return (
    <Style.BackContainer>
      한라봉은 언제가 제철일까 나는 잘 모르겠다. 하지만 먹고 싶다.구름톤에서 맛있는 걸 잔뜩 먹었다. 카카오 식당 짱! 레오가 로건을 3번 불렀는데 로건이 못 들었다. 멘토님들도 피곤하신가보다,,,이제 몇시간 남지 않은 마감
그래도 우리팀을 정말정말 열심히 하고 
있다... 남는 시간도 마저 최선을 다할 예정!
다른 팀들도 정말 많이 고생하고 있는 거 같다. 멋진 사람들이 가득 모인 6기 구름톤 짱!
      {/* {props.content} */}
    </Style.BackContainer>
  );
}

export default SubmittedCardBack;
