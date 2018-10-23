import * as React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import Sample from '../components/atoms/sample'

import { Badge, Button, Card, Rate} from 'antd'

export class Index extends React.Component {
  render () {
    return (
      <div>
        <Link href="/test"><a>link to test</a></Link>
        <span>&nbsp;&nbsp;</span>
        <Link href="/demo"><a>link to demo</a></Link>
        <hr/>
        <Sample text="good, bye" color="green" />
        <hr />

        <div>
          <Badge count={5}>
            <a href="#" style={{width: '42px', height: '42px', borderRadius: '4px', background: '#eee', display: 'inline-block'}} />
          </Badge>
        </div>
        <div>
          <Badge count={0} showZero>
            <a href="#" style={{width: '42px', height: '42px', borderRadius: '4px', background: '#eee', display: 'inline-block'}} />
          </Badge>
        </div>

        <hr />

        <Card
          title="Card title"
          extra={<a>More</a>}
          style={{ width: '100%' }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>Card content</p>
        </Card>

        <hr />

        <Rate allowHalf />

        <hr />

        <Button type='primary'>Test</Button>

      </div>
    )
  }
}

export default connect(state => state)(Index)
