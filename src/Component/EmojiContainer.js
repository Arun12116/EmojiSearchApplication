import React from 'react'
import SingleEmoji from './SingleEmoji'

const EmojiContainer = ({ emojiList }) => {
    // console.log( "hello"+ emojiList);
    return (
        <div className='container'>
            {
                emojiList.map((singleimoji, idx) => {

                    return (
                        <>

                            <SingleEmoji singleimoji={singleimoji} idex={idx} />

                        </>


                    )

                })

            }



        </div>
    )
}

export default EmojiContainer;