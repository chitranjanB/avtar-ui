export const INITIALIZE_TRACKING_DATA = 'track/INITIALIZE_TRACKING_DATA'
export const LOAD_TRACKING_DATA = 'track/LOAD_TRACKING_DATA'

const initialState = { persons: 0, isLoading: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_TRACKING_DATA:
      return {
        ...state,
        isLoading: true,
      }
    case LOAD_TRACKING_DATA:
      return {
        ...state,
        persons: 100,
        isLoading: !state.isLoading,
      }
    default:
      return state
  }
}

export const loadAsync = () => {
  return (dispatch) => {
    dispatch({
      type: INITIALIZE_TRACKING_DATA,
    })

    return setTimeout(() => {
      dispatch({
        type: LOAD_TRACKING_DATA,
      })
    }, 3000)
  }
}
