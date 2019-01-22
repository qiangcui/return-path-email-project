import React from 'react';
import { ListItem, List } from "@material-ui/core";
import propTypes from "prop-types";

const EmailPanelItem = ({ email_item }) => {
    return (
        <List component="nav">
            {
                ['From', 'To', 'Subject', 'Date'].map((key, index) =>
                    <ListItem className="email_info" key={index}>
                        {key}: {email_item[key]}
                    </ListItem>
                )
            }
        </List>
    );
};

EmailPanelItem.propTypes = {
    submit: propTypes.object
};

export default EmailPanelItem;
