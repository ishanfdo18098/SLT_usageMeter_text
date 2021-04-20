console.log("SLT usage meter change data usage extension LOADED");


setTimeout(() => {
    //change the data usages
    const getEleClassNameArray = document.getElementsByClassName("sc-dnqmqq jZsdgY");

    //change Peak
    const peakUsage_text = getEleClassNameArray[0];
    const peakUsageArray = replaceDataUsageTexts(peakUsage_text, 0);

    console.log("main: peakUsageArray");
    console.log(peakUsageArray);

    //change off peak
    const totalUsage_text = getEleClassNameArray[1];
    replaceDataUsageTexts(totalUsage_text, peakUsageArray[2], 1, peakUsageArray[1]);

    //change the titles
    const standardText = document.getElementsByClassName("sc-dnqmqq hZAKPK");
    standardText[0].innerHTML = "Peak Data Usage";
    standardText[1].innerHTML = "Off Peak Data Usage";

    //print the predicted usage per day
    const dataPerDay = getPredictedUsagePerDay(peakUsageArray[2]);
    const validTillText = document.getElementsByTagName("em")[7];
    validTillText.innerHTML = dataPerDay + "GB should be used per day (edited)";

}, 1500);



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

function getPredictedUsagePerDay(dataLeft) {
    console.log("getPredictedUsagePerDay: peak data usage left " + dataLeft);

    //https://www.w3resource.com/javascript-exercises/javascript-date-exercise-9.php
    var lastday = function (y, m) {
        return new Date(y, m + 1, 0).getDate();
    }

    let dateObject = new Date();
    let day = dateObject.getDate();
    console.log("getPredictedUsagePerDay: todays date " + day);

    let lastDayOfThisMonth = lastday(dateObject.getFullYear(), dateObject.getMonth());
    console.log("getPredictedUsagePerDay: last date of this month " + lastDayOfThisMonth);

    const averageUsagePerDayLeft = ((dataLeft) / (lastDayOfThisMonth - day)).toFixed(2);
    console.log("getPredictedUsagePerDay: data usage left per day " + averageUsagePerDayLeft);

    return averageUsagePerDayLeft;
}
