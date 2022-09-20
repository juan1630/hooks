import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/NavBar'
import { DCPage } from '../pages/DCPage';
import { Heroe } from '../pages/Heroe';
import { Marvel } from '../pages/Marvel';
import { SearchHeroe } from '../pages/SearchHero';


export const HerosRoutes = ()=>{
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={ <Marvel /> } />
                    <Route path="dc" element={ <DCPage /> } />
                    
                    <Route path='search' element={ <SearchHeroe /> } />
                    <Route path='hero' element={ <Heroe /> } />
                    <Route path="/" element={ <Navigate to="/marvel" /> } />

                </Routes>
            </div>
          
        </>
    )
};