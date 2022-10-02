import { Route, Routes } from "react-router-dom"
import { AuthRouthes } from "../auth/routes/AuthRoutes"
import { JournalPage } from "../journal/pages/JournalPage"

export const AppRouter = () => {
    return(
        <Routes>
            {/*
                login y registro
            */}

            <Route path="/auth/*" element={ <AuthRouthes />  } />

            {
                /**
                 * 
                 * journal app
                 */
            }
            <Route path="/*" element={  <JournalPage /> } />
        </Routes>
    )
}