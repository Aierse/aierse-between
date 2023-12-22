/** between can be written value in between(start, end)
 *
 * @param {number | string} start
 * @param {number | string} end
 * @param {boolean | {start: boolean, end: boolean}} inclusive default: false
 * @returns {Proxy}
 */
function between(start, end, inclusive = false) {
  if (start > end) [start, end] = [end, start]

  return new Proxy(
    {
      start: start,
      end: end,
    },
    {
      has(target, prop) {
        if (inclusive || (inclusive.start && inclusive.end))
          return target.start <= prop && prop <= target.end
        else if (inclusive.start)
          return target.start <= prop && prop < target.end
        else if (inclusive.end) return target.start < prop && prop <= target.end

        return target.start < prop && prop < target.end
      },
    }
  )
}

module.exports = between
