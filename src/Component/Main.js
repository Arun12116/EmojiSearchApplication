import React, { useEffect, useState } from 'react'
import EmojiContainer from './EmojiContainer';
import EmojiList from './EmojiList';


const Main = () => {

    const [list, setList] = useState(EmojiList)

    const [keyWord, setKeyword] = useState("")
    const typed = (e) => {
        const change = e.target.value.upparCase;
        setKeyword(change)
    }

    useEffect(_ => {

        //filter the data emoji description other
        const filter = EmojiList.filter((singleEmoji) => {
            //to serach is emoji is persent or not
            if(singleEmoji.emoji===keyWord){
                return true;
            }
            if (singleEmoji.description.startsWith(keyWord)) {
                return true;
            }
            if (singleEmoji.category.startsWith(keyWord)) {
                return true;
            }
            if (singleEmoji.aliases.some(e => e.startsWith(keyWord))) {
                return true;
            }
            return false;
        })

        setList(filter)
        // console.log("changed"+ {keyWord});
    }, [keyWord]);

    return (
        <main>
            <div className="search">
                <input type="text" placeholder='Filter 🔎' onKeyUp={typed} />
                <h3 className='no-result'>result for : {keyWord}</h3>
            </div>

            <hr />
            {
                list.length === 0 ? (
                    <p>No Emoji found</p>
                ) : (

                    <EmojiContainer emojiList={list} />



                )


            }

        </main>
    )
}

export default Main;