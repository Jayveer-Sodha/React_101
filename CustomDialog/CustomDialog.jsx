import React from "react";
import { Dialog } from "@mui/material";
import create from "zustand";

// custom hook for accessing state of dialog
const useCustomModal = create((set) => ({
  openDialog: false,
  children: undefined,
  closeDialog: () =>
    set({
      openDialog: false,
    }),
}));

// custom component of Dialog box
export const CustomDialog = () => {
  const { openDialog, children, closeDialog } = useCustomModal();
  return (
    <Dialog
      openDialog={openDialog}
      onClose={closeDialog}
      maxWidth="sm"
      fullWidth
    >
      {children && React.cloneElement(children, { closeDialog: closeDialog })}
    </Dialog>
  );
};

//  method for invoking dialog from anywhere
export const customDialog = (openDialog, children) => {
  useCustomModal.setState({
    openDialog,
    children,
  });
};

// # here we have used zustand package for managing state of dialog within file.
// # for ui we have used material-ui's Dialog.
// # How to use?
// # this file return one method to invoke Dialog from anywhere, this method accept two parameters,
//   (1) Boolean true values variable to open modal.
//   (2) Children component you want to show in dialog.
// # for closing dialog you will get closeDialog method as props in your passed children component, you just have to call this method and it will close dialog.
 
