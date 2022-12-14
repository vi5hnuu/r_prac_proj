import { useState, Fragment, useRef } from 'react'
import './UserInputForm.css'
import './ErrorModal'
import ErrorModal from './ErrorModal'
import Wrapper from './helper/Wrapper'

function UserInputForm(props) {
    const [error, setError] = useState()
    const [counter, setCounter] = useState(0)
    let usernameRef = useRef()
    let userageRef = useRef()

    function addUserHandler(event) {
        event.preventDefault()
        const enteredName = usernameRef.current.value
        const enteredAge = userageRef.current.value
        if (!enteredName.trim().length) {
            setError({ title: 'Invalid input', message: 'please enter a valid name and age.' })
            return
        } else if (+enteredAge <= 0) {
            setError({ title: 'Invalid age', message: 'please enter a age > 0.' })
            return
        }
        setCounter((oldCount) => oldCount + 1)
        const user = { id: counter, name: enteredName, age: Number.parseInt(enteredAge) }
        usernameRef.current.value = ''
        userageRef.current.value = ''
        props.onUserAdd(user)
    }
    function errorHandler() {
        setError(null)
    }
    // or use Wrapper component or wrap inside <> </>
    return <Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onOkayClick={errorHandler} />}
        <form className='input_form' onSubmit={addUserHandler}>
            <div className='input_control'>
                <label className='lblUsr'>Username</label>
                <input ref={usernameRef} className='usernameText' type='text' placeholder='Enter Username'></input>
            </div>
            <div className='input_control'>
                <label className='lblAge'>Age</label>
                <input ref={userageRef} className='ageText' type='number' placeholder='Enter age in years.'></input>
            </div>
            <div className='input_actions'>
                <button type='submit' className='btnAddUser'>Add User</button>
            </div>
        </form>
    </Fragment>

}

export default UserInputForm