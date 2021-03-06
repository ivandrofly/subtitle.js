/**
 * Dependencies.
 */

const test = require('ava')
const { toMS } = require('..')

/**
 * Tests for `toMS` static method.
 */

test('should convert time to milliseconds', t => {
  const time1 = {
    srt: '00:02:22,542',
    ms: 120000 + 22000 + 542
  }

  const time2 = {
    srt: '01:51:58,219',
    ms: 3600000 + 3060000 + 58000 + 219
  }

  const time3 = {
    srt: '00:00:00,000',
    ms: 0
  }

  t.is(toMS(time1.srt), time1.ms)
  t.is(toMS(time2.srt), time2.ms)
  t.is(toMS(time3.srt), time3.ms)
})

test('invalid format should throw an error', t => {
  t.throws(function () {
    toMS('12,34:56,78')
  })
})
