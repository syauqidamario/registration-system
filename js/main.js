(function ($) {
  // USE STRICT
  "use strict";

  $(".form-radio .radio-item").click(function () {
    //Spot switcher:
    $(this).parent().find(".radio-item").removeClass("active");
    $(this).addClass("active");
  });

  $('#course_type').parent().append('<div class="list-item" id="newcourse_type" name="course_type"></div>');
  $('#course_type option').each(function () {
    $('#newcourse_type').append('<div value="' + $(this).val() + '">' + $(this).text() + '</div>');
  });
  $('#course_type').remove();
  $('#newcourse_type').attr('id', 'course_type');
  $('#course_type div').first().addClass('init');
  $("#course_type").on("click", ".init", function () {
    $(this).closest("#course_type").children('div:not(.init)').toggle('slow');
  });

  $('#confirm_type').parent().append('<div class="list-item" id="newconfirm_type" name="confirm_type"></div>');
  $('#confirm_type option').each(function () {
    $('#newconfirm_type').append('<div value="' + $(this).val() + '">' + $(this).text() + '</div>');
  });
  $('#confirm_type').remove();
  $('#newconfirm_type').attr('id', 'confirm_type');
  $('#confirm_type div').first().addClass('init');
  $("#confirm_type").on("click", ".init", function () {
    $(this).closest("#confirm_type").children('div:not(.init)').toggle('slow');
  });

  $('#hour_appointment').parent().append('<div class="list-item" id="newhour_appointment" name="hour_appointment"></div>');
  $('#hour_appointment option').each(function () {
    $('#newhour_appointment').append('<div value="' + $(this).val() + '">' + $(this).text() + '</div>');
  });
  $('#hour_appointment').remove();
  $('#newhour_appointment').attr('id', 'hour_appointment');
  $('#hour_appointment div').first().addClass('init');
  $("#hour_appointment").on("click", ".init", function () {
    $(this).closest("#hour_appointment").children('div:not(.init)').toggle('slow');
  });

  var allOptions = $("#course_type").children('div:not(.init)');
  $("#course_type").on("click", "div:not(.init)", function () {
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $("#course_type").children('.init').html($(this).html());
    allOptions.toggle('slow');
  });

  var FoodOptions = $("#confirm_type").children('div:not(.init)');
  $("#confirm_type").on("click", "div:not(.init)", function () {
    FoodOptions.removeClass('selected');
    $(this).addClass('selected');
    $("#confirm_type").children('.init').html($(this).html());
    FoodOptions.toggle('slow');
  });

  var AppointmentOptions = $("#hour_appointment").children('div:not(.init)');
  $("#hour_appointment").on("click", "div:not(.init)", function () {
    AppointmentOptions.removeClass('selected');
    $(this).addClass('selected');
    $("#hour_appointment").children('.init').html($(this).html());
    AppointmentOptions.toggle('slow');
  });
    // Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyCUKG9LFIFy2ckWZS79PbguV5yUTxrB6u0",
        authDomain: "project-registration-sys-5a635.firebaseapp.com",
        databaseURL: "https://project-registration-sys-5a635-default-rtdb.firebaseio.com",
        projectId: "project-registration-sys-5a635",
        storageBucket: "project-registration-sys-5a635.appspot.com",
        messagingSenderId: "943565306740",
        appId: "1:943565306740:web:ded7dc8470cf0e027b8a21",
        measurementId: "G-Z9G1WHDDRL"
     };

     firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();

    const registerButtons = document.querySelectorAll('#submit');
    registerButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get the form data
        var name = $('#name').val();
        var email = $('#email').val();
        var userType = $('#user_type').val();
  
        // Create a new document in the "registrations" collection
        db.collection('registrations').add({
          name: name,
          email: email,
          userType: userType
        })
          .then(function (docRef) {
            console.log('Document written with ID: ', docRef.id);
            // Redirect to check-user-and-rewards.html page
            window.location.href = 'check-user-and-rewards.html';
          })
          .catch(function (error) {
            console.error('Error adding document: ', error);
          });
      });
    });
  })(jQuery);