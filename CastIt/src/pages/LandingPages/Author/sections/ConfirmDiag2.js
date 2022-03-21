import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
  } from '@material-ui/core';
  import { Close } from '@material-ui/icons';
  import * as React from 'react';
  //import create from 'zustand';
 

  // const useConfirmDialogStore = create((set) => ({
  //   close: () => set({ onSubmit: undefined }),
  // }));

  const ConfirmDialog = (props) => {
    console.log(props.openModal)

    // const handleClickOpen = () => {
    //   console.log(open);
    //   setOpen(true);
    // };

    // const handleClose = () => {
    //   setOpen(false);
    // };

    // const { close } = useConfirmDialogStore();
    return (
      <Dialog open={true} maxWidth="sm" fullWidth>
        <DialogTitle>Confirm the action</DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton>
            <Close onClick={props.cancelConfirmDiag} />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography>Are you sure you want to delete the post?</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={props.cancelConfirmDiag} variant="contained">
            Cancel
          </Button>
          <Button color="secondary" onClick={props.confirmDelete} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDialog;