// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React, { useEffect } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import './App.css'

import { ViewportProvider } from './context/ViewportContext.js'
import { AppProvider } from './context/AppContext.js'

import Home from './routes/Home/Home.jsx'
import Products from './routes/Products/Products.jsx'
import Product from './routes/Product/Product.jsx'
import Search from './routes/Search/Search.jsx'
import NotFound from './routes/NotFound/NotFound.jsx'

import LayoutDefault from './layouts/default.jsx'

import validatedRoute from './utils/routes/validated-route.jsx'
import validatorProducts from './utils/routes/validator-products.js'
import validatorProduct from './utils/routes/validator-product.js'
import validatorSearch from './utils/routes/validator-search.js'

type AppProps = {
    history?: any;
};

const App = ({ history }: AppProps) => {
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
          {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ exact: true; path: string; component: () =... Remove this comment to see the full error message */}
          <RouteWrapper exact path='/' component={Home} />
          <RouteWrapper
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ exact: true; path: string[]; component: { ... Remove this comment to see the full error message
            exact
            path={[
              '/products/:category/:subcategory/:lowermostcategory',
              '/products/:category/:subcategory',
              '/products/:category'
            ]}
            component={validatedRoute(validatorProducts)(Products)}
          />
          <RouteWrapper
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ exact: true; path: string; component: { (p... Remove this comment to see the full error message
            exact
            path='/product/:id'
            component={validatedRoute(validatorProduct)(Product)}
          />
          <RouteWrapper
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ exact: true; path: string; component: { (p... Remove this comment to see the full error message
            exact
            path='/search'
            component={validatedRoute(validatorSearch)(Search)}
          />

          <RouteWrapper component={NotFound} />
        </Switch>
      </ViewportProvider>
    </AppProvider>
  )
}

type RouteWrapperProps = {
    component: (...args: any[]) => any;
    layout?: (...args: any[]) => any;
};

const RouteWrapper = ({ component: Component, layout: Layout = LayoutDefault, ...rest }: RouteWrapperProps) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )}
  />
)

export default withRouter(App)
