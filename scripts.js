// Add your API endpoint here
var API_ENDPOINT = "https://9hcy937r35.execute-api.us-east-2.amazonaws.com/prod";

// AJAX POST request to save student data
document.getElementById("savestudent").onclick = function(){
    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
            // Clear the input fields
            $('#studentid').val('');
            $('#name').val('');
            $('#class').val('');
            $('#age').val('');
        },
        error: function (xhr, status, error) {
            alert("Error saving student data: " + error);
        }
    });
};

// AJAX GET request to retrieve all students
document.getElementById("getstudents").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#studentTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#studentTable").append("<tr> \
                    <td>" + data['studentid'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['class'] + "</td> \
                    <td>" + data['age'] + "</td> \
                    </tr>");
            });
        },
        error: function (xhr, status, error) {
            alert("Error retrieving student data: " + error);
        }
    });
};

// AJAX DELETE request to delete a student
document.getElementById("deletestudent").onclick = function(){
    var studentId = $('#studentid').val();
    $.ajax({
        url: API_ENDPOINT,
        type: 'DELETE',
        data: JSON.stringify({ "studentid": studentId }),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentDeleted").innerHTML = "Student Data Deleted!";
            // Clear the input field
            $('#studentid').val('');
        },
        error: function (xhr, status, error) {
            alert("Error deleting student data: " + error);
        }
    });
};

// AJAX PUT request to update a student
document.getElementById("updatestudent").onclick = function(){
    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'PUT',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentUpdated").innerHTML = "Student Data Updated!";
            // Clear the input fields
            $('#studentid').val('');
            $('#name').val('');
            $('#class').val('');
            $('#age').val('');
        },
        error: function (xhr, status, error) {
            alert("Error updating student data: " + error);
        }
    });
};
