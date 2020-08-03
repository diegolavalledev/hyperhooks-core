;(() => {
  // return console.log('SKIP TEST 1')

  let Component, effectRan
  Component = () => {
    useEffect(() => {
      effectRan = true
    })
    return null
  }
  h(Component)
  console.assert(effectRan === true)
})()

;(() => {
  // return console.log('SKIP TEST 2')

  let Component, effectRan
  let cleanupRan

  Component = () => {
    useEffect(() => {
      // do nothing
      return () => {
        cleanupRan = true
      }
    })

    const [ foo, setFoo ] = useState(true)
    setTimeout(() => { setFoo(false) }, 0)
    return foo ? 'bar' : 'baz'
  }
  h(Component)
  setTimeout(() => { console.assert(cleanupRan === true) }, 0)
})()

;(() => {
  // return console.log('SKIP TEST 3')

  let Component, effectRan
  let cleanupRan = false

  Component = () => {
    useEffect(() => {
      // do nothing
      return () => {
        cleanupRan = true
      }
    }, [])

    const [ foo, setFoo ] = useState(true)
    setTimeout(() => { setFoo(false) }, 0)
    return foo ? 'bar' : 'baz'
  }
  h(Component)
  // hasnt been unmounted so it should NOT run cleanup!
  setTimeout(() => { console.assert(cleanupRan === false) }, 0)
})()

;(() => {
  // return console.log('SKIP TEST 4')

  let Component, effectRan
  let childRan, childCleanupRan

  let Child = () => {
    useEffect(() => {
      childRan = true
      return () => {
        childCleanupRan = true
      }
    }, [])
    return null
  }
  let Parent = () => {
    const [ includeChild, setIncludeChild ] = useState(true)
    setTimeout(() => { setIncludeChild(false) }, 0)
    return includeChild ? h(Child) : null
  }

  h(Parent)

  setTimeout(() => {
    console.assert(childRan === true)
    console.assert(childCleanupRan === true)
  }, 0)
})()

console.log('Effects tests done.')
