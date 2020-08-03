;(() => {
  'Just null', h(() => null)
  'Empty string', h(() => '')
  'Empty array', h(() => [])
  'Array with null inside', h(() => [null])
  'Array with empty string inside', h(() => [''])
  'Array with null and empty string inside', h(() => [null, ''])
  'Single inner component (foo)', h(() => h(() => 'foo'))
  'Multiple inner components (foo, bar)', h(() => [h(() => 'foo'), h(() => 'bar')])
})()

console.log('Create element (h function) tests done.')
