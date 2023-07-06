import AddPostFloatBtn from "../components/AddPost/AddPostFloatBtn";
import LogCompo from "../components/LogCompo";
import * as Style from "./GuestbookAll.style";

function GuestbookAll() {
  return (
    <Style.Container>
      <LogCompo />
      <LogCompo />
      <LogCompo />
      <LogCompo />
      <AddPostFloatBtn />
    </Style.Container>
  );
}

export default GuestbookAll;
