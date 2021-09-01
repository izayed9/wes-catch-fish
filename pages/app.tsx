import React from 'react'
import Header from '../src/components/Header'
import Inventory from '../src/components/Inventory'
import Order from '../src/components/Order'

interface Props{
    tagline: string;
    age: number;
    cool: boolean;
}

const app = (props:Props) => {

    return (
        <div className='catch-of-the-day'>
            <div className="menu">
                <Header tagline='frash seafood market' age='32' cool={ true}/>
            </div>
            <Inventory />
            <Order/>
        </div>
    )
}

export default app
