import React, {Component} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EmailPanelItem from './EmailPanelItem';
import './EmailPanels.css';
import { Message } from "semantic-ui-react";

class EmailPanels extends Component {
    render() {
        return (
            <div className="email_display">
                {
                    this.props.isLoading
                        ? ( <div><i className="fa fa-spinner fa-spin">Loading...</i></div> )
                        : (this.props.email_data.map((value, index) => (
                                <ExpansionPanel key={index} className="email_panel">
                                    <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
                                        <Typography className="heading">From: {value['From']} | To: {value['To']}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <EmailPanelItem email_item={value}/>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )
                        ))
                }
                {
                    Object.keys(this.props.error).length !== 0 && (
                        <Message
                            error
                            header='Error message from server!!!'
                            list={[
                                this.props.error.status,
                                this.props.error.data,
                                this.props.error.header
                            ]}
                        >
                        </Message>
                    )
                }
            </div>
        );
    }
}

export default EmailPanels;