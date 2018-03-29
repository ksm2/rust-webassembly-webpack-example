import('./js_hello_world').then(js => {
  const greeting = js.greet('dem schöne Welt')

  console.log(greeting)
  alert(greeting)
})
