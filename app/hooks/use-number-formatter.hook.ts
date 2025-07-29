import { useCallback } from "react";

export function useNumberFormatter(locale: string = "en-US") {
  const formatNumber = useCallback(
    (value: number | string): string => {
      const number = typeof value === "string" ? parseFloat(value) : value;
      if (isNaN(number)) return "-";
      return number.toLocaleString(locale);
    },
    [locale],
  );

  return formatNumber;
}
