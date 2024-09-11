import React from 'react';

function Banner() {
    return(
        <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style= {{backgroundImage : 'url(https://wallpapercg.com/download/kalki-2898-ad-4k-wallpaper-3840x2160-24501.jpg)'}}>
            <div className='text-white text-xl text-center font-mono  w-full bg-indigo-300/75 p-4' > Kalki 2898AD</div>
            </div>
    )
}

export default Banner