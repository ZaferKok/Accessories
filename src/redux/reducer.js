const initState = {
    maincats: [],
    subcats: [],
    items: [],
    favorite: [],
    cart: [],
    form: {
        maincat: "0",
        subcat: "0"
    },
    detailselection: [],
    users: [],
    loginStatus: false,
    counter: [{ id: "", count: 0 }],
    // account:{
    //     creditCard: "",
    //     name: "",
    //     address: "",
    //     telefon: ""
    // },
    message: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_MAIN_CATS":
            return {
                ...state,
                maincats: action.payload
            }
        case "SET_SUB_CATS":
            return {
                ...state,
                subcats: action.payload
            }
        case "SET_ITEMS":
            return {
                ...state,
                items: action.payload
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.payload
            }
        case "SELECT_MAINCAT":
            return {
                ...state,
                form: {
                    ...state.form,
                    maincat: action.payload,
                },
            }
        case "SET_DETAILS":
            return {
                ...state,
                detailselection: action.payload
            }
        case "ADD_TO_CART":
            const findProduct = state.cart.filter((value, index) => {
                return value.id == state.detailselection.id
            })
            console.log(findProduct);
            if (!findProduct.length) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
        case "SET_CART":
            return {
                ...state,
                cart: action.payload
            }
        case "RESET_CART":
            return {
                ...state,
                cart: []
            }
        case "REMOVE_FROM_CART":
            const newArray1 = state.cart.filter((value, index) => {
                return action.payload != index
            })
            return {
                ...state,
                cart: newArray1
            }
        case "ADD_TO_FAVORITE":
            const findFavProduct = state.favorite.filter((value, index) => {
                return value.id == state.detailselection.id
            })
            if (!findFavProduct.length) {
                return {
                    ...state,
                    favorite: [...state.favorite, action.payload]
                }
            } else {
                return {
                    ...state,
                    favorite: [...state.favorite]
                }
            }
        case "SET_FAVORITE":
            return {
                ...state,
                favorite: action.payload
            }
        case "REMOVE_FROM_FAVORITE":
            const newArray3 = state.favorite.filter((value, index) => {
                return action.payload != index
            })
            return {
                ...state,
                favorite: newArray3
            }
        case "SET_LOGIN_STATUS":
            return {
                ...state,
                loginStatus: action.payload
            }
        case "PLUS_COUNTER":
            const newProduct1 = state.cart.find((product) => product.id === action.payload.id)
            if (newProduct1.Quantity < 10) newProduct1.Quantity++
            return {
                ...state,
                cart: [...state.cart]
            }
        case "MINUS_COUNTER":
            const newProduct2 = state.cart.find((product) => product.id === action.payload.id)
            if (newProduct2.Quantity != 1) newProduct2.Quantity--

            return {
                ...state,
                cart: [...state.cart]
            }
        // case "SET_ACCOUNT":
        //     return {
        //         ...state,
        //         account: action.payload
        //     }
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload
            }

        default:
            return state
    }
}

export default reducer