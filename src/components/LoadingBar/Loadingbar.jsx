import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
const useAutoIncrementProgress = (increment = 4, interval = 50) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + increment : prevProgress
      );
    }, interval);

    return () => clearInterval(timer);
  }, [increment, interval]);

  return progress;
};

export default useAutoIncrementProgress;
