chrome.runtime.onInstalled.addListener(() => {
  console.log('Fontastic Chaos extension installed.');
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    const randomSize = Math.floor(Math.random() * 50) + 'px';
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          el.style.fontSize = randomSize;
        });
      }
    });
  }
});
