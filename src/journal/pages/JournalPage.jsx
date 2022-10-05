import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectView } from "../views/NothingSelectedView"

export const JournalPage = () => {
    return (
        <JournalLayout>
          {/*  <NothingSelectView /> */}
          <NoteView />
          <IconButton
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