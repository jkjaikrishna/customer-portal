import React from 'react';

/**
 * Internal Components
 */

import ProfileImage from './ProfileImage';
import MenuList from './MenuList';

const ProfileWidget = () => {
    return (
        <aside className= "menu">
            <ul className= "menu-list">
                <div className= "menu-list__profile media">
                    <ProfileImage />
                    <div className= "media-content">
                        <p className= "title is-5 font-color-white">Hassan Djirdeh</p>
                    </div>
                </div>
                <MenuList />
            </ul>
        </aside>
    )
}

export default ProfileWidget;