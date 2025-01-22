import React, { createContext, useState } from 'react'



export const BasketContext = createContext(null)

const Provider = ({ children }) => {

    const [basket, setBasket] = useState([])


    // const basketAdd = (prod) => {
    //     setBasket((prev) => {
    //         const idx = prev.findIndex((p) => p._id === prod._id)
    //         if (idx === -1) {
    //             return [...prev, { ...prod, quantity: 1 }]
    //         }
    //         prev[idx].quantity++
    //         return [...prev]
    //     })
    // }

    const basketAdd = (prod) => {
        setBasket((prev)=> {
            const idx = prev.findIndex((p)=>p._id === prod._id)
            if(idx === -1){
                return [...prev, {...prod, quantity:1}]
            }
            else{
                prev[idx].quantity++
                return [...prev]
            }
        })
    }

    const basketInc = (prod) => {
        setBasket((prev) => {
            const found = prev.find((p) => p._id === prod._id)
            found.quantity++
            return [...prev]
        })
    }

    const basketDec = (prod) => {
        setBasket((prev) => {
            const found = prev.find((p) => p._id === prod._id)
            found.quantity--
            if(found.quantity === 0){
                return prev.filter((p)=>p._id !== prod._id) 
            }
            return [...prev]
        })
    }


    return (
        <BasketContext.Provider value={{basketAdd,basketDec,basketInc, basket}}>{children}</BasketContext.Provider>
    )
}

export default Provider