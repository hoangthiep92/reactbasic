const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Hoi' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>> run into delete user: ',
                action);

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)

            return {
                //ghi de users moi
                ...state, users
            }
            break;
        case 'CREATE_USER':
            console.log('>>> run into create user: ',
                action);

            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `ramdom - ${id}` }

            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }

}

export default rootReducer;