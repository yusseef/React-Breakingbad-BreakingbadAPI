import React from 'react'
import Spinner from '../ui/Spinner'
import CharachterItem from './CharachterItem'

const CharachterGrid = ({items, isLoading}) => {
    return isLoading ? <Spinner /> : <section className='cards'>
        {items.map(item =>(
            <CharachterItem key={item.char_id} item={item}></CharachterItem>
        ))}
    </section>
}

export default CharachterGrid
