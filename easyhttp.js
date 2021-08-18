function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// make a HTTP GET request

easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null, self.http.responseText)
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}


// make a HTTP POST request



// make a HTTP PUT request



// make a HTTP DELETE request
