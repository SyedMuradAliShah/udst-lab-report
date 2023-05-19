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





  // =============wizard

  var currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the current tab
  
  function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
  }
  
  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
      // ... the form gets submitted:
      document.getElementById("regForm").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }
  
  function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
  }
  
  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }