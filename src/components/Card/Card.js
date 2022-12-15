import React, { useState } from 'react'

function Card({title, image, description, sources}) {

    const [clicked, setClicked] = useState(false);

    return (
        <div className={clicked ? 'clicked' : 'card-wrapper'} onClick={() => setClicked(clicked ? false : true)}>
            <div className='card-writting'>
                <div className='card-title'>
                    {title}
                </div>
                <div className='card-description'>
                    {description}
                </div>
                <div className='card-sources'>
                    {sources.length > 0 ? 'Sources:' : ''}
                    {sources.map(source => {
                        return (
                            <div className='source' key={source.text}>
                                {source.text}
                                <br />
                                <a href={source.link} target='_blank' rel='noreferrer'>{source.link}</a>
                            </div>
                        ) 
                    })}
                </div>
            </div>
            <div className='card-image'>
                <h3>Click anywhere to go back.</h3>
                <img src={image} alt={description} />
            </div>
        </div>
    )
}

export default Card