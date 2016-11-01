'use strict'

const html = require('../../lib/html')

function passphraseView (navigate) {
  const tree = html`<main>
    <h1>Create Passphrase</h1>
  </main>`

  return tree
}

module.exports = passphraseView
