'use strict'

const assert = require('assert')
const routes = require('routes')
const computed = require('@mmckegg/mutant/computed')
const struct = require('@mmckegg/mutant/struct')

// Mashup of History API and Router (maybe could decouple?)
module.exports = function () {
  const router = routes()

  const state = struct({
    history: [],
    cursor: -1
  })

  const previous = computed([state.history, state.cursor], function (history, cursor) {
    return history[cursor - 1]
  })
  const next = computed([state.history, state.cursor], function (history, cursor) {
    return history[cursor + 1]
  })
  const current = computed([state.history, state.cursor], function (history, cursor) {
    return history[cursor]
  })

  return {
    previous,
    next,
    current,
    add (route, handler) {
      assert.equal(typeof route, 'string', 'route must be string')
      assert.equal(typeof handler, 'function', 'handler must be function')
      router.addRoute(route, handler)
    },
    navigate (route) {
      assert.equal(typeof route, 'string', 'route must be string')

      const s = state()
      const match = router.match(route)

      if (match) {
        s.cursor++
        s.history.splice(s.cursor, Infinity, match.fn(match))
        state.set(s)
      }
    },
    back () {
      if (previous() != null) {
        const s = state()
        s.cursor--
        state.set(s)
      }
    },
    forward () {
      if (next() != null) {
        const s = state()
        s.cursor++
        state.set(s)
      }
    }
  }
}
