

function analyzeNode(el) {
    //if(!isVisible(el)) return;
    if (el.dataset.safebrowseChecked) return;

    const text = el.innerText;
    if (text && text.length > 5) {
      el.dataset.safebrowseChecked = "true";
      console.log(text);
    }
}


let observer = new MutationObserver(mutations => {
    for(const mutation of mutations) {
        for(const m of mutation.addedNodes) {
            if(m.nodeType == Node.ELEMENT_NODE) {
                analyzeNode(m);
            }
        }
    }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});