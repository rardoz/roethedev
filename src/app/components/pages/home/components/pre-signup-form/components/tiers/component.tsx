import React from 'react'
import Card from '../../../../../../card'
import { TIER_LEVELS } from '../../constants'

const Tiers: React.FC = () => {
  return (
    <div className='flex-grid gutters'>
      {TIER_LEVELS.map( ( props ) => 
        <Card 
          className="flex-grid-item" 
          {...props}
        />
      )}
    </div>
  )
}

export default Tiers