"use strict";
module.exports = {
  ajax: function(url, method, data) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      request.responseType = 'text';
      request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            resolve(JSON.parse(request.responseText));
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
}