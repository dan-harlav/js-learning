$(function() {
    // This doesn't work like you might think, because the value of `i` never
    // gets locked in. Instead, every link, when clicked (well after the loop
    // has finished executing), alerts the total number of elements, because
    // that's what the value of `i` actually is at that point.

    // var elems = document.getElementsByTagName( 'button' );

    // for ( var i = 0; i < elems.length; i++ ) {

    //   elems[ i ].addEventListener( 'click', function(e){
    //     console.log( 'I am link #' + i );
    //   }, 'false' );

    // }

    ////////////////////////////////////////////////////////////////////////////////

    // This works, because inside the IIFE, the value of `i` is locked in as
    // `lockedInIndex`. After the loop has finished executing, even though the
    // value of `i` is the total number of elements, inside the IIFE the value
    // of `lockedInIndex` is whatever the value passed into it (`i`) was when
    // the function expression was invoked, so when a link is clicked, the
    // correct value is alerted.

    var elems = document.getElementsByTagName('button');

    for (var i = 0; i < elems.length; i++) {

        // This will pick up the i at the value when the click event happens.
        elems[i].addEventListener('click', function() {
            console.log('I am link #' + i);
        }, 'false');

        // This will pick up the i at the value when the for loop executes.
        (function(lockedInIndex) {
            elems[i].addEventListener('click', function() {
                console.log('I am link #' + lockedInIndex);
            }, 'false');

        })(i);

    }

    ////////////////////////////////////////////////////////////////////////////////

    // You could also use an IIFE like this, encompassing (and returning) only
    // the click handler function, and not the entire `addEventListener`
    // assignment. Either way, while both examples lock in the value using an
    // IIFE, I find the previous example to be more readable.

    // var elems = document.getElementsByTagName( 'button' );

    // for ( var i = 0; i < elems.length; i++ ) {
    //   elems[ i ].addEventListener( 'click', (function( lockedInIndex ){
    //     return function(e){
    //       console.log( 'I am link #' + lockedInIndex );
    //     };
    //   })( i ), 'false' );

    // }

    ////////////////////////////////////////////////////////////////////////////////
});
