import React, {useState} from 'react'

function Bubble({title, link}) {

    const [clicked, setClicked] = useState(false);

    return (
        <div className={clicked ? 'clicked' : 'bubble-wrapper'} onClick={() => setClicked(clicked ? false : true)}>
                <div className='bubble-title'>
                    {title}
                </div>
                <div className='bubble-link'>
                    <iframe width="560" height="315" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    <a href={link}>{link}</a>
                    <h3>Click anywhere to go back.</h3>
                </div>
        </div>
    )
}

export default Bubble