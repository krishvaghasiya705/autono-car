'use client';
import useFluidCursor from '@/cursors/cursor2/index2';
import { useEffect } from 'react';


const FluidCursor = () => {
    useEffect(() => {
        useFluidCursor();
    }, []);

    return (
        <div className='fluidcursormain'>
            <canvas id='fluid' />
        </div>
    );
};
export default FluidCursor;