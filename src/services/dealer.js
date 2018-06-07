export const getDealers = async () => {
  try {
    let response = await get('/static/dealers.json')
    return JSON.parse(response)
  } catch (err) {
    console.log(err)
  }
}

const get = (path) => new Promise((resolve, reject) => {
  var httpRequest

  httpRequest = new XMLHttpRequest()
  if (!httpRequest) {
    return reject(new Error('Cannot create an XMLHTTP instance.'))
  }

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        resolve(httpRequest.responseText)
      } else {
        reject(new Error('There was a problem with the request.'))
      }
    }
  }
  httpRequest.open('GET', path)
  httpRequest.send()
})
