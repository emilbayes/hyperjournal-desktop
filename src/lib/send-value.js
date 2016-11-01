'use strict'

module.exports = SendValue

function SendValue (fn, data, opts) {
  return {
    fn: fn,
    data: data,
    opts: opts,
    event: null,
    handleEvent: handleEvent
  }
}

function handleEvent (e) {
  e.stopPropagation()
  e.preventDefault()
  this.event = e
  this.fn(this.event.target.value)
}
