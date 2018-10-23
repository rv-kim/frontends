import * as React from 'react'
import sagaMiddleware from '../saga'

export abstract class AbstractComponent extends React.Component {
  protected static async initializer(saga: string): void {
    const sm = sagaMiddleware.run(saga)
    await sm.done
  }
}
