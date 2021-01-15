import { addMessage, updateNewMsgText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



const mapStateToProps = (state) => ({ state: state.dialogsPage });

const DialogsContainer = connect(mapStateToProps, { updateNewMsgText, addMessage })(Dialogs);

export default DialogsContainer;