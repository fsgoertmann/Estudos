import { NUM_MIN_UPDT, NUM_MAX_UPDT } from './actionTypes'

export const updateMinNum = novoNumero => {
    return {
        type: NUM_MIN_UPDT,
        payload: novoNumero
    }
}

export const updateMaxNum = novoNumero => {
    return {
        type: NUM_MAX_UPDT,
        payload: novoNumero
    }
}