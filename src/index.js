const loadScript = url => new Promise((resolve) => {
    const scriptTag = document.createElement('SCRIPT');
    scriptTag.setAttribute('src', url);
    scriptTag.setAttribute('async', '');
    scriptTag.setAttribute('defer', '');
    scriptTag.setAttribute('type', 'text/javascript');

    scriptTag.onload = resolve;
    document.body.appendChild(scriptTag);
});
// eslint-disable-next-line
const loadScriptOnce = (url, varName) => window[varName] === undefined ? loadScript(url) : Promise.resolve();

module.exports = { loadScript, loadScriptOnce };
