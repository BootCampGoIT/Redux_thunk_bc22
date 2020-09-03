import React from 'react';
import { connect } from 'react-redux'



const BetResult = ({ isBetActive = false, result = false }) => {
    console.log('result', result)
    return (
        <div>
            {isBetActive
                ? <h2>Result:<span>{result ? "WINNER" : "LOOSER"}</span></h2>
                :
                <div>
                    <h2>No result!</h2>
                    <button type="button">Check result</button>
                </div>}
        </div>
    );
}

const mapStateToProps = (state) => {
    const keys = Object.keys(state)
    const isBetActive = keys.some(key => state[key] !== 0);

    const result = () => {
        const winnerBet = Math.random();
        console.log('winnerBet', winnerBet);
        if (winnerBet <= 0.4 && state[keys[0]]) {
            return true
        }
        if (winnerBet <= 0.6 && state[keys[1]]) {
            return true
        }
        if (winnerBet <= 1 && state[keys[2]]) {
           
            return true
        }
        return false
    
    }

    return {
        // bet: state,
        isBetActive,
        result: result()
    }
}

export default connect(mapStateToProps)(BetResult);