(function () {
    'use strict';

    var CONTAINER_ID = 'plohm12-script-injector-container';
    var FILE_INPUT_ID = 'plohm12-script-injector-file';

    function injectScript() {
        var fileInput = document.getElementById(FILE_INPUT_ID);
        if (!fileInput || !fileInput.files || !fileInput.files.length) {
            return;
        }
        var file = fileInput.files[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = URL.createObjectURL(file);
        document.body.appendChild(script);
        close();
    }

    function close() {
        var container = document.getElementById(CONTAINER_ID);
        if (container) {
            container.remove();
        }
    }

    var container = document.createElement('div');
    container.id = CONTAINER_ID;
    container.style = [
        'position:fixed',
        'top:0',
        'left:0',
        'background-color:#ddd',
        'z-index:999999999'
    ].join(';');
    var input = document.createElement('input');
    input.type = 'file';
    input.id = FILE_INPUT_ID;
    container.appendChild(input);
    var injectButton = document.createElement('button');
    injectButton.addEventListener('click', injectScript);
    injectButton.appendChild(document.createTextNode('inject'));
    container.appendChild(injectButton);
    var closeButton = document.createElement('button');
    closeButton.appendChild(document.createTextNode('X'));
    closeButton.addEventListener('click', close);
    container.appendChild(closeButton);
    document.body.appendChild(container);
}());