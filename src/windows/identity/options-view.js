'use strict'

const html = require('../../lib/html')

function optionsView (navigate) {
  const tree = html`<main>
    <h1>Create new identity</h1>
    <p></p>
    <h2></h2>
    <section>
      <h3></h3>
      <p></p>
      <button ev-click=${navigate('/passphrase/new')}>Create passphrase</button>
    </section>
    <section>
      <h3></h3>
      <p></p>
      <button ev-click=${navigate('/key-file/new')}>Create key file</button>
    </section>
  </main>`

  return tree
}

module.exports = optionsView
