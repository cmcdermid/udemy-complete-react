import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should get total for zero expenses', () => {
    const emptyExpenses = [];
    const total = getExpensesTotal(emptyExpenses);
    expect(total).toEqual(0);
});

test('should get total for one expense', () => {

    const oneExpense = [expenses[0]];
    const total = getExpensesTotal(oneExpense);
    expect(total).toEqual(195);
});

test('should get total for all expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toEqual(114195);
});