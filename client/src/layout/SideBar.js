import React,{useState} from 'react'
import SideLink from '../components/SideLink'
import { HomeIcon } from '../icons/Icon'
import { NotificationsIcon } from '../icons/Icon'
import { MessagesIcon } from '../icons/Icon'
import { BookmarksIcon } from '../icons/Icon'
import { ListsIcon } from '../icons/Icon'
import { ProfileIcon } from '../icons/Icon'
import { MoreIcon } from '../icons/Icon'
import { ExploreIcon } from '../icons/Icon'

import logo from '../images/twitter.svg'

import UserBox from '../components/UserBox'

const sideLinks = [
    {
        name:'Home',
        icon:HomeIcon,
    },
    {
        name:'Explore',
        icon:ExploreIcon,
    },
    {
        name:'Notifications',
        icon: NotificationsIcon 
    },
    {
        name:'Messages',
        icon:MessagesIcon,
    },
    {
        name:'Bookmarks',
        icon:BookmarksIcon,
    },
    {
        name:'Lists',
        icon:ListsIcon,
    },
    {
        name:'Profile',
        icon:ProfileIcon,
    },
    {
        name:'More',
        icon:MoreIcon,
    },
]

const SideBar = () => {
    const[active,setActive]=useState("Home")

    const handleMenuItemClick=(name)=>{
       setActive(name)
    }
    return (
        <div className=" h-screen sticky top-0 flex flex-col w-72  justify-between">
            <div>
                <div className="mt-1 mb-4 ml-1  flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest">
                    <img src={logo} alt="twitter logo" className="w-9 h-9" />
                </div>
                <nav className="mb-4">
                    <ul>
                        {sideLinks.map(link=>(
                            <SideLink key={link.name}  name={link.name} Icon={link.icon} active={active} onMenuItemClick={handleMenuItemClick}/>
                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">Tweet</button>
            </div>
            <div><UserBox /></div>
        </div>
    )
}

export default SideBar
