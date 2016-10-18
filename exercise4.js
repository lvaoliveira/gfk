const promises = [];
const results = [];
const urls = [
  'https://cdn.gfkdaphne.com/tests/async.php?a=1',
  'https://cdn.gfkdaphne.com/tests/async.php?a=2'
];

function ajax(url, method, data) {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    request.responseType = 'text';
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request);
        } else {
          reject(Error(request.statusText));
        }
      }
    };
    request.onerror = function() {
      reject(Error("Network Error"));
    };
    request.open(method, url, true);
    request.send(data);
  });
}

for (let i = 0; i < urls.length; i++) {
  promises.push(ajax(urls[i], 'GET').then(function(result) {
    const idx = urls.indexOf(result.responseURL);
    results[idx] = result.responseText;
  }));
}
Promise.all(promises)
  .then(function() {
    document.write(results.join(" "));
  })
  .catch(function(e) {
    console.log(e);
  });