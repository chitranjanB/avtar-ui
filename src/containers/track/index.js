import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadAsync } from '../../modules/track'

const Track = (props) => (
  <div>
    <h1>Track</h1>
    {props.persons > 0 ? <p>Tracked for Users: {props.persons}</p> : null}

    <p>
      <button onClick={props.loadAsync} disabled={props.isLoading}>
        Start Tracking
      </button>
    </p>
  </div>
)

const mapStateToProps = ({ track }) => ({
  persons: track.persons,
  isLoading: track.isLoading,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadAsync,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Track)
