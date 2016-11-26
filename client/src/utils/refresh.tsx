/**
 * 下拉刷新
 */

/**
 * @param selector 选择元素
 * @param way: ===> x 表示水平方向的操作, y 表示垂直方向的操作
 */
export const refresh = (selector: string, way: string, callback?) => {
  console.log('refresh')
  let _start = 0,
    _end = 0,
    _flag = true,
    _content = document.querySelector(selector)
  _content.addEventListener('touchstart', touchStart, false)
  _content.addEventListener('touchmove', touchMove, false)
  _content.addEventListener('touchend', touchEnd, false)

  function touchStart(event) {
    //var touch = event.touches[0]; //这种获取也可以，但已不推荐使用

    if (!_flag) {
      return false
    }

    let touch = event.targetTouches[0]
    if ('x' === way) {
      _start = touch.pageX
    } else {
      _start = touch.pageY
    }
  }

  function touchMove(event) {
    event.preventDefault()

    if (!_flag) {
      return false
    }

    let touch = event.targetTouches[0]
    if ('x' === way) {
      _end = (_start - touch.pageX)
    } else {
      _end = (_start - touch.pageY)

      // 下滑才执行操作
      if (_end < 0) {
        // 执行第一步
        console.log('执行第一步')
      }
    }
  }

  function touchEnd(event) {
    if (_flag) {
      _flag = false
    } else {
      return false
    }

    if (_end > 0) {
      console.log('左滑或上滑 ' + _end)
      _flag = true
    } else {
      console.log('右滑或下滑 ' + _end)
      // 执行第二步
      console.log('执行第二步')

      // 刷新成功则, 进入第三部
      setTimeout(() => {
        console.log('我是第三步')
        _flag = true
      }, 2500)
    }
  }
}