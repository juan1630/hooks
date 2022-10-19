import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectView } from "../views/NothingSelectedView"

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving,  activeNote } = useSelector(state => state.journal);

  console.log( activeNote )

  const onClickNewNote = () => {
    //dispatch del thunk startNewNote
    dispatch( startNewNote());

  }
    return (
        <JournalLayout 
        className='animate__animated animate__fadeIn animate__faster'
        >
          {( !!activeNote ?  <NoteView /> : <NothingSelectView /> )}
          
          <IconButton
            disabled={ isSaving   }
            onClick={ onClickNewNote }
            size='large'
            sx={{
                color:"white",
                backgroundColor:"error.main",
                opacity:0.9,
                position: 'fixed',
                right:50,
                bottom:50
            }}
          >
            <AddOutlined  sx={{ fontSize: 30 }}  />
          </IconButton>
        </JournalLayout>
    )
}