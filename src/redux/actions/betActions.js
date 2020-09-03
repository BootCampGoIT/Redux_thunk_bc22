import { makeBet } from "../constants/betConstans"


const makeNewBet = (bet) => {
    return {
        type: makeBet,
        payload: bet
    }


}

export default { makeNewBet }