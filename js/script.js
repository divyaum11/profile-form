$(document).ready(function() {
    var readURL = function(input, targetClass) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.' + targetClass).attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change', function(){
        readURL(this, 'profile-pic');
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
    
    $(".file-upload-cover").on('change', function(){
        readURL(this, 'profile-pic-cover');
    });
    
    $(".upload-button-cover").on('click', function() {
       $(".file-upload-cover").click();
    });
    function validateFirstName() {
        var firstName = $("#first-name").val().trim();
        if (firstName === "") {
            $("#first-name").addClass("is-invalid");
            $("#first-name-error").text("Please enter your first name.");
            return false;
        } else {
            $("#first-name").removeClass("is-invalid");
            $("#first-name-error").text("");
            return true;
        }
    }

    function validateLastName() {
        var lastName = $("#last-name").val().trim();
        if (lastName === "") {
            $("#last-name").addClass("is-invalid");
            $("#last-name-error").text("Please enter your last name.");
            return false;
        } else {
            $("#last-name").removeClass("is-invalid");
            $("#last-name-error").text("");
            return true;
        }
    }
    function validateEmail() {
        var email = $("#email").val().trim();
        if (email === "") {
            $("#email").addClass("is-invalid");
            $("#email-error").text("Please enter your email.");
            return false;
        } else {
            $("#email").removeClass("is-invalid");
            $("#email-error").text("");
            return true;
        }
    }
    
    function validatePhone() {
        var phone = $("#phone").val().trim();
        if (phone === "") {
            $("#phone").addClass("is-invalid");
            $("#phone-error").text("Please enter your phone number.");
            return false;
        } else {
            $("#phone").removeClass("is-invalid");
            $("#phone-error").text("");
            return true;
        }
    }
    
    function validateAddress() {
        var address = $("#address").val().trim();
        if (address === "") {
            $("#address").addClass("is-invalid");
            $("#address-error").text("Please enter your address.");
            return false;
        } else {
            $("#address").removeClass("is-invalid");
            $("#address-error").text("");
            return true;
        }
    }
    function validateZip() {
        var zip = $("#zip").val().trim();
        if (zip === "") {
            $("#zip").addClass("is-invalid");
            $("#zip-error").text("Please enter your zip code.");
            return false;
        } else {
            $("#zip").removeClass("is-invalid");
            $("#zip-error").text("");
            return true;
        }
    }
    function validateDateOfBirth() {
        var dob = $("#language").val();
        if (dob === "") {
            $("#language").addClass("is-invalid");
            $("#date-of-birth-error").text("Please enter your date of birth.");
            return false;
        } else {
            $("#language").removeClass("is-invalid");
            $("#date-of-birth-error").text("");
            return true;
        }
    }    
    
    $("#save-btn").click(function () {
        var validFirstName = validateFirstName();
        var validLastName = validateLastName();
        var validEmail = validateEmail();
        var validPhone = validatePhone();
        var validAddress = validateAddress();
        var isValidZip = validateZip();
        var validDateOfBirth = validateDateOfBirth();
        var validPassword = validatePassword();
        if (validFirstName && validLastName && validEmail && validPhone && validAddress && isValidZip && validDateOfBirth && validPassword) {
            alert("Form submitted successfully!");
        }
    });
    function validatePassword() {
        var newPassword = $("#new-password").val().trim();
        var confirmPassword = $("#confirm-password").val().trim();

        if (newPassword === "") {
            $("#new-password").addClass("is-invalid");
            $("#new-password-error").text("Please enter a new password.");
            return false;
        } else {
            $("#new-password").removeClass("is-invalid");
            $("#new-password-error").text("");
        }

        if (confirmPassword === "") {
            $("#confirm-password").addClass("is-invalid");
            $("#confirm-password-error").text("Please confirm your password.");
            return false;
        } else {
            $("#confirm-password").removeClass("is-invalid");
            $("#confirm-password-error").text("");
        }

        if (newPassword !== confirmPassword) {
            $("#confirm-password").addClass("is-invalid");
            $("#confirm-password-error").text("Passwords do not match.");
            return false;
        } else {
            $("#confirm-password").removeClass("is-invalid");
            $("#confirm-password-error").text("");
        }
    
        return true;
    }
    $("#save-btn-pass").click(function () {
        var validPassword = validatePassword();
        if (validPassword) {
            alert("Form submitted successfully!");
        }
    });
    $("#toggle-new-password").click(function() {
        var input = $("#new-password");
        var icon = $(this);
        if (input.attr("type") === "password") {
            input.attr("type", "text");
            icon.removeClass("bi-eye-slash").addClass("bi-eye");
        } else {
            input.attr("type", "password");
            icon.removeClass("bi-eye").addClass("bi-eye-slash");
        }
    });

    $("#toggle-confirm-password").click(function() {
        var input = $("#confirm-password");
        var icon = $(this);
        if (input.attr("type") === "password") {
            input.attr("type", "text");
            icon.removeClass("bi-eye-slash").addClass("bi-eye");
        } else {
            input.attr("type", "password");
            icon.removeClass("bi-eye").addClass("bi-eye-slash");
        }
    });
    $(".personal-info-tab").click(function() {
        $(".change-password-btn").removeClass("active-tab");
        $(this).addClass("active-tab");
        $(".personal-info-form").show();
        $(".password-fields").hide();
    });
    $(".password-fields").hide();
    $(".change-password-btn").click(function() {
        $(".personal-info-tab").removeClass("active-tab");
        $(this).addClass("active-tab");
        $(".personal-info-form").hide();
        $(".password-fields").show();
    });
});
