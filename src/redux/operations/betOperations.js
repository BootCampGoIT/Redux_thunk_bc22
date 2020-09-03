import axios from "axios"
import betActions from "../actions/betActions"

const makeBetOperation = (bet) => (dispatch) => {
    axios.post("https://courseited.firebaseio.com/bet.json", bet).then(res => dispatch(betActions.makeNewBet({ ...bet, id: res.data.name })))
}

export default { makeBetOperation }