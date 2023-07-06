import LogCompo from "../components/LogCompo/LogCompo";
import * as Style from "./GuestbookAll.style";

function GuestbookAll() {
  return (
    <Style.Container>
      <LogCompo />
      <LogCompo />
      <LogCompo />
      <LogCompo />
    </Style.Container>
  );
}

export default GuestbookAll;
