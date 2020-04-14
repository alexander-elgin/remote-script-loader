const loadScript = function (url) {
    return new Promise(function (resolve) { // eslint-disable-line prefer-arrow-callback
        const scriptTag = document.createElement('SCRIPT');
        scriptTag.setAttribute('src', url);
        scriptTag.setAttribute('async', '');
        scriptTag.setAttribute('defer', '');
        scriptTag.setAttribute('type', 'text/javascript');

        scriptTag.onload = resolve;
        document.body.appendChild(scriptTag);
    });
};

const loadScriptOnce = function (url, varName) {
    return window[varName] === undefined ? loadScript(url) : Promise.resolve(); // eslint-disable-line
};

module.exports = { loadScript: loadScript, loadScriptOnce: loadScriptOnce };
