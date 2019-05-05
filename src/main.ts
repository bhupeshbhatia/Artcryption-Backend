import {app} from './app'

app.listen(app.get('port'), () => {
  console.log(
    `App is running on http://localhost:${app.get('port')} in ${app.get(
      'env'
    )} mode.`
  )
})

// Enable HMR
if (module.hot) {
  module.hot.accept()
}
