import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' h-20 flex flex-row items-center justify-around  bg-slate-600'>
            <div className=' h-1/2 text-center font-mono text-3xl font-bold text-indigo-600'><Link to='/api'>home</Link></div>
            <div className=' h-1/2 text-center font-mono text-xl font-bold text-indigo-600'><Link to='/summary'>summary</Link></div>
            <div className='h-1/2 text-center font-mono text-xl font-bold text-indigo-600'><Link to='/api'>all data</Link></div>
        </div>
    );
}

export default Header;
