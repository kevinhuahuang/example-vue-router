export const getCountryChineseName = function (name) {
  let nameCh
  switch (name) {
    case 'kenya':
    case 'Kenya':
      nameCh = '肯尼亚'
      break
    case 'rwanda':
    case 'Rwanda':
      nameCh = '卢旺达'
      break
    default:
      nameCh = '未知'
      break
  }
  return nameCh
}
