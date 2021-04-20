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