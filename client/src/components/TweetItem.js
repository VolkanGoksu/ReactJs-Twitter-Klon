import React from 'react'
import {LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon} from '../icons/Icon'

const TweetItem = ({ content, displayName, image, avatar, timeStap, userName }) => {
    return (
        <article className="flex space-x-3 border-gray-extraLight border-b px-4 py-3 cursor-pointer">
            <img src={avatar} alt="profile" className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold">{displayName}</h4>
                    <span className="ml-2">{userName}</span>
                    <div className="mx-2 h-1 w-1 border rounded-full"></div>
                    <span className="">
                        {
                            timeStap?.toDate().toLocaleTimeString("tr-TR")
                        }
                    </span>
                </div>
                <p className="mt-2 text-gray-900 text-sm">{content}</p>
                {image && <img src={image} className="my-2 rounded-xl max-h-96" alt="content"/>}
                <ul className="flex justify-between max-w-md">
                    <li className="group flex items-center space-x2 text-gray-dark">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-base">
                            <ReplyIcon className="w-5 h-5" />
                        </div>
                        <span className="group-hover:text-primary-base">15</span>
                    </li>

                    <li className="group flex items-center space-x2 text-gray-dark">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-base">
                            <ReTweetIcon className="w-5 h-5" />
                        </div>
                        <span className="group-hover:text-primary-base">20</span>
                    </li>

                    <li className="group flex items-center space-x2 text-gray-dark">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-base">
                            <LikeIcon className="w-5 h-5" />
                        </div>
                        <span className="group-hover:text-primary-base">30</span>
                    </li>

                    <li className="group flex items-center space-x2 text-gray-dark">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-base">
                            <ShareIcon className="w-5 h-5" />
                        </div>
                        <span className="group-hover:text-primary-base">40</span>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default TweetItem
