import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Segment, Divider } from 'semantic-ui-react'

class OutputControl extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    activeTab: PropTypes.number,
    successful: PropTypes.bool,
    results: PropTypes.object,
  }

  render() {
    const { successful } = this.props

    return (
      <Segment
        style={{
          margin: '0 1rem 10px',
          display: successful ? 'block' : 'none',
        }}
      >
        <div className={'flex-column'}>
          <Divider />
        </div>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  const { activeTab } = state.common
  const { successful, results } = state.archive
  return {
    activeTab,
    successful,
    results,
  }
}

export default connect(mapStateToProps)(OutputControl)
