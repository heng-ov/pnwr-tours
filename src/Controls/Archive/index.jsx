import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'
import { SettingsFooter } from 'components/SettingsFooter'

class ArchiveControl extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { loading } = this.props
    return (
      <React.Fragment>
        <div className="flex flex-column content-between">
          <div className="pa2 flex flex-row justify-between">
            {'Archive of previous routes: ' + (loading ? ' (Loading)' : '')}
          </div>
          <Divider fitted />
          <SettingsFooter />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const { loading } = state.common
  return { loading }
}

export default connect(mapStateToProps)(ArchiveControl)
