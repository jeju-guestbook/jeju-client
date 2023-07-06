import React from 'react';
import useLoaderStore from '../../lib/hook/store/useLoaderStore';
import { LoaderDiv } from './Loader.style';

const Loader = () => {
  const { isLoading } = useLoaderStore();
  const loaderDummy = ['', '', '', '', '', '', '', ''];

  return (
    <>
      {isLoading && (
        <LoaderDiv className="LoaderWrap">
          <div className="loader-inner Loader">
            {loaderDummy.map((_, idx) => {
              return <div key={idx} />;
            })}
          </div>
        </LoaderDiv>
      )}
    </>
  );
};

export default React.memo(Loader);
