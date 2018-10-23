import App, { Container } from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import initializeStore, { serializeState, deserializeState } from '../store'

// import { IntlProvider, addLocaleData } from "react-intl"
// import ja from "react-intl/locale-data/ja"
// // import * as langJp from '../../languages/ja_JP.json'
// addLocaleData([...ja]);

// // const langJp = {
// //   "sample": "サンプル！",
// //   "event_search": {
// //     "title": "イベント検索",
// //     "parts": {
// //       "event_entry_button": "イベント登録",
// //       "search_button": "検索"
// //     }
// //   },
// // }
// const langJp = {
//   sample: {
//     id: 'sample',
//     defaultMessage: 'サンプル！',
//   }
// }


class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {

    // TODO: Accept-Languageより、デフォルトの言語を取得
    let language = 'ja'
    if(ctx.isServer) {
      // console.log(ctx.req.headers)
    }

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return {pageProps}
  }

  render () {
    const { Component, pageProps, store } = this.props

    return (
      <React.Fragment>
        <Container>
          <Provider store={ store }>
          {/* <IntlProvider locale="ja" message={langJp}> */}
            <Component { ...pageProps } />
          {/* </IntlProvider> */}
          </Provider>
        </Container>
      </React.Fragment>
    )
  }
}

export default withRedux(initializeStore, {
  // debug: process.env.NODE_ENV !== 'production',
  serializeState: serializeState,
  deserializeState: deserializeState,
})(MyApp)
