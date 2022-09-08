import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quotes = ({ quote, author }) => {
    
    const pRef = useRef();


    const [ boxSize , setBoxSize  ] = useState({
        width:0, 
        height:0
    });

    useLayoutEffect(()=> {
        const { width, height } = pRef.current.getBoundingClientRect(); 
        setBoxSize({ width, height }); 
    }, [quote]);


    return (
        <>
             <blockquote className='blockquote text-end  ' >
                <p ref={ pRef }  > { quote } </p>
                <footer className='blockquote-footer' >
                    { author}
                </footer>
            </blockquote>


            <code>
                { JSON.stringify( boxSize ) }
            </code>
        </>
    )
};


Quotes.propTypes ={ 
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}