import * as React from 'react';

export class Sample extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Hello World.</h1>
        <h2>test...</h2>
        <h3>{ this.props.text }</h3>

        <style jsx>{`
          h1 {color: black}
          h2 {color: blue}
          h3 {color: ${this.props.color}}
        `}</style>
      </React.Fragment>
    )
  }
}

export default Sample
