import React from 'react';

/**
 * Internal Components
 */

 import MenuItem from './MenuItem';

const MenuList = () => {
    return (
        <div className= "menu-list__main is-uppercase has-text-left">
            <MenuItem icon= "cubes" title= "Create User" link= "/user/create" />
            <MenuItem icon= "user" title= "Members" link= "/home" />
            <MenuItem icon= "cog" title= "Settings" link= "#" />
        </div>
    )
}

export default MenuList;