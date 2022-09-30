import { AuthProvider } from "./auth/context/AuthProvider";
import { RouterApp } from "./router/AppRouter";

export const HerosApp = () =>{
    return(
        <AuthProvider>
            <RouterApp />
        </AuthProvider> )
};