import React from "react";
import PropTypes from "prop-types"
import { FeedbackBtn, BtnWrapper } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <BtnWrapper>
            {options.map(option => {
                return (
                    <FeedbackBtn
                        key={option}
                        type="button"
                        onClick={onLeaveFeedback}
                        value={option}
                    >
                        {option}
                    </FeedbackBtn>
                );
            })}
        </BtnWrapper>
    );
 };

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};