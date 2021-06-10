import React, { useState } from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icons/Icon'
import db from '../firebase'
import firebase from 'firebase'
const TweetBox = () => {
    const [content, setContent] = useState('')
    const addTweet = () => {
        if (content !== '') {
            db.collection('tweet').add({
                displayName: "Volkan Göksu",
                userName: '@Volkngoksu',
                content:content,
                timeStap:firebase.firestore.FieldValue.serverTimestamp(),
                avatar:"https://pbs.twimg.com/profile_images/1380420418327171072/xujU9k82_400x400.jpg"  
             })
             setContent('')
        }
    }
    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
            <textarea className="w-full text-lg placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent "
                placeholder="Neler oluyor ?"
                onChange={e => setContent(e.target.value)}
                value={content}
            />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ImageIcon className="w-6 h-6 text-primary-base" />
                    </div>

                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GIFIcon className="w-6 h-6 text-primary-base" />
                    </div>

                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PollIcon className="w-6 h-6 text-primary-base" />
                    </div>

                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ScheduleIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon className="w-6 h-6 text-primary-base" />
                    </div>
                </div>

                <button onClick={addTweet} className="bg-primary-base text-white rounded-full px-4 py-2 ">Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
