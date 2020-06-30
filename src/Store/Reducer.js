import userCredential from '../Data/valid-user.json';

const initialState = {
    userCredential,
    usersList: [],
    isLoggedIn: false,
    loginError: null
}

function Reducer( state= initialState, action ) {

    let usersList;
    switch(action.type) {
        case 'VALIDATE_LOGIN':
            let { userName, password } = action.payload;
            return userName.toLowerCase() === state.userCredential.username &&
                   password.toLowerCase() === state.userCredential.password ?
                   { ...state, isLoggedIn: true}
                   : { ...state, loginError: true }

        case 'SET_USER_DATA': 
            localStorage.usersList = JSON.stringify(action.payload);
            return {
                ...state, usersList: action.payload
            }

        case 'SEARCH_USER':
            usersList = JSON.parse(localStorage.usersList);
            let filteredUsers = usersList.filter(user => {
                let data = user.user.name;
                return data.first.includes(action.payload) || data.last.includes(action.payload);
            });
            return {
                ...state, usersList: filteredUsers
            }

        case 'ADD_USER':
            usersList = localStorage.usersList && JSON.parse(localStorage.usersList);
            usersList.unshift(action.payload);
            return {
                ...state, usersList
            }

        default: return state;
    }
}

export default Reducer;