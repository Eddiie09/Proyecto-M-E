import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="py-16 bg-gray-950 px-12 flex justify-between gap-10 text-slate-200 text-sm felx-wrap mt-10
    md:flex-nowrap">
            <Link to='/' className='text-2xl font-bold tracking-tighter transition-all text-white flex-1'>
                Celulares
            </Link>

           <div className=' flex.flex-col.gap-4.flex-1'>
                <p className="font-semibold uppercase tracking-tighter">
                    Subcribete 
                </p>
           </div>
        </footer>
    )
}
