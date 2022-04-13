import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

function User(props) {

    function enterForm(event) {
        props.setLoginForm((currentState) => {
            return {
                ...currentState,
                [event.target.name]: event.target.value
            }
        })
    }

    function logIn() {
        const user = props.users.find((value) => {
            return value.username === props.loginForm.username &&
                value.password === props.loginForm.password
        })
        if (user) {
            props.setLoginStatus(true)
        } else {
            props.setLoginStatus(false)
        }
    }

    function logOut() {
        props.setLoginStatus(false)
    }

    return props.loginStatus ?
        (<>
            <h2 id='loginHeader'>Welcome Mr/Mrs {props.loginForm.username}</h2>
            <h3 id='loginHeader' >Now you can safely complete your shopping.</h3>
            <button id='logButton' onClick={logOut}>LOGOUT</button>
            
        </>)
        :
        (<>
            <h3 id='loginHeader'>Please Login</h3>
            <form>
                <div>
                    <label id='login'>USERNAME:</label>
                    <input id='loginBox' type="text" name="username" value={props.loginForm.username} onChange={enterForm} required/>
                </div><br></br>
                <div>
                    <label id='login'> PASSWORD:</label>
                    <input id='loginBox' type="password" name="password" value={props.loginForm.password} onChange={enterForm} required/>
                </div><br></br>
                <div>
                    <button id='logButton' type="button" onClick={logIn}>LOGIN</button>
                </div>
            </form>
        </>)
}

export default connect(mapStateToProps, mapDispatchToProps)(User);