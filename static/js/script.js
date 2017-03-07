$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    // VALIDATION MIN 5
    $('input').focusout(function() {
        var minChar = 5;
        if ($(this).val().length < minChar) {
            $(this).parent().removeClass("has-success").addClass("has-error");
        } else {
            $(this).parent().removeClass("has-error").addClass("has-success");
        }
    });
    // END OF THIS FUNTION

    // CONFIRM PASSWORD
    $('#inputPassword2').focusout(function() {
        var pass = $('#inputPassword1').val();
        var pass2 = $('#inputPassword2').val();
        if (pass != pass2) {
            $('#inputPassword1, #inputPassword2').parent().removeClass("has-success").addClass("has-error");
        } else {
            $('#inputPassword1, #inputPassword2').parent().removeClass("has-error").addClass("has-success");
        }
    });
    // END OF CONFIRM PASSWORD


    // CHECK IF INPUT EMPTY

    $('.btn-default').click(function() {
        if ($('input').val() == '') {
            alert('Ya une case vide quelque part!');
        }
    });
    // EN OF IF INPUT EMPTY

    // STRENGTH METER

    $(':password').pwstrength(options);
    "use strict";
    var options = {
        minChar: 4,
        bootstrap3: true,
    };

    // END
});


// CLEAR FORM
function myFunction() {
    document.getElementById("myForm").reset();
}
// END OF CLEAR FORM FUNTION
