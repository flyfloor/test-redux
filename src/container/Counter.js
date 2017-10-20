import React from 'react';
import { connect } from 'react-redux';
import { DECREASE_COUNT, INCREASE_COUNT } from '../common/contentType';

const increase = () => ({ type: INCREASE_COUNT })
const decrease = () => ({ type: DECREASE_COUNT })

const Counter = ({ count, onIncrease, onDecrease }) => (
    <div>
        <span>Clicked: {count} times</span>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
    </div>
)

const CounterContainer = props => {
    return (
        <Counter 
            {...props} 
            onIncrease={props.increase}
            onDecrease={props.decrease}
        />
    )
}

const mapStateToProps = state => {
    return {
        count: state.counterState.count
    }
}

const mapDispatchToProps = {
    increase,
    decrease,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer)
