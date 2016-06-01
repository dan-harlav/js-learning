var bootstrap = function() {
    var bam = function() {
        console.log('You clicked element #' + i);
    }

    var nodes = document.getElementsByTagName('button');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener('click', bam);
    }
}

$(bootstrap);
