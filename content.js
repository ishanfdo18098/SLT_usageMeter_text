console.log("SLT usage meter change data usage extension LOADED");

setTimeout(() => {
    //change the data usages
    const getEleClassNameArray = document.getElementsByClassName("sc-dnqmqq jZsdgY");

    //change Peak
    const peakUsage_text = getEleClassNameArray[0];
    const peakUsageArray = code(peakUsage_text, 0);

    //change off peak
    const totalUsage_text = getEleClassNameArray[1];
    code(totalUsage_text, peakUsageArray[2], 1, peakUsageArray[1]);

    //change the titles
    const standardText = document.getElementsByClassName("sc-dnqmqq hZAKPK");
    standardText[0].innerHTML = "Peak Data Usage";
    standardText[1].innerHTML = "Off Peak Data Usage";


}, 3000);



function code(Usage_text, subtractThisPartToo, isOffPeak = 0, totalPeak = 0) {
    const textArray = Usage_text.textContent.split(" ");
    console.log(textArray);
    const used = textArray[0].slice(0, -2);
    const total = textArray[3].slice(0, -2);
    const dataUsageLeft = (parseFloat(total) - parseFloat(used) - subtractThisPartToo).toFixed(2);
    Usage_text.innerHTML = dataUsageLeft.toString() + "GB Free of " + total.toString() + "GB (edited)";
    //if its offpeak values
    if (isOffPeak) {
        Usage_text.innerHTML = dataUsageLeft.toString() + "GB Free of " + (total - totalPeak).toFixed(2) + "GB (edited)";

        //change the graph percentage
        document.getElementsByTagName("text")[1].innerHTML = (dataUsageLeft / (total - totalPeak)).toFixed(2) * 100 + "%";

        //TODO: change the circle graph
    }

    return [used, total, dataUsageLeft]
}
