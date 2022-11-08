import { useCallback, useEffect, useState } from "react"

export default function useCounterCard(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  const [stepSize, setStepSize] = useState(0);

  const step = () => {
    setCount(count + stepSize);
  }

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1280) {
      setCount(12);
      setStepSize(4);
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setCount(8);
      setStepSize(2);
    }
    if (window.innerWidth >= 480 && window.innerWidth < 768) {
      setCount(8);
      setStepSize(2);
    }
    if (window.innerWidth >= 320 && window.innerWidth < 480) {
      setCount(5);
      setStepSize(2);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize])

  return { count, step }
};
