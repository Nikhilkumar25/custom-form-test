$(document).ready(function() {
  $('#myForm').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();

    // Send data to Google Sheets using AJAX
    $.ajax({
      url: 'https://script.google.com/macros/s/1n2VkoYYJDOvSbMhTTY0oX4LYsMQWdwsEls8fy0g0JS2uURHK6UwYf19J/exec',
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
