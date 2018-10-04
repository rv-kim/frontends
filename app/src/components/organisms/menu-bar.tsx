import * as React from 'react'
// import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

import IconMenu from '../atoms/menu-icon'

export class MenuBar extends React.Component {
  render () {
    const { title } = this.props
    return (
      <AppBar position='static'>
        <Toolbar>
          <IconMenu style={{marginLeft: '-12px', marginRight: '20px'}}>
            <MenuIcon />
          </IconMenu>
          <Typography variant='title' color='inherit'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default MenuBar
// export default connect(state => state)(MenuBar)
