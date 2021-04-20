function replaceDataUsageTexts(Usage_text, peakDataUsageLeft, isOffPeak = 0, totalPeak = 0) {
    const textArray = Usage_text.textContent.split(" ");

    console.log("replaceDataUsageTexts: textArray");
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
        document.getElementsByTagName("text")[1].innerHTML = offPeakUsedPercentage.toFixed(0) + "%";

        //change the circle graph
        const offPeakCircleGraph = document.getElementsByTagName("circle")[3];
        const newCalculateValue = 1100 - 1100 * offPeakUsedPercentage / 100;

        console.log("new circle graph stroke-dashoffset value " + newCalculateValue)

        offPeakCircleGraph.style = "stroke-dashoffset: " + newCalculateValue;
    }

    return [used, total, dataUsageLeft]
}