import { useState, useEffect } from "react";

export const useInfo = (initialData, delay = 500) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInfo(initialData);
    }, delay);

    return () => clearTimeout(timer);
  }, [initialData, delay]);

  return info;
};