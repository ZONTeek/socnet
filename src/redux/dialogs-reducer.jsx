const ADD_MSG = 'ADD-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let stateInit = {
    messagesData: [
        { id: 1, message: "Привет", owner: 'left' },
        { id: 2, message: "Как дела", owner: 'left' },
        { id: 3, message: "Что делаешь?", owner: 'left' },
        { id: 4, message: "Ничего", owner: 'right' },
        { id: 5, message: 'А ты', owner: 'right' },
    ],
    dialogsData: [
        { id: 1, name: 'Gigaboy' },
        { id: 2, name: 'Platon' },
        { id: 3, name: 'Anton' },
    ],
    newMsgContent: '',
}

const dialogsReducer = (state = stateInit, action) => {

    switch (action.type) {
        case ADD_MSG:
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    message: state.newMsgContent,
                    owner: "right",
                    id: state.messagesData.length + 1
                }],
                newMsgContent: '',
            }
        case UPDATE_NEW_MSG_TEXT: return { ...state, newMsgContent: action.newText }
        default:
            return state;
    }
}
export const addMessage = () => ({ type: ADD_MSG });
export const updateNewMsgText = (text) =>
    ({ type: UPDATE_NEW_MSG_TEXT, newText: text });

export default dialogsReducer;
