$(document).ready(function() {
  $('#myForm').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();

    // Send data to Google Sheets using AJAX
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbyiW-gS6YrtFjOd4zuXh_-5o-pU82hf7YnbDyrAwjYFDf5d7EbH4CP2Zrui_GJbRVbc/exec',
      method: 'GET',
      dataType: 'json',
      data: {
        'name': name,
        'email': email
      },
      success: function(response) {
        console.log('Form submitted successfully');
        // Clear form inputs after submission
        $('#name').val('');
        $('#email').val('');
      },
      error: function(error) {
        console.error('Error submitting form:', error);
      }
    });
  });
});
