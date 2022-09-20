import { getHerosByPublicher } from "../helpers/getHeroesBtPublisher";

export const HeroList = ({ publisher }) =>{
    const heroes = getHerosByPublicher( publisher );

    return(<>
        <ul>
            {
                heroes.map( ( heroe ) =>  <li key={heroe.id}>  { heroe.superhero } </li> )
            }
        </ul>
    </>);
}