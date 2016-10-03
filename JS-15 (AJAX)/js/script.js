function GoogleCallback (jQueryObj, data) {
    console.log('data', data);
}


$(function() {

    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+'test'+'&callback=GoogleCallback&context=?',
        data: {
          abc: 123
        },
        dataType: "jsonp",
        method: 'POST',
        success: function () {
          console.log(':)');
        },
        error: function () {
          console.log(':(');
        }
    });






});
