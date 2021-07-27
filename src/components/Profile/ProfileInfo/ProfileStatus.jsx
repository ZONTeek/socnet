import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    isMyPage: this.props.isMyPage,
    status: "Что нового?",
  };
  componentDidMount() {
    if (this.props.status.trim()!=="") this.setState({ status: this.props.status });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  updateStatus = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  render() {
    if (!this.props.isMyPage) return <span>{this.props.status}</span>;
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onClick={(e) => this.setState({ editMode: true })}>
              {this.state.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              value={this.state.status}
              onChange={(e) => this.setState({ status: e.currentTarget.value })}
            />
            <button onClick={() => this.updateStatus()}>Изменить статус</button>
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
