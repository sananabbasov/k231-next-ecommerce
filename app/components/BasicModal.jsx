"use client"
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [productName, setProductName] = useState("Iphone 14 Pro Max | 256 Gb Space Grey")

    return (
        <div>
            <button onClick={handleOpen}><EditNoteOutlinedIcon /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            error={productName.length == 0}
                            onChange={(e) => setProductName(e.target.value)}
                            id="outlined-basic"
                            label="Outlined"
                            defaultValue={productName}
                            variant="outlined" fullWidth
                            helperText={productName.length == 0 ? "Incorrect entry." : ""}
                            required
                        />
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth helperText="Incorrect entry." required />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}