function test() {
  data={};
  data.name = "title";
  data.message = "message";
  $.ajax({
    url: 'http://localhost:3000/',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function(data) {

      console.log('Success: ')
      document.getElementById("abc").innerHTML = data;
    },
    error: function(xhr, status, error) {
      console.log('Error: ' + error.message);

    },
  });
}
