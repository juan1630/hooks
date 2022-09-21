import { useMemo } from "react";
import { getHerosByPublicher } from "../helpers/getHeroesBtPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) =>{

    const heroes = useMemo( ()=> getHerosByPublicher( publisher ),  [publisher]);

    return(<>
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( ( heroe ) => <HeroCard  key={heroe.id}  {...heroe} />)
            }
        </div>
    </>);
}