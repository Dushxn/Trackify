import React from 'react';

const Gcard = ({ data }) => {

    

    return (
        <div>
            <div className='flex flex-wrap z-10'>
            
                {data.slice(0,12).map((book) => (
                    <div key={book.primary_isbn10} className='w-52 h-80 mx-8 my-4  p-2' id='cardWrapper'>
                        <img src={book.volumeInfo.imageLinks.thumbnail } alt='book' className='w-48 full h-60 ' />
                        <h1 className='text-xs mt-2 font-bold ml-2'>{book.volumeInfo.title}</h1>
                        <p className='text-xs ml-2'>{book.volumeInfo.authors[0]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gcard;
