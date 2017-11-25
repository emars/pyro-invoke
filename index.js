/**
 * Invoke for calling cloud functions
 *
 * config requires:
 * baseUrl: The base url to call the cloud function
 * getUserToken: a method that returns a promise contianing a user token
 * ex:
 * getUserToken = () => firebase.auth().currentUser.getIdToken()
 */
const validateConfig = config => {
  if (!config.baseUrl)
    throw new Error(
      'pyro-invoke invalid config: expected string parameter "baseUrl" was missing'
    )
  if (!config.getUserToken)
    throw new Error(
      'pyro-invoke invalid config: expected () => Promise<String> "getUserToken" parameter was missing'
    )
}

const invoke = config => (fnName, args = {}) => {
  validateConfig(config)

  return config.getUserToken().then(token => {
    const url = `${config.baseUrl}/${fnName}`

    return window
      .fetch(url, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          Authorization: `Bearer: ${token}`
        },
        body: JSON.stringify(args)
      })
      .then(response => response.json())
  })
}

export default invoke
