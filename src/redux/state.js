import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, post: 'huy1', likes: 5 },
                { id: 2, post: 'huy2', likes: 1 },
                { id: 3, post: "huy3", likes: 2 },
            ],
            newPostContent: "text content123"
        },
        dialogsPage: {
            messagesData: [
                { id: 1, message: 'Privet', owner: 'left' },
                { id: 2, message: 'Kak dela?', owner: 'left' },
                { id: 3, message: 'Chto delaew?', owner: 'left' },
                { id: 4, message: 'Nihuya', owner: 'right' },
                { id: 5, message: 'A ti?', owner: 'right' },
            ],
            dialogsData: [
                { id: 1, name: 'Gigaboy' },
                { id: 2, name: 'Platon' },
                { id: 3, name: 'Anton' },
            ],
            newMsgContent: '',
        },
        sidebar: [
            { id: 1, name: "Platon Boyko", PicPath: '1.jpg' },
            { id: 2, name: "Etot Debil", PicName: '2.jpg' },
            { id: 3, name: "Tot Samiy", PicName: '3.jpg' },
        ]
    },
    _callSubsriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubsriber = observer;
    },
    dispatch(action) {
        dialogsReducer(this._state.dialogsPage, action);
        profileReducer(this._state.profilePage, action);
        sidebarReducer(this._state.sidebar, action);
        this._callSubsriber(this._state);
    }
}

export { store };