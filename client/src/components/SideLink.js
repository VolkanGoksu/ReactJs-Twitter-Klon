import React from 'react'

const SideLink = ({ name, Icon ,active, onMenuItemClick}) => {
    const isActive = active === name ;
    return (

            <li className="group"  onClick={()=>onMenuItemClick(name)}>
                <a href={name} 
                 className=" cursor-pointer block text-xl "
                >
                    <div className="inline-block">
                        <div className={`pl-3 pr-8 py-3 flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full text-lg mb-1
                          ${isActive ? 'text-primary-base':""}
                        `}>
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
     
    )
}

export default SideLink
