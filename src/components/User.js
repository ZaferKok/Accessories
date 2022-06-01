import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


function User(props) {
    
    // const [message, setMessage] = useState("");

    const navigate = useNavigate()

    // function errorMessage() {
    //     setMessage(() => {
    //         return "Invalid username or password!"
    //     })
    // }

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
            return  value.username === props.loginForm.username &&
                    value.password === props.loginForm.password
        })
        if (user) {
            props.setMessage("")
            props.setLoginStatus(true)
            Swal.fire({
                title: 'Please enter your data below to complete ORDER!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })

        } else {
            props.setMessage("Invalid username or password!")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            props.setLoginStatus(false)
        }
    }

    function checkAccount() {
        if (props.loginForm.credit && props.loginForm.name && props.loginForm.address && props.loginForm.telefon) {
            navigate("/Accessories/cart")
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
            <div id='loginMenu'>
                <form onSubmit={(event) => event.preventDefault()}> {/* Otherwise error message not working  or you can make login button type BUTTON */}

                    <div>
                        <label id='login'>USERNAME:</label>
                        <input id='loginBox' type="text" name="username" value={props.loginForm.username} onChange={enterForm} required />
                    </div><br></br>
                    <div>
                        <label id='login'> PASSWORD:</label>
                        <input id='loginBox' type="password" name="password" value={props.loginForm.password} onChange={enterForm} required />
                    </div><br></br>
                    <div>
                        {/* {
                        props.loginStatus 
                        ?
                        <div></div>
                        :
                        <div>{message}</div>
                    } */}
                        <h4 id='errorMessage'>{props.message}</h4>
                        
                        <br>
                        </br>
                        <button id='logButton' type="submit" onClick={logIn}>LOGIN</button>
                    </div>

                </form>
            </div>
        </>)
}

export default connect(mapStateToProps, mapDispatchToProps)(User);