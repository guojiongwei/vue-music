export const baseUrl = 'http://39.107.82.180:3000'
export const myTime = {
  /**
   * 格式化时间戳(分:秒)
   * 61 -> 01:01
   */
  format(timestamp) {
    timestamp = Math.floor(timestamp)

    let minute = (Math.floor(timestamp / 60)).toString().padStart(2, '0')
    let second = (timestamp % 60).toString().padStart(2, '0')
    return `${minute}:${second}`
  }
}
