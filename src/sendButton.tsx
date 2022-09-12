import * as React from 'react';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';


export default function SendButton(){
  return (
      <Fab color="secondary" aria-label="edit">
        <SendIcon  />
      </Fab>
  );
}
