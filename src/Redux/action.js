export const addUser = () => {
    return dispatch => {
        dispatch({
            type: 'ADD_USER',
            payload: { name: 'Test' }
        })
    }
}
