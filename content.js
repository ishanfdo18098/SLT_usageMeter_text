console.log("SLT usage meter change data usage extension LOADED");

setTimeout(() => {
    const getEleClassNameArray = document.getElementsByClassName("sc-dnqmqq jZsdgY");

    const standardUsage_text = getEleClassNameArray[0];
    const freeUsage = code(standardUsage_text, 0);

    const totalUsage_text = getEleClassNameArray[1];
    code(totalUsage_text, freeUsage);
}, 3000);



function code(standardUsage_text, subtractThisPartToo) {
    const textArray = standardUsage_text.textContent.split(" ");
    console.log(textArray);
    const used = textArray[0].slice(0, -2);
    const total = textArray[3].slice(0, -2);
    const dataUsageLeft = (parseFloat(total) - parseFloat(used) - subtractThisPartToo).toFixed(2);
    standardUsage_text.innerHTML = dataUsageLeft.toString() + "GB Free of " + total.toString() + "GB (edited)";
    return dataUsageLeft
}
