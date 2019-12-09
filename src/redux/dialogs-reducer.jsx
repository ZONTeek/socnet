const ADD_MSG = 'ADD-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

let stateInit = {
    massagesData: [
        {id: 1, massage: 'Privet', owner: 'left'},
        {id: 2, massage: 'Kak dela?', owner: 'left'},
        {id: 3, massage: 'Chto delaew?', owner: 'left'},
        {id: 4, massage: 'Nihuya', owner: 'right'},
        {id: 5, massage: 'A ti?', owner: 'right'},
    ],
    dialogsData: [
        {id: 1, name: 'Gigaboy'},
        {id: 2, name: 'Platon'},
        {id: 3, name: 'Anton'},
    ],
    newMsgContent: '',
}

const dialogsReducer = (state = stateInit, action) => {

    let stateCopy = {
        ...state,
        massagesData: [...state.massagesData]
    }

    switch (action.type) {
        case ADD_MSG:
            let newMsg = {
                massage: state.newMsgContent,
                owner: "right",
            };
            stateCopy.massagesData.push(newMsg);
            stateCopy.newMsgContent = '';
            return stateCopy;
        case UPDATE_NEW_MSG_TEXT:
            stateCopy.newMsgContent = action.newText;
            return stateCopy;
        default:
            return state;
    }
}
export const addMassageActionCreator = () => ({type: ADD_MSG});
export const updateNewMsgTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MSG_TEXT, newText: text});

export default dialogsReducer;