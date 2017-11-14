const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = []

  function onKeyDownHandler(e) {
    const key = (e.detail || e.which)
    if(index.length<10){
      index.push(key)
    } else if(index.length === 10) {
      index.shift()
      index.push(key)
    }
    if(index === code){
      alert("Hurray!")
    }
  }  
}