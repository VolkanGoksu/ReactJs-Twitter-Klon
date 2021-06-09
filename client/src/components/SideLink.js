import React from 'react'

const SideLink = ({ name, Icon }) => {
    return (
        <div>
            <li>
                <a href={name.toLowerCase()} className="cursor-pointer block group">
                    <div className="inline-block">
                        <div className=" pl-3 pr-8 py-3 flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full text-xl mb-2">
                            <span>
                                <Icon />
                            </span>
                            <span className="ml-4 font-bold">
                                {name}
                            </span>
                        </div>
                    </div>
                </a>
            </li>
        </div>
    )
}

export default SideLink
