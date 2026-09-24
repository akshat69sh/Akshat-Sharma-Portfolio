import React from 'react'
import { href } from 'react-router-dom';

function Button({label,icon,href,onClick}) {
    const content =(
<>
<span>{label}</span>
{icon && <span className='inline-flex items-center text-sm'>{icon}</span>}
</>
    );
    const className = "inline-flex items-center gap-2 w-fit rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide bg-neon text-brand-bg transition-all hover:opacity-90 cursor-pointer select-none"
    if(href){
        return (
            <a href={href} className={className}>
                {content}
            </a>
        );
    }
    return (
        <button onClick={onClick} className={className}>
            {content}
        </button>
    )
}

export default Button
