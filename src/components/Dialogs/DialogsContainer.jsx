import {addMassageActionCreator, updateNewMsgTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addMassage = () => {
                        store.dispatch(addMassageActionCreator());
                    };
                    let onMsgChange = (action) => {
                        store.dispatch(updateNewMsgTextActionCreator(action));
                    };
                    return <Dialogs state={state.dialogsPage}
                                     addMassage={addMassage}
                                     updateMsgText={onMsgChange}/>
                }
            }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMassage: () => {
            dispatch(addMassageActionCreator());
        },
        updateMsgText: (action) => {
            dispatch(updateNewMsgTextActionCreator(action));
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;