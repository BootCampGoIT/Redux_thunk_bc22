import { makeBet } from "../constants/betConstans"

const initialState = {
    firstTeamIndex: 0,
    secondTeamIndex: 0,
    draw: 0,
}

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case makeBet:
            return { ...state, ...action.payload }

        default:
            return state
    }
}