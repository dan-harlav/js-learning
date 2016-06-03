var generateArrayOf = function(n) {
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(i);
  }
  return result;
}

$(function() {
    var list = generateArrayOf(1000);

    var nextListItem = function() {
        var item = list.shift();

        if (typeof item != 'undefined') {
          $('#content').html(item);
            setTimeout( nextListItem, 0);
        }
    };

    nextListItem();
});
