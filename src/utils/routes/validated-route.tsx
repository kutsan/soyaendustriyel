import * as React from 'react'
import { ComponentType, ReactElement } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import NotFound from '@/routes/NotFound/NotFound'

/* eslint-disable @typescript-eslint/no-explicit-any */
type ValidatedRouteProps = (props: RouteComponentProps<any>) => boolean

/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line arrow-body-style
const ValidatedRoute = (validator: ValidatedRouteProps) => {
  return (ComposedComponent: ComponentType<any>): ComponentType<any> => {
    const ValidatedComponent = (props: RouteComponentProps): ReactElement => {
      if (!validator(props)) {
        return <NotFound />
      }

      return <ComposedComponent {...props} />
    }

    return ValidatedComponent
  }
}
/* eslint-enable react/jsx-props-no-spreading */
/* eslint-enable @typescript-eslint/no-explicit-any */

export default ValidatedRoute
