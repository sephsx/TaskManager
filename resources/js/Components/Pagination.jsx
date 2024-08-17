import React from 'react'
import { Link } from '@inertiajs/react'
const Pagination = ({ links }) => {
    return (
        <nav className='text-center mt-4'>
            {links.map((link) => (
                <Link to={link.url || ""} key={link.label} className={
                    "inline-block py-2 px-3 rounded-lg text-gray-350 text-xs" +
                    (link.active ? "bg-gray-950" : " ") +
                    (!link.url ? "!text-gray-300 cursor-not-allowed" : "hover:bg-gray-950")
                }
                    dangerouslySetInnerHTML={{ __html: link.label }}>
                </Link>
            ))}
        </nav>
    )
}

export default Pagination