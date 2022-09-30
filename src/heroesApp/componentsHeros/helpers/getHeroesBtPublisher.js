import { heroes } from '../data/heroes'

export const getHerosByPublicher = ( publisher )=>{
        const validPublisher = [ 'DC Comics' , 'Marvel Comics'];

        if( !validPublisher.includes(publisher) ){
            throw new Error('The' + publisher + "Dosen't exist" );
         }

         return heroes.filter(  heroe => heroe.publisher == publisher )
};