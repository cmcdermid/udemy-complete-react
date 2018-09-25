import React from 'react';
import { connect } from 'react-redux';
import numeral from "numeral";
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>Viewing 0 expenses</p>
            ) : (
                <p>Viewing {props.expenses.length} expense totalling {numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')} </p>
            )
        }
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);