chrome.runtime.onInstalled.addListener(function () {
  chrome.alarms.create("boredomAlarm", {
    periodInMinutes: 2
  });
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "boredomAlarm") {
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
  }
});
