import React from "react";
import PropTypes from "prop-types";
import {
    AllFeedbacks,
    SingleFeedback,
    Lable,
    Summary,
} from "./Statistics.styled";



export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
    return (
        <>
            <AllFeedbacks>
                <SingleFeedback>
                    <Lable>good</Lable>
                    <p>{good}</p>
                </SingleFeedback>
                <SingleFeedback>
                    <Lable>neutral</Lable>
                    <p>{neutral}</p>
                </SingleFeedback>
                <SingleFeedback>
                    <Lable>bad</Lable>
                    <p>{bad}</p>
                </SingleFeedback>
            </AllFeedbacks>

            <Summary>
                <Lable>Total:{total}</Lable>
                 <Lable>positivePercentage:{positivePercentage}</Lable>
            </Summary>
            
        </>
    );
};
  
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
}