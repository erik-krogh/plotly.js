'use strict';

module.exports = function createGraphDiv(id) {
    id = (id === undefined) ? 'graph' : id;
    var gd = document.createElement('div');
    gd.id = id;
    document.body.appendChild(gd);

    // force the graph to be at position 0,0 no matter what
    gd.style.position = 'fixed';
    gd.style.left = 0;
    gd.style.top = 0;

    return gd;
};
