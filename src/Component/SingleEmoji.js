import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SingleEmoji = ({ singleimoji }) => {

    const [isCopied ,setCopy]=useState(false)

    useEffect(_=>{
        if(isCopied){
            setTimeout(_=>{
            setCopy(false);
            },1000)
        }
    },[isCopied])
    return (
        <CopyToClipboard text={singleimoji.emoji} onCopy={_=> setCopy(true)}>
            <div className='items'>
                <p className='emoji'> {isCopied ? "✅" : singleimoji.emoji} </p>
                <p>{singleimoji.description}</p>



            </div>
        </CopyToClipboard>

    )
}

export default SingleEmoji;