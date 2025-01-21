import { useEffect, useState } from "react";

export const useSHDNADebounce = (value: any, delay: number): any => {
  const [debouncedValue, setDebouncedValue] = useState();
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
