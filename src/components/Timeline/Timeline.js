import React from 'react'
import Bubble from '../Bubble/Bubble'
import Card from '../Card/Card'
import CARDS from '../cards'
import BUBBLES from '../bubbles'
import ExtraInfo from '../Bubble/ExtraInfo'

function Timeline() {
    return (
        <div className='timeline-wrapper'>
            <ExtraInfo></ExtraInfo>
            <div className='center-line' />
            {CARDS.map((card, index) => {
                return (
                    <div className='line-card-wrapper' style={{left: 9.75 + index * 10 + 'vw'}} key={index + 'card-div'}>
                        <div className='line' key={index + ' line'} />
                        <Card title={CARDS[index].title} image={CARDS[index].image} description={CARDS[index].description} sources={CARDS[index].sources} key={index + ' card'} />
                    </div>
                )
            })}
            {BUBBLES.map((bubble, index) => {
                return (
                    <div className='bubble' style={{left: 10 + index * 20 + 'vw'}} key={index + ' bubble-div'} >
                        <Bubble title={BUBBLES[index].title} link={BUBBLES[index].link} key={index + ' bubble'} />
                    </div>
                )
            })}
        </div>
    )
}

export default Timeline