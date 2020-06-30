import React from 'react';

/**
 * Internal Components
 */


import HeaderSection from './HeaderSection';
import UserCard from './UserCard';

const DashBoard = ({ usersList, match }) => {
    return (
        <div className= "dashboard">
            <div className= "dashboard__content">
                <HeaderSection />
                {console.log(usersList, 'usersList')}
                {match.url === '/user/create' ? 
                    <div className= "row">
                        <UserCard editable= { true } />     
                    </div>
                    :<div className= "row">
                        {usersList && usersList.map(user => {
                            return <UserCard key= {user.registered} data= {user} editable= { false } />
                        })}      
                    </div>
                }
            </div>
        </div>
    )
}

export default DashBoard;