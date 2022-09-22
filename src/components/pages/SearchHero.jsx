import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import queryString from 'query-string';
import { getResultsByName } from "../helpers/getResultsByName";

export const SearchHeroe = ()=>{

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const heroes = getResultsByName(q);

    const showSearch = ( q.length === '' );
    const showError =  ( q.length > 0 && heroes.length == 0 )

    const {searchText, onInputChange}  = useForm({
        searchText:q
    });

    const onSearchSubmit = (event) =>{
        event.preventDefault();
        
        if(searchText.trim().length <= 1) return
        navigate('?q='+searchText.toLowerCase().trim());    
    };

    return(
        <>
            <h1> Search heroe </h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4> Searching... </h4>
                    <form  onSubmit={onSearchSubmit} >
                        <input type='text' 
                                className="form-control mt-4" 
                                placeholder="Search a hero" 
                                name="searchText" 
                                autoComplete="off"
                                onChange={onInputChange} 
                                value={searchText}
                                />

                                <button type="submit" className="btn btn-primary mt-4" > Search </button>
                    </form>
                </div>
                <div className="col-7 mt-4">

                    <h2>Results</h2>
                    
                    {/* {
                        (q=== '')
                        ? <div className="alert alert-primary">Search a hero</div>
                        : (heroes.length === 0) && <div className="alert alert-danger"><strong>Ther's no hero <b> { q } </b></strong></div>
                    } */}

                   
                        <div className="alert alert-primary animate__animated animate__fadeIn"  style={{ display:  (showSearch) ? '' : 'none' }} >Search a hero</div>
                        <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: (showError) ? '': 'none' }} ><strong>Ther's no hero <b> { q } </b></strong></div> 
            
                    
                        {
                            heroes.map( hero => <HeroCard key={hero.id} {...hero} /> )
                        }
                </div>
            </div>
        </>
    );
};