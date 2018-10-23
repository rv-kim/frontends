
module.exports = function() {
  return {
    [
      'next/babel',
      '@zeit/next-typescript/babel'
    ],
    [
      ['import', { 'libraryName': 'antd', 'style': true }]
    ]
  }
}