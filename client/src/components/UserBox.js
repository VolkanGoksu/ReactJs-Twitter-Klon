import React from 'react'

const UserBox = () => {
    return (
        <div className="flex just-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 trasform transition-colors duration-300">
             <img src ="https://pbs.twimg.com/profile_images/1380420418327171072/xujU9k82_400x400.jpg" alt="profile" 
             className="w-11 h-11 rounded-full"
             />
             <div className="flex flex-col">
                 <span className="ml-2 text-lg font-bold">VOLKAN</span>
                 <span className="ml-2 text-xs">@Volkangksu</span>
             </div>
         
        </div>
    )
}

export default UserBox
