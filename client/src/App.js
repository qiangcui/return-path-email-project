import React, { Component } from 'react';
import FileUpload from './components/FileUpload';
import EmailPanels from './components/EmailPanels';
import { connect } from "react-redux";
import { getEmailDataFromServer, clearEmailData } from "./redux/actions/emailDataAction";
import { Container, Divider, Button } from 'semantic-ui-react';

class App extends Component {

  handleUpload = (files) => {
      this.props.getEmailDataFromServer(files);
  };

  clearEmailData = () => {
      this.props.clearEmailData();
  };

  render() {
    return (
      <Container style={{ marginTop: '50px' }}>
          <FileUpload handleUpload={this.handleUpload} />
          <Divider />
          <Button primary onClick={this.clearEmailData} disabled={this.props.email_data.length === 0}>Clear All Emails</Button>
          <EmailPanels email_data={this.props.email_data} isLoading={this.props.isLoading} error={this.props.error} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  email_data: state.email_data.email_data,
  isLoading: state.email_data.isLoading,
  error: state.email_data.error
});

const mapActionsToProps = {
  getEmailDataFromServer: getEmailDataFromServer,
  clearEmailData: clearEmailData
};

export default connect(
    mapStateToProps, mapActionsToProps
)(App);
