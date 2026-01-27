import { useState, useCallback } from "react";

export const useQuotePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openQuotePanel = useCallback(() => setIsOpen(true), []);
  const closeQuotePanel = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    setIsOpen,
    openQuotePanel,
    closeQuotePanel,
  };
};
