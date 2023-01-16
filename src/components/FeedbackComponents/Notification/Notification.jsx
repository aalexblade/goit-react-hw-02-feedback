import React from "react";
import PropTypes from "prop-types"
import {NotificationMessage} from "./NotificationMessage.styled"


export const Notification = ({ message }) => { 
    return <NotificationMessage>{ message }</NotificationMessage>
};

Notification.propTypes = {
    message: PropTypes.string,
};