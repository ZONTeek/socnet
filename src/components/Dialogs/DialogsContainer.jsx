import { addMessage, updateNewMsgText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withRedirect from "../Login/withRedirect";
import { compose } from "redux";



const mapStateToProps = (state) => ({ state: state.dialogsPage });

const DialogsContainer = compose(
    withRedirect, connect(mapStateToProps, { updateNewMsgText, addMessage })
)(Dialogs)

export default DialogsContainer;