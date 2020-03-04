export const storeMovieList = (movie) => {
    return {
        type: 'STORE_LIST',
        payload: movie
    }
}

export const storePosterPop = () => {
    return {
        type: 'POP_POSTER'
    }
}

export const storePosterClose = () => {
    return {
        type: 'CLOSE_POSTER'
    }
}