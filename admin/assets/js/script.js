/**
*	Multiple Hidden Areas in a Form.
*
*	Instructions:
*
* 1. Add the 'trigger' class to checkboxes that will act as a trigger to show/hide area.
* 2. Create a wrapper <div> around the field(s) you want to hide and give this an ID (whatever you want) and the class 'hidden'.
* 3. Moving back to the checkbox, add a data-trigger attribute and set its value to the ID of the wrapper div that contains the fields you want to hide.
* e.g. <input type="checkbox" name="checkbox" id="checkbox" class="trigger" data-trigger="my_hidden_fields">
*      <div id="my_hidden_fields" class="hidden">
*        Name: <input type="text" name="name">
*      </div>
*
* The code below will automatically setup event listeners for any checkboxes with the 'trigger' class.
* All elements with the 'hidden' class will be hidden when the page loads.
* When a checkbox is checked the code will take the value from the data-trigger attribute on the 
* checkbox and use this to select the wrapper <div> that needs to be shown/hidden.
*/


$(function() {
  
  // Hide the hidden sections.
  // Use JS to do this in case the user doesn't have JS 
  // enabled.
  $('.hidden').hide();
  
  // Setup an event listener for each trigger checkbox that 
  // fires when the state of the checkbox changes.
  $('.trigger').change(function() {  
       // Get the ID of the hidden area from the data-trigger
    // attribute.
    var hiddenId = $(this).attr("data-trigger");
    
    // Check to see if the checkbox is checked.
    // If it is, show the fields and populate the input.
    // If not, hide the fields.
    if ($(this).is(':checked')) {
      // Show the hidden fields.
      $("#" + hiddenId).show();
    } else {
      // Make sure that the hidden fields are indeed
      // hidden.
      $("#" + hiddenId).hide();
      
      // You may also want to clear the value of the 
      // hidden fields here. Just in case somebody 
      // shows the fields, enters data to them and then 
      // unticks the checkbox.
      //
      // This would do the job:
      //
      // $("#hidden_field").val("");
    }
  });
});


