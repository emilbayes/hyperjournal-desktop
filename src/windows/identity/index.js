'use strict'

const html = require('../../lib/html')
const router = require('../../lib/router')
const struct = require('@mmckegg/mutant/struct')
const value = require('@mmckegg/mutant/value')
const computed = require('@mmckegg/mutant/computed')
const when = require('@mmckegg/mutant/when')

const optionsView = require('./options-view')
const passphraseView = require('./passphrase')
const keyFileView = require('./key-file')

function app () {
  const navigation = router()

  function nav (url) {
    return _ => navigation.navigate(url)
  }

  navigation.add('/passphrase/new', _ => passphraseView(nav))
  navigation.add('/key-file/new', _ => keyFileView(nav))
  navigation.add('/', _ => optionsView(nav))

  navigation.navigate('/')

  const tree = html`
    <div>
      <button ev-click=${navigation.back}>Back</button>
      <button ev-click=${navigation.forward}>Forward</button>
      ${navigation.current}
    </div>
  `

  return tree
}

document.body.appendChild(app())
