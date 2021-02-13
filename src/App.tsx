import { useEffect, ReactElement } from 'react'
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom'

import './App.css'

import { ViewportProvider } from './context/ViewportContext'
import { AppProvider } from './context/AppContext'

import Home from './routes/Home/Home'
import Products from './routes/Products/Products'
import Product from './routes/Product/Product'
import Search from './routes/Search/Search'
import NotFound from './routes/NotFound/NotFound'

import MainLayout from './layouts/main'

import validatedRoute from './utils/routes/validated-route'
import validatorProducts from './utils/routes/validator-products'
import validatorProduct from './utils/routes/validator-product'
import validatorSearch from './utils/routes/validator-search'

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
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path={[
                '/products/:category/:subcategory/:lowermostcategory',
                '/products/:category/:subcategory',
                '/products/:category',
              ]}
              component={validatedRoute(validatorProducts)(Products)}
            />
            <Route
              exact
              path="/product/:id"
              component={validatedRoute(validatorProduct)(Product)}
            />
            <Route
              exact
              path="/search"
              component={validatedRoute(validatorSearch)(Search)}
            />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </ViewportProvider>
    </AppProvider>
  )
}

export default withRouter(App)
