import React from 'react';
import { HeaderRightButton } from './HeaderRightBtn.style';

interface Props {
  text: string;
}

const HeaderRightBtn = ({ text }: Props) => {
  const navigate = useNavigate();

  return <HeaderRightButton type="button">{text}</HeaderRightButton>;
};

export default HeaderRightBtn;
