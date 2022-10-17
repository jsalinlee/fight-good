import { createContext, useState, useEffect  } from "react";



export const ListContext = createContext({

    addItemToList: ()=>[],
    removeItemFromList: ()=>[],
    deleteItemFromList: ()=>[],
    listItems: [],

    /*
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>[],
    removeItemFromCart: ()=>[],
    deleteItemFromCart: ()=>[],
    sumCartItems: ()=>[],
    totalPrice: 0,
    cartCount: 0,
    */
});


export const ListProvider = ({children}) => {
    const { listItems, setListItems } = useState([]);
    /*
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [ cartItems, setCartItems] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ totalPrice, setTotalPrice ] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
        const newPrice = cartItems.reduce((total,cartItem)=>total + (cartItem.price * cartItem.quantity),0)

        setTotalPrice(newPrice)
        setCartCount(newCartCount);
    }, [cartItems])
*/


    const value = { listItems, addItemToList, removeItemFromList, deleteItemFromList };
    return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

