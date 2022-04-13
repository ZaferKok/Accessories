import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom'

function User(props) {

    const [message, setMessage] = useState("");

    const navigate = useNavigate()

    function errorMessage() {
        setMessage(() => {
            return "Invalid username or password!"
        })
    }

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
            // props.setLoginStatus(false)
            // props.setLoginForm({})
            errorMessage()
        }
    }

    function checkAccount() {
        if (props.loginForm.credit && props.loginForm.name && props.loginForm.address && props.loginForm.telefon) {
            navigate("/cart")
        }
    }

    function logOut() {
        props.setLoginStatus(false)
    }

    return props.loginStatus ?
        (<>
            <h2 id='loginHeader'>Welcome Mr/Mrs {props.loginForm.username}</h2>
            <h3 id='loginHeader' >After you enter the required data below, you can safely complete your ORDER.</h3>

            <div id='clientInfo1' className='row'>
                <div className='col'>
                    <div><label>Credit Card Number:</label></div>
                    <input type="text" class="form-control" name="credit" value={props.loginForm.credit} onChange={enterForm} required></input>
                </div>
                <div className='col'>
                    <div><label>Firstname and Lastname:</label></div>
                    <input type="text" class="form-control" name="name" value={props.loginForm.name} onChange={enterForm} required></input>
                </div>
            </div>
            <div id='clientInfo2' className='row'>
                <div className='col'>
                    <div><label>Address:</label></div>
                    <input type="text" class="form-control" name="address" value={props.loginForm.address} onChange={enterForm} required></input>
                </div>
                <div className='col'>
                    <div><label>Phone number:</label></div>
                    <input type="text" class="form-control" name="telefon" value={props.loginForm.telefon} onChange={enterForm} required></input>
                </div>
            </div>
            <button id='saveButton' type="submit" onClick={checkAccount}>SAVE</button>
            <button id='logButton' onClick={logOut}>LOGOUT</button>
        </>)
        :
        (<>
            <h3 id='loginHeader'>Please Login</h3>
            <form>
                <div>
                    <label id='login'>USERNAME:</label>
                    <input id='loginBox' type="text" name="username" value={props.loginForm.username} onChange={enterForm} required />
                </div><br></br>
                <div>
                    <label id='login'> PASSWORD:</label>
                    <input id='loginBox' type="password" name="password" value={props.loginForm.password} onChange={enterForm} required />
                </div><br></br>
                <div>
                    {
                        props.loginStatus 
                        ?
                        <div></div>
                        :
                        <div>{message}</div>
                    }
                    <br>
                    </br>
                    <button id='logButton' type="submit" onClick={logIn}>LOGIN</button>
                </div>
            </form>
        </>)
}

export default connect(mapStateToProps, mapDispatchToProps)(User);