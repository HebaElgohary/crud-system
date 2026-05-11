import React from 'react'
import {cardsData} from '../../data/cards'
import MainCard from './MainCard'
export default function MainCards() {
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full'>
    {cardsData.map((card)=>(<MainCard key={card.id}
    {...card} btnProps={{variant:card['iconBg']} } iconProps={{Icon:card['Icon']}}
    ></MainCard>))}
    </div>
  )
}
