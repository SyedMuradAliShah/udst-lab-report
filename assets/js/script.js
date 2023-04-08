$("input:radio[name='toggler']").click(function() {
    $("#group1 .hidden").hide().removeClass("shown");
    $("#" + $(this).val()).show();
    setTimeout(function() {
      $(".hidden").addClass("shown");
    }, 0);
  });
  
  $("input:radio[name='toggler1']").click(function() {
    $("#group2 .hidden").hide().removeClass("shown");
    $("#" + $(this).val()).show();
    setTimeout(function() {
      $(".hidden").addClass("shown");
    }, 0);
  });
  
  // $(".radio").click(function(){
  // 	// var myVal = $(this).attr('name');
  //   // console.log($(this).val());
  //    $(".hidden").hide().removeClass("shown");
  //   if($(this).val() === $("#"+$(this).val())){
  //     $("#" + $(this).val()).show("fast");	
  //   } else {
  //     $("#" + $(this).val()).hide("fast");
  //   }
  //   setTimeout(function(){
  //     $(".hidden").addClass("shown");}
  // ,0);
  // });
  
  function executeAutomaticVisibility(name) {
    $("[name=" + name + "]:checked").each(function() {
      $("[showIfIdChecked=" + this.id + "]").show();
    });
    $("[name=" + name + "]:not(:checked)").each(function() {
      $("[showIfIdChecked=" + this.id + "]").hide();
    });
  }
  
  $(document).ready(function() {
    triggers = $("[showIfIdChecked]")
      .map(function() {
        return $("#" + $(this).attr("showIfIdChecked")).get()
      })
    $.unique(triggers);
    triggers.each(function() {
      executeAutomaticVisibility(this.name);
      $(this).change(function() {
        executeAutomaticVisibility(this.name);
      });
    });
  });
  
  $('input[type="radio"]').change(function () {
      $(this).closest('div.question').find('p.hidden').toggle(this.value == 'Yes');
  }).change();
  
  
  $('.hide-show input').change(function () {
      $(this).closest('.hide-show').next('.hide-show-yes').toggle(this.value == 'yes').next('.hide-show-no').toggle(this.value == 'no');
  }).filter(':checked').change();
  
  
  $(function() {
      $("[name=toggler]").each(function(i) {
          $(this).change(function(){
              $('#blk-1, #blk-2').hide();
              divId = 'blk-' + $(this).val();
              $("#"+divId).show('slow');
          });
      });
   });