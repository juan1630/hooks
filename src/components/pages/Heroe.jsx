import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroBtId } from "../helpers/getHeroById";


export const Heroe = () =>{
    const {id} = useParams();
    const navigate = useNavigate();  
    
    //se usa el memo, para memorizar valores
    // el useCallback para memorizar funciones 

    const hero = useMemo( ()=>  getHeroBtId(id), [id]);

    const onNavigateBack=()=>{
        navigate(-1)
    }
    
    if( !hero ){
        return <Navigate to="/marvel" />
        //si no traemos el hero, lo retornamos al  marvel, si podemos agregar el navigate de esta forma
    }

    return(
        <div className="row mt-5" >
            <div className="col-4">
                
                <img src={ '/assets/heroes/'+id+'.jpg'    } alt={ hero.superhero } className="img-thumbnail"/>
            </div>
            <div className="col-8">
                <h3>
                    {hero.superhero}
                </h3>
                    <ul>
                        <li className="list-group-item" ><b>Alter ego: </b> { hero.alter_ego }</li>
                        <li className="list-group-item"><b> Publisher: </b> { hero.publisher }</li>
                        <li className="list-group-item" ><b> First apereance : </b> { hero.first_appearance }</li>
                    </ul>
                    <h5 className="mt-3"> Characters </h5>
                    <p> { hero.characters } </p>

                    <button className="btn btn-primary btn-block" onClick={onNavigateBack} > Back </button>
            </div>
        </div>
    );
};