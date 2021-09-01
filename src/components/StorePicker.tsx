import React from 'react'
import{getFunName} from '../helpers/helpers'

const StorePicker = () => {
    const myInput = React.createRef<HTMLInputElement>()
    const goToStore = (e) => {
        e.preventDefault()
        const storeName = myInput.current.value;

   }
    return (
        <form className="store-selector" onSubmit={goToStore}>
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={ myInput}/>
            <button type="submit"  >Visit Store →</button>
        </form>
    )
}

export default StorePicker
