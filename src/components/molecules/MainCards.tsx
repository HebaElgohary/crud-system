import React from 'react'
import {cardsData} from '../../data/cards'
import MainCard from './MainCard'
export default function MainCards() {
  
    return (
        <div className='flex lg:flex-row flex-col gap-4 w-full'>
    {cardsData.map((card)=>(<MainCard key={card.id}
    {...card} btnProps={{variant:card['iconBg']} } iconProps={{Icon:card['Icon']}}
    ></MainCard>))}
    </div>
  )
}
