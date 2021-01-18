/**
 * Validator function intended to be used alongside `validatedRoute()` function
 * and react-router's <Route /> component.  Checks whether or not given `path` is
 * valid URL to go.
 *
 * @param {string} props.location.search - Query string with key of `query`.
 * @return {boolean} Return path validation state, whether true or false.
 * @example
 *     <Route component={validatedRoute(validatorSearch)(Search)} />
 * */
const validatorSearch = (props: any) => {
  // /search?query=SEARCH_QUERY
  const params = new URLSearchParams(props.location.search)

  return params.get('query')
}

export default validatorSearch
