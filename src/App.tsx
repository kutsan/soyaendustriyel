import { useEffect, ReactElement, ComponentType } from 'react'
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom'

import './App.css'

import { ViewportProvider } from './context/ViewportContext'
import { AppProvider } from './context/AppContext'

import Home from './routes/Home/Home'
import Products from './routes/Products/Products'
import Product from './routes/Product/Product'
import Search from './routes/Search/Search'
import NotFound from './routes/NotFound/NotFound'

import LayoutDefault from './layouts/default'

import validatedRoute from './utils/routes/validated-route'
import validatorProducts from './utils/routes/validator-products'
import validatorProduct from './utils/routes/validator-product'
import validatorSearch from './utils/routes/validator-search'

type RouteWithLayoutProps = RouteProps & {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
  layout?: ComponentType
}

const RouteWithLayout = (props: RouteWithLayoutProps): ReactElement => {
  const {
    layout: Layout = LayoutDefault,
    component: Component,
    ...rest
  } = props

  // TODO: this can take a children instead
  // and then used with params can taken with useParams
  // via react-router-dom
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  )
  /* eslint-enable react/jsx-props-no-spreading */
}

type AppProps = RouteComponentProps

const App = ({ history }: AppProps): ReactElement => {
  useEffect(() => {
    // Scroll to top for every route navigation.
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })

    return () => {
      unlisten()
    }
  }, [history])

  return (
    <AppProvider>
      <ViewportProvider>
        <Switch>
          <RouteWithLayout exact path="/" component={Home} />
          <RouteWithLayout
            exact
            path={[
              '/products/:category/:subcategory/:lowermostcategory',
              '/products/:category/:subcategory',
              '/products/:category',
            ]}
            component={validatedRoute(validatorProducts)(Products)}
          />
          <RouteWithLayout
            exact
            path="/product/:id"
            component={validatedRoute(validatorProduct)(Product)}
          />
          <RouteWithLayout
            exact
            path="/search"
            component={validatedRoute(validatorSearch)(Search)}
          />
          <RouteWithLayout component={NotFound} />
        </Switch>
      </ViewportProvider>
    </AppProvider>
  )
}

export default withRouter(App)
