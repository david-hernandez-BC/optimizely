var queryParameter = 'query_parameter_1';
var values = { 'abc': 'example 1', 'xyz': 'example 2' };

var urlParams = new URLSearchParams(window.location.search);
var query = urlParams.get(queryParameter);
if (query) {
    var param = values[query];
    if (param) {
        document.title = param;
    }
}