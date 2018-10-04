import * as React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import axios from 'axios'

export class Test extends React.Component {
  // static async getInitialProps ({ store }) {
  //   const res = await axios.get('http://demo2269115.mockable.io/test')
  //   return {text: res.data.msg}
  // }

  render () {
    // const { text } = this.props
    const text = ".."
    return (
      <div>
        <Link href="/index"><a>link to top {text}</a></Link>
        <hr/>
      </div>
    )
  }
}

export default connect()(Test)
