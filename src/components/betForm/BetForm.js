import React, { Component } from 'react';
import betOperations from '../../redux/operations/betOperations';
import { connect } from 'react-redux'


class BetForm extends Component {
    state = {
        firstTeamIndex: 0,
        secondTeamIndex: 0,
        draw: 0,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: Number(e.target.value) })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.makeBetOperation({ ...this.state })
        this.setState({
            firstTeamIndex: 0,
            secondTeamIndex: 0,
            draw: 0
        })


    }

    handleClick = (e) => {
        this.setState({ [e.target.name]: "" })
    }

    render() {
        const { firstTeamIndex, secondTeamIndex, draw } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Team1: <input type="number" name="firstTeamIndex" value={firstTeamIndex} onClick={this.handleClick} onChange={this.handleChange} /></label>
                <label>Team2: <input type="number" name="secondTeamIndex" value={secondTeamIndex} onClick={this.handleClick} onChange={this.handleChange} /></label>
                <label>Draw: <input type="number" name="draw" value={draw} onClick={this.handleClick} onChange={this.handleChange} /></label>
                <button type="submit">Make a bet</button>
            </form>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        makeBetOperation: (bet) => {
            dispatch(betOperations.makeBetOperation(bet))
        }
    }
}

export default connect(null, mapDispatchToProps)(BetForm);