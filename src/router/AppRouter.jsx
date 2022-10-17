import { Route, Routes, Navigate } from "react-router-dom"
import { AuthRouthes } from "../auth/routes/AuthRoutes"
import {CheckingAuth} from "../ui/components/checkingAuth";
import {JournalRoutes} from "../journal/routes/JournalRoutes";

import {useCheckAuth} from "../hooks/useCheckAuth.js";

export const AppRouter = () => {

    const {  status } = useCheckAuth();

    if( status === 'checking' ) {
        return  <CheckingAuth />
    }

    return(
        <Routes>

            {
                (status === 'authenticated')
                ?  <Route path="/*" element={ <JournalRoutes />  } />
                    :  <Route path="/auth/*" element={ <AuthRouthes />  } />
            }

            <Route path="/*" element={  <Navigate to='/auth/login' /> } />

        </Routes>
    )
}