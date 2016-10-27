'use strict';

let Header = require('../../index.js');

let header = Header({
    back: '/',
    title: 'test'
});

document.body.appendChild(header);
