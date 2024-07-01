import React from 'react';
import {motion} from 'framer-motion'

const Card = ({ data }) => {
    return (
        <div>
            <div className='flex flex-wrap z-10'>
                {data.slice(0,12).map((book) => (
                    <div key={book.primary_isbn10} className='w-52 h-80 mx-8 my-4  p-2' id='cardWrapper'>
                        <img src={book.book_image } alt='book' className='w-48 full h-60 ' />
                        <h1 className='text-xs mt-2 font-bold ml-2'>{book.title}</h1>
                        <p className='text-xs ml-2'>{book.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
