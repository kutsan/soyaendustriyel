// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error ts-migrate(1192) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import PropTypes from 'prop-types'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/routes/NotFound/NotFound.jsx... Remove this comment to see the full error message
import NotFound from '@/routes/NotFound/NotFound.jsx'

const ValidatedRoute = (validator: any) => function (ComposedComponent: any) {
    const ValidatedComponent = (props: any) => {
      if (!validator(props)) {
        return <NotFound {...props} />
      }

      return <ComposedComponent {...props} />
    }

    ValidatedComponent.propTypes = {
      match: PropTypes.object.isRequired
    }

    return ValidatedComponent
  }

export default ValidatedRoute
