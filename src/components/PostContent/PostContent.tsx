import React, { FormEventHandler, useEffect, useState } from 'react';
import {
  PostContentDiv,
  PostContentForm,
  PostImgLabel,
} from './PostContent.style';
import usePostStore from '../../lib/hook/store/usePostStore';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import DatePicker from '../icons/DatePicker';
import resizeImage from '../../lib/modules/resizeImage';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');
dayjs().format('YYYY-MM-DD');

const PostContent = () => {
  const {
    imageUrl,
    imageFile,
    setImageFile,
    setImageUrl,
    setContent,
    setDate,
  } = usePostStore();
  // const inputRef = React.useRef<HTMLInputElement>(null);

  const [dateValue, setDateValue] = useState(
    dayjs().tz().format('YYYY-MM-DD').toString()
  );

  const [textValue, setTextValue] = useState('');

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e && e.target.files && e.target.files[0];

    console.log(e.target.files, 'e.target.files');

    if (!e.target.files || !imgFile) {
      console.error('이미지 파일이 감지되지 않음');
      return undefined;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imgFile);

    reader.onload = async (e) => {
      const { resizedDataUrl, resizedFile } = await resizeImage({
        src: e.target?.result as string,
        name: imgFile.name,
        type: imgFile.type,
        lastModified: imgFile.lastModified,
        x: 340,
        y: 340,
      });

      setImageUrl(resizedDataUrl);
      setImageFile(resizedFile);
    };
  };

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;

    setDateValue(date);
    setDate(date);
  };

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setTextValue(text);
    setContent(text);
  };

  useEffect(() => {
    setDate(dayjs().tz().format('YYYY-MM-DD').toString());
  }, []);

  // const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //   const temp1 = imageFile;
  //   const temp2 = dateValue;
  //   const temp3 = textValue;

  //   console.log(
  //     {
  //       temp1,
  //       temp2,
  //       temp3,
  //     },
  //     'formData'
  //   );
  // };

  return (
    <PostContentDiv className="PostContent">
      <PostContentForm className="PostForm">
        <PostImgLabel className="PostImgLabel" src={imageUrl}>
          <input
            className="PostImgInput"
            type="file"
            accept="image/*"
            onChange={onImgChange}
          />
        </PostImgLabel>

        <label className="PostDateLabel">
          <input
            className="PostDatePicker"
            type="date"
            value={dateValue}
            onChange={onDateChange}
            max={dayjs().tz().format('YYYY-MM-DD').toString()}
          />
          <DatePicker />
        </label>

        <textarea
          className="PostTextArea"
          placeholder="어떤 사진인지 짧은 소개와 함께 방명록을 남겨보아요"
          value={textValue}
          onChange={onTextChange}
        />
      </PostContentForm>
    </PostContentDiv>
  );
};

export default PostContent;
