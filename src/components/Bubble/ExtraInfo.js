import React, {useState} from 'react'

function ExtraInfo() {

    const [clicked, setClicked] = useState(false);

    return (
        <div className={clicked ? 'clicked extra-info-wrapper' : 'bubble-wrapper extra-info-wrapper'} onClick={() => setClicked(clicked ? false : true)}>
                <div className='info-title'>
                    Extra Sources
                </div>
                <div className='info-link'>
                    <h3>East Coast vs. West Coast</h3>
                    <a href='https://whrw.fm/2020/08/03/east-and-west-coast-hip-hop/' target='_blank'>https://whrw.fm/2020/08/03/east-and-west-coast-hip-hop/</a>
                    <h3>Essential East Coast Hip-Hop</h3>
                    <a href='https://blog.roughtrade.com/gb/rough-trade-essential-east-coast-hip-hop/' target='_blank'>https://blog.roughtrade.com/gb/rough-trade-essential-east-coast-hip-hop/</a>
                    <h3>Comparitive Method in East Coast Hip-Hop</h3>
                    <a href='https://sites.utexas.edu/leahkatelynrose/2018/10/30/comparative-method-in-east-coast-and-west-coast-hip-hop/' target='_blank'>https://sites.utexas.edu/leahkatelynrose/2018/10/30/comparative-method-in-east-coast-and-west-coast-hip-hop/</a>
                </div>
        </div>
    )
}

export default ExtraInfo