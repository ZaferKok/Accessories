import { isDocument } from "@testing-library/user-event/dist/utils"

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
    counter: [{ id: "", count: 0 }]
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
            const newArray1 = state.cart.filter((value, index) => {
                return action.payload != index
            })
            return {
                ...state,
                cart: newArray1
            }

        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorite: [...state.favorite, action.payload]
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

        // case "SET_USERS":
        //     console.log(state.users);
        //     return {
        //         ...state,
        //         users: action.payload
        //     }
        // case "PLUS_COUNTER":
        //     console.log(state.counter.id);
        //     console.log(state.counter.count);
        //     console.log(state.cart.Quantity);

        //     if (state.cart.find((product) => product.id === action.payload.id)) {
        //         return {
        //             ...state,
        //             cart: [...state.cart, (action.payload.Quantity + 1)]
        //         }
        //     }
        // state.categories.find((item) => item.id === Number(categoryId)).


        // case "PLUS_COUNTER":
        //     console.log(state.counter.id);
        //     console.log(state.counter.count);
        //     return {
        // const relatedProduct = state.cart.filter((value) => {
        //     return action.payload == value.id
        // })
        // return {
        //     ...state,
        //     counter:{
        //                 ...state.counter,
        //                 id:     relatedProduct.id, 
        //                 count:  state.count + 1
        //             }
        // }

        default:
            return state
    }
}

export default reducer