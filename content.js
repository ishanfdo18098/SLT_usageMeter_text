console.log("SLT usage meter change data usage extension LOADED");

waitForElementToDisplay("sc-dnqmqq jZsdgY", mainCode, 400)

function mainCode() {
    //change the data usages
    const getEleClassNameArray = document.getElementsByClassName("sc-dnqmqq jZsdgY");

    //change Peak
    const peakUsage_text = getEleClassNameArray[0];
    const peakUsageArray = replaceDataUsageTexts(peakUsage_text, 0);

    console.log("main: peakUsageArray");
    console.log(peakUsageArray);

    //change off peak
    const totalUsage_text = getEleClassNameArray[1];
    const offPeakUsageArray = replaceDataUsageTexts(totalUsage_text, peakUsageArray[2], 1, peakUsageArray[1]);
    console.log("main: offPeakUsageArray");
    console.log(offPeakUsageArray);

    //change the titles
    const standardText = document.getElementsByClassName("sc-dnqmqq hZAKPK");
    standardText[0].innerHTML = "Peak Data Usage";
    standardText[1].innerHTML = "Off Peak Data Usage";

    //print the predicted usage per day (peak)
    const peakDataPerDay = getPredictedUsagePerDay(peakUsageArray[2]);
    const validTillTextPeak = document.getElementsByTagName("em")[7];
    validTillTextPeak.innerHTML = peakDataPerDay + "GB should be used per day (edited)";

    // //print the predicted usage per day (offpeak)
    // const offPeakDataPerDay = getPredictedUsagePerDay(offPeakUsageArray[2]);
    // const validTillTextOffPeak = document.getElementsByTagName("em")[8];
    // validTillTextOffPeak.innerHTML = offPeakDataPerDay + "GB should be used per day (edited)";
}