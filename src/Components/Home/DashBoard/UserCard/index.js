import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';


/**
* Store operations
 */

import { addUser } from '../../../../Store/Actions';

const mapDispatchToProps = {
	addUser
}

const UserCard = (props) => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        username : '',
        password: '',
        dob: new Date(),
        phone: ''
    })

    const changeHandler = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value});
    }

    const validateInput = () => {
        // if(Object.keys(userData).every(data => data.length> 0));
        props.addUser(userData);
        
    }
    let user = props.data && props.data.user;
    return (
        <div className= "columns">
            <div className= "column one-third">
                <div className= "card">
                    <div className= "card-content">
                        {
                            !props.editable && <div className= "media">
                                <div className= "media-left">
                                    <figure className= "image is-48x48">
                                        <img src= { user && user.picture.thumbnail } />
                                    </figure>
                                </div>
                            </div>
                        }
                        <div className= "media-content">
                            { !props.editable ?
                                <Fragment>
                                    <p className= "title is-6 is-uppercase font-color-primary has-text-weight-bold">{ user && user.name ? `${user.name.title.toUpperCase()} ${user.name.first} ${user.name.last}`: 'Unknown' }</p>
                                    <p className= "content has-text-weight-bold font-color-medium">Email : { user && user.email ? user.email : 'unknown'}</p>
                                    <p className= "content has-text-weight-bold font-color-medium">Username : { user && user.username ? user.username :'unknown' }</p>
                                    <p className= "content has-text-weight-bold font-color-medium">Phone : { user && user.phone ? user.phone: 'unknown' }</p>
                                </Fragment>
                                :<Fragment>
                                    Name: <input type= "text" name= "name" value= { userData.name } onChange = { (e) => changeHandler(e) } />
                                    Email: <input type= "email" name= "email" value= { userData.email } onChange = { (e) => changeHandler(e) } />
                                    User name: <input type= "text" name= "username" value= { userData.userName } onChange = { (e) => changeHandler(e) } />
                                    Password: <input type= "text" name= "password" value= { userData.password } onChange = { (e) => changeHandler(e) } />
                                    DOB: <input type= "date" name= "dob"  value= { userData.DOB }  onChange = { (e) => changeHandler(e) }/>
                                    Phone: <input type= "number" name= "phone" value= { userData.phone } onChange = { (e) => changeHandler(e) } />
                                    <button className = "add-user" onClick= { (props) => validateInput(props) }>Add User</button>
                                </Fragment>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(UserCard);