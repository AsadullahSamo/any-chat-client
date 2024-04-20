import React, { useEffect, useRef } from 'react'
import font from '../../styles/Fonts.module.css';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';

const P = styled.p`
	&:focus {
		border: 1px solid red;
		outline: 1px solid red;
	}
`;

export default function Dropdown( {message, index, onDeleteClick, onDeleteForMe, onEdit, name, nickname} ) {
    		
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [dialogOpenName, setDialogOpenName] = useState('delete');
    const buttonRef = useRef();
    const [btnRefValue, setBtnRefValue] = useState('');
    
    useEffect(() => {
        if (open) {
            if (buttonRef.current) {
                console.log(buttonRef.current.innerText);
                setBtnRefValue(buttonRef.current.innerText);
            }
        }
	}, [btnRefValue]);

    const handleDialogOpen = (name) => {
        setOpen(true);
        setDialogOpenName(name);
    } // end of handleDialogOpen

    const handleDialogClose = () => {
        setOpen(false);
    } // end of handleDialogClose

    const handleDeleteClick = () => {
        console.log(index)
        onDeleteClick(index);
    } // end of handleDeleteClick

    const handleDeleteForMe = () => {
        console.log(index)
        onDeleteForMe(index);
    }

    const handleEdit = () => {
        buttonRef.current && setBtnRefValue(buttonRef.current.innerText)
        onEdit(index, btnRefValue);
        setOpen(false);
    };

    const handleBlur = (e) => {
        setBtnRefValue(e.target.innerText);
    }
		

  return (
    <div className="relative inline-block text-left">

        <Dialog disableRestoreFocus fullWidth={fullScreen} className="flex justify-center" open={open} onClose={handleDialogClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogActions className=''> 
                { dialogOpenName === "delete" ?
                    (
                        <>
                            <div className='w-[300px] md:w-[600px] bg-gray-100 flex flex-col items-center gap-1'>
                                <p className={`mb-5 ${font.poppinsMedium}`}> Are you sure you want to delete? </p> 
                                <div className='flex-col md:flex-row flex justify-start gap-1 md:gap-3'>
                                    <button className='mb-5 text-white hover:text-black font-semibold hover:border-2 hover:border-solid hover:border-[#434ce6] hover:bg-white hover:cursor-pointer hover:transition-all hover:duration-500 w-48 h-12 rounded-lg bg-red-600' onClick={handleDeleteForMe}> Delete for me </button>
                                    { name === nickname && <button className='text-white hover:text-black font-semibold hover:border-2 hover:border-solid hover:border-[#434ce6] hover:bg-white hover:cursor-pointer hover:transition-all hover:duration-500 w-48 h-12 rounded-lg bg-red-600' onClick={handleDeleteClick}> Delete for everyone </button> }
                                </div>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className='w-[300px] md:w-[600px] bg-gray-100 flex justify-center gap-1'>
                                <P onBlur={handleBlur} contentEditable ref={buttonRef} tabIndex={0} className={`p-2 m-auto text-center w-[80%] ${name === nickname ? 'text-white bg-blue-500' : 'text-[#737070] bg-[#D6DCE3]'} my-5 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl ${font.poppinsMedium}`}> {message} </P>
                                <button className='mr-5 self-end mb-5 font-extrabold text-3xl text-white hover:cursor-pointer hover:transition-all hover:duration-500 size-10 rounded-full bg-green-600' onClick={handleEdit}> &#10003; </button>
                            </div>
                        </>
                    )
                }             
            </DialogActions>
        </Dialog>

        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <ul className="py-1" role="none">
                <li className={`text-gray-700 block px-4 py-2 text-sm ${font.poppinsRegular} hover:bg-gray-300 hover:cursor-pointer`} role="menuitem" tabIndex="-1" id="menu-item-0" onClick={() => handleDialogOpen("delete")}> Delete </li>
                <li className={`text-gray-700 block px-4 py-2 text-sm ${font.poppinsRegular} hover:bg-gray-300 hover:cursor-pointer`} role="menuitem" tabIndex="-1" id="menu-item-0" onClick={() => handleDialogOpen("edit")}> Edit </li>
            </ul>
        </div>
    </div>
  )
}

