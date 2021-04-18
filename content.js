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



function code(Usage_text, peakDataUsageLeft, isOffPeak = 0, totalPeak = 0) {
    const textArray = Usage_text.textContent.split(" ");
    console.log(textArray);

    const used = textArray[0].slice(0, -2);
    const total = textArray[3].slice(0, -2);
    const dataUsageLeft = (parseFloat(total) - parseFloat(used) - peakDataUsageLeft).toFixed(2);

    Usage_text.innerHTML = dataUsageLeft.toString() + "GB Free of " + total.toString() + "GB (edited)";

    //if its offpeak values
    if (isOffPeak) {
        //change the data left
        Usage_text.innerHTML = dataUsageLeft.toString() + "GB Free of " + (total - totalPeak).toFixed(2) + "GB (edited)";

        //change the graph percentage
        const offPeakUsedPercentage = (dataUsageLeft / (total - totalPeak)).toFixed(2) * 100
        document.getElementsByTagName("text")[1].innerHTML = offPeakUsedPercentage + "%";

        //change the circle graph
        const offPeakCircleGraph = document.getElementsByTagName("circle")[3];
        const newCalculateValue = 1100 - 1100 * offPeakUsedPercentage / 100;
        console.log("new circle graph stroke-dashoffset value " + newCalculateValue);
        offPeakCircleGraph.style = "stroke-dashoffset: " + newCalculateValue;
    }

    return [used, total, dataUsageLeft]
}
