// zde napis funkci ktera se jmenuje showPageInfo
function showPageInfo() {
    let actualUrl = browser.getUrl();
    let actualTitle = browser.getTitle();
    console.log(`URL: ${actualUrl}`);
    console.log(`Title: ${actualTitle}`);
}

function showSetting() {
    let baseUrlIs = require("./wdio.conf")
    console.log(baseUrlIs)
    // specs // (umisteni testu)
    // browserName
    // browserVersion
    // platformName

}

// export te funkce, aby dalsi soubory mohly danou funkci videt a pouzit
module.exports = { showPageInfo }
module.exports = { showSetting }