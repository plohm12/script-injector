(function () {
    'use strict';

    var CONTAINER_ID = 'script-injector-container';
    var _document = document;
    var _createElement = 'createElement';
    var _createTextNode = 'createTextNode';
    var _appendChild = 'appendChild';
    var _addEventListener = 'addEventListener';

    function injectScript() {
        var fileInput = _document.getElementById('my-script');
        if (!fileInput || !fileInput.files || !fileInput.files.length) {
            return;
        }
        var file = fileInput.files[0];
        var script = _document[_createElement]('script');
        script.type = 'text/javascript';
        script.src = URL.createObjectURL(file);
        _document.body[_appendChild](script);
        close();
    }

    function close() {
        var container = _document.getElementById(CONTAINER_ID);
        if (container) {
            container.remove();
        }
    }

    var container = _document[_createElement]('div');
    container.id = CONTAINER_ID;
    container.style = [
        'position:fixed',
        'top:0',
        'left:0',
        'background-color:#ddd',
        'z-index:9999'
    ].join(';');
    var input = _document[_createElement]('input');
    input.type = 'file';
    input.id = 'my-script';
    container[_appendChild](input);
    var injectButton = _document[_createElement]('button');
    injectButton[_addEventListener]('click', injectScript);
    injectButton[_appendChild](_document[_createTextNode]('inject'));
    container[_appendChild](injectButton);
    var closeButton = _document[_createElement]('button');
    closeButton[_appendChild](_document[_createTextNode]('X'));
    closeButton[_addEventListener]('click', close);
    container[_appendChild](closeButton);
    _document.body[_appendChild](container);
}());