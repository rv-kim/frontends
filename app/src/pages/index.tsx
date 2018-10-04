import * as React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import Sample from '../components/atoms/sample'

export class Index extends React.Component {
  render () {
    return (
      <div>
        <Link href="/test"><a>link to test</a></Link>
        <span>&nbsp;&nbsp;</span>
        <Link href="/demo"><a>link to demo</a></Link>
        <hr/>
        <Sample text="good, bye" color="green" />
      </div>
    )
  }
}

export default connect(state => state)(Index)
