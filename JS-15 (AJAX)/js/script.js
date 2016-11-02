function GoogleCallback (jQueryObj, data) {
    console.log("data", data);
}


$(function() {

    $.ajax({
        url: "https://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=AIzaSyBoHXZGOIX6QXe6ao5VnOEE5Z_hgQg0RC4&rsz=large&q="+"test"+"&callback=GoogleCallback&context=?",
        data: {
          abc: 123
        },
        dataType: "jsonp",
        method: "POST",
        success: function () {
          console.log(":)");
        },
        error: function (data, e) {
          console.log(e);
        }
    });




});
