'use strict';

let {
    n, view
} = require('kabanery');

let {
    reduce, map
} = require('bolzano');

let logoRight = (logoRightNode) => {
    return n('button', {
        style: {
            fontSize: 16,
            padding: 0,
            'float': 'right',
            color: 'white',
            cursor: 'pointer'
        }
    }, [logoRightNode]);
};

let logoLeft = (logoLeftNode) => {
    return n('button', {
        style: {
            fontSize: 16,
            padding: 0,
            'float': 'left',
            color: 'white',
            cursor: 'pointer'
        }
    }, [logoLeftNode]);
};

module.exports = view(({
    back,
    rightLogos = [], leftLogos = []
} = {}) => {
    return n('div', {
        style: {
            height: 40,
            boxSizing: 'border-box',
            backgroundColor: '#3b3a36',
            margin: 0,
            width: '100%',
            overflow: 'hidden'
        }
    }, [
        back ? logoLeft(n('div', {
            href: `single://${back}`,
            style: {
                padding: 10
            }
        }, '<')) : null,

        map(leftLogos, logoLeft),

        reduce(rightLogos, (prev, logo) => {
            prev.unshift(logoRight(logo));
            return prev;
        }, [])
    ]);
});
