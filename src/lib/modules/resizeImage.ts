interface ResizeImageProps {
  src: string;
  name: string;
  type: string;
  lastModified: number;
  x: number;
  y: number;
}

const resizeImage = ({
  src,
  name,
  type,
  lastModified,
  x,
  y,
}: ResizeImageProps) => {
  const resizeImg = new Image();
  resizeImg.src = src;

  return new Promise<{
    resizedDataUrl: string;
    resizedFile: File;
  }>((resolve, reject) => {
    resizeImg.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        console.error('캔버스 컨텍스트가 존재하지 않음');
        reject();
        return undefined;
      }

      canvas.width = x;
      canvas.height = y;

      ctx.drawImage(resizeImg, 0, 0, x, y);

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
