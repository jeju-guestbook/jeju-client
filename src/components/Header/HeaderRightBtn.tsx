import React from 'react';
import { HeaderRightButton } from './HeaderRightBtn.style';
import { useNavigate } from 'react-router-dom';

interface Props {
  text: string;
}

const HeaderRightBtn = ({ text }: Props) => {
  const navigate = useNavigate();

  return <HeaderRightButton type="button">{text}</HeaderRightButton>;
};

export default HeaderRightBtn;
