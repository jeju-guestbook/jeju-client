interface ResizeImageProps {
  src: string;
  name: string;
  type: string;
  lastModified: number;
  maxWidth: number;
  maxHeight: number;
}

const resizeImage = ({
  src,
  name,
  type,
  lastModified,
  maxWidth,
  maxHeight,
}: ResizeImageProps) => {
  const resizeImg = new Image();
  resizeImg.src = src;

  return new Promise<{
    resizedDataUrl: string;
    resizedFile: File;
  }>((resolve, reject) => {
    resizeImg.onload = () => {
      let width = resizeImg.width;
      let height = resizeImg.height;

      // 이미지 비율 유지
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        console.error('캔버스 컨텍스트가 존재하지 않음');
        reject();
        return;
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(resizeImg, 0, 0, width, height);

      const dataUrl = canvas.toDataURL(type);
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], name, {
            type,
            lastModified,
          });
          resolve({
            resizedDataUrl: dataUrl,
            resizedFile: file,
          });
        }
      }, type);
    };
  });
};

export default resizeImage;
