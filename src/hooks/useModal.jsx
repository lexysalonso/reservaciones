import React, { useState,useCallback } from "react";

const useModal = (initialValue = false) => {
  const [open, setOpen] = useState(initialValue);

  const handleOpen = useCallback(() => setOpen(true),[open]);

  const handleClose = useCallback(() => setOpen(false),[open]);

  return [open, handleOpen, handleClose];
};

export default useModal;
