//https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElementToDisplay(selector, callback, checkFrequencyInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.getElementsByClassName(selector)[1] != null) {
            callback();
            return;
        }
        else {
            setTimeout(function () {
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}