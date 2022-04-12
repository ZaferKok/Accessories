const initState = {
    maincats: [],
    subcats: [],
    items: [],
    likecart: [],
    cart: [],
    form: {
        maincat: "0",
        subcat: "0"
    },
    detailselection: [],  // henüz kullanılmıyor.
    users: [],
    isLoggedIn: false
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
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case "SET_CART":
            return {
                ...state,
                cart: action.payload
            }

        case "REMOVE_FROM_CART":
            const neuesArray = state.cart.filter((value, index) => {
                return action.payload != index
            })
            return {
                ...state,
                cart: neuesArray
            }

        default:
            return state
    }
}

export default reducer