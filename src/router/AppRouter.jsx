import { Route, Routes } from "react-router-dom"
import { AuthRouthes } from "../auth/routes/AuthRoutes"
import { JournalPage } from "../journal/pages/JournalPage"
import {useSelector} from "react-redux";
import {CheckingAuth} from "../ui/components/checkingAuth";

export const AppRouter = () => {

    const { status  } = useSelector( state => state.auth );

    if( status === 'checking' ) {
        return  <CheckingAuth />
    }

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