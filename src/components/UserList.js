import './UserList.css'

function UserList(props) {
    return <div className='userList_container'>
        <div className='list_header'>
            <p>Users</p>
        </div>
        <ul className='user_list'>
            {props.items.length === 0 ?
                <li key='#' className='empty'>
                    No User
                </li> :
                props.items.map((user, index) => {
                    return <li key={user.id} className='user'>
                        <p className='userText'>{index + 1}. {user.name} ({user.age} yrs.)</p>
                    </li>
                })}

        </ul>
    </div>
}

export default UserList