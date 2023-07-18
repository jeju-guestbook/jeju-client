import { useEffect, useRef } from 'react';

const useOnceEffect = (
  callback: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const mountOnce = useRef(false);

  useEffect(() => {
    if (mountOnce.current === true) {
      return;
    }

    callback();
    mountOnce.current = true;
  }, deps);

  return { mountOnce };
};

export default useOnceEffect;
