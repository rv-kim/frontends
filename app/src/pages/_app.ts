import App, { Container } from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import initializeStore, { serializeState, deserializeState } from '../store'

class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return {pageProps}
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <React.Fragment>
        <Container>
          <Provider store={ store }>
            <Component { ...pageProps } />
          </Provider>
        </Container>

        <style jsx global>{`
          body { margin: 0; }
        `}</style>
      </React.Fragment>
    )
  }
}

export default withRedux(initializeStore, {
  // debug: process.env.NODE_ENV !== 'production',
  serializeState: serializeState,
  deserializeState: deserializeState,
})(MyApp)
