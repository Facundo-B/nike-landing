import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImg(imgURL.bigShoe)
        }

    }

    return (
        <div className={`border-2 rounded-xl
        ${bigShoeImg === imgURL
                ? 'border-coral-red'
                : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
            <div><img src={imgURL.thumbnail} alt="" /></div>
        </div>
    )
}

export default ShoeCard