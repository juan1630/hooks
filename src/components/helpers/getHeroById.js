import { heroes } from "../data/heroes";

export const getHeroBtId = (id)=>{
    return heroes.find( hero => hero.id == id );
};