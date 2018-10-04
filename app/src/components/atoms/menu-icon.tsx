import * as React from 'react'
// import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export class IconMenu extends React.Component {
  render () {
    return (
      <React.Fragment>
        <IconButton color='inherit' style={this.props.style}>
          {this.props.children}
        </IconButton>
        <Menu open={false} anchorOrigin={{vertical: 'top', horizontal: 'left'}} transformOrigin={{vertical: 'top', horizontal: 'left'}}>
          <MenuItem>TOP</MenuItem>
          <MenuItem>店舗イベント</MenuItem>
          <MenuItem>MUJI SUPPORT</MenuItem>
        </Menu>
      </React.Fragment>
    )
  }
}

export default IconMenu
