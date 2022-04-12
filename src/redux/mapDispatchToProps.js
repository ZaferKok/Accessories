import axios from 'axios'
import { BASE_URL } from '../assets/baseURL'

const mapDispatchToProps = (dispatch) => {
    return {
        setMainCats: () => {
            dispatch(() => {
                axios.get(`${BASE_URL}/maincats`)
                    .then((response) => {
                        dispatch({
                            type: "SET_MAIN_CATS",
                            payload: response.data
                        })
                    })
            })
        },
        setSubCats: () => {
            dispatch(() => {
                axios.get(`${BASE_URL}/subcats`)
                    .then((response) => {
                        dispatch({
                            type: "SET_SUB_CATS",
                            payload: response.data
                        })
                    })
            })
        },
        setItems: () => {
            dispatch(() => {
                axios.get(`${BASE_URL}/items`)
                    .then((response) => {
                        dispatch({
                            type: "SET_ITEMS",
                            payload: response.data
                        })
                    })
            })
        },
        setUsers: () => {
            dispatch(() => {
                axios.get(`${BASE_URL}/users`)
                    .then((response) => {
                        dispatch({
                            type: "SET_USERS",
                            payload: response.data
                        })
                    })
            })
        },
        
        selectMainCat: (maincat) => {
            dispatch({
                type: "SELECT_MAINCAT",
                payload: maincat
            })
        },

        setDetails: (product) => {
            dispatch({
                type: "SET_DETAILS",
                payload: product
            })
        },

        addToCart: (product) => {
            dispatch({
                type: "ADD_TO_CART",
                payload: product
            })
        },

        setCart: (cart) => {
            dispatch({
                type: "SET_CART",
                payload: cart
            })
        },

        removeFromCart: (index) => {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: index
            })
        },

        addToFavorite: (product) => {
            dispatch({
                type: "ADD_TO_FAVORITE",
                payload: product
            })
        },

        setFavorite: (cart) => {
            dispatch({
                type: "SET_FAVORITE",
                payload: cart
            })
        },

        removeFromFavorite: (index) => {
            dispatch({
                type: "REMOVE_FROM_FAVORITE",
                payload: index
            })
        },

        setLoginStatus: (bool) => {
            dispatch({
                type: "SET_LOGIN_STATUS",
                payload: bool
            })
        },

        // setUsers: (user) => {
        //     console.log(user);
        //     dispatch({
        //         type: "SET_USERS",
        //         payload: user
        //     })
        // },
        // plusCounter: (value) => {
        //     dispatch({
        //         type: "PLUS_COUNTER",
        //         payload: value
        //     })
        // },










        setCategories: (formular) => {
            dispatch({
                type: "SET_CATEGORIES",
                payload: formular
            })
        },
        changeCategory: (event) => {
            dispatch({
                type: "CHANGE_CATEGORY",
                payload: event
            })
        },
        setLoginStatus: (bool) => {
            dispatch({
                type: "SET_LOGIN_STATUS",
                payload: bool
            })
        }
    }
}

export default mapDispatchToProps