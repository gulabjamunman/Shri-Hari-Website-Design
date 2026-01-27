import { useState, useCallback } from "react";

export const useTrackPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openTrackPanel = useCallback(() => setIsOpen(true), []);
  const closeTrackPanel = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    setIsOpen,
    openTrackPanel,
    closeTrackPanel,
  };
};
