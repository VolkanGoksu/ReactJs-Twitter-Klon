import React, { useEffect ,useState} from 'react'
import db from '../firebase'
import { PopulerIcon } from '../icons/Icon'
import TweetBox from '../components/TweetBox'
import Divider from '../components/Divider'
import TweetList  from '../components/TweetList '

const Content = () => {
    const [tweets,setTweets] = useState([])
    useEffect(() => {
         db.collection('tweet')
         .orderBy('timeStap','desc')
         .onSnapshot(snapshot=>setTweets(snapshot.docs.map(doc=>doc.data())))
    },[])
    //console.log(tweets);
    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
            <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
                <span className="font-bold text-xl text-gray-800">Home</span>
                <PopulerIcon className="w-6 h-6 text-primary-base" />
            </header>
            <div className="flex space-x-4 px-4 py-3">
                <img src="https://pbs.twimg.com/profile_images/1380420418327171072/xujU9k82_400x400.jpg" alt="profile"
                    className="w-11 h-11 rounded-full"
                />
                  <TweetBox /> 
            </div>
            <Divider/>   
            <TweetList tweets={tweets} />
        </main>
    )
}

export default Content
