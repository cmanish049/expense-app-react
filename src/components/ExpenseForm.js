import React from 'react';
import DatePicker from 'react-date-picker';
import moment from 'moment';

const now = moment();
console.log(now.format("MMM Do YYYY"));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? new Date(props.expense.createdAt) : new Date(),
            calendarFocused: false,
            error: '',
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onNoteChange = (e) => {
        // use e.persist(); to remove note
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onDateChange = (createdAt) => {
        console.log(createdAt.getTime());
        if (createdAt)
            this.setState(() => ({ createdAt }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            // set error state 'please provide description and amount
            const error = 'Please provide description and amount';
            this.setState(() => ({ error }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.getTime()
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <DatePicker
                        onChange={this.onDateChange}
                        value={this.state.createdAt}
                        minDate={new Date()}
                    />
                    <textarea
                        placeholder="Add Note for your expense (optional)"
                        onChange={this.onNoteChange}
                    >
                    </textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}