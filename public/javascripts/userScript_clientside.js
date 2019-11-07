function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
        function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }
    ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) {
            success(xhr.responseText);
        }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}

function addUser() {
    var firstName = document.forms["userForm"]["firstName"].value.trim();
    if (firstName == "") {
        alert("Enter valid First Name");
        return false;
    }

    var lastName = document.forms["userForm"]["lastName"].value.trim();
    if (lastName == "") {
        alert("Enter valid Last Name");
        return false;
    }

    var job = document.forms["userForm"]["job"].value.trim();
    if (job == "") {
        alert("Enter valid Last Name");
        return false;
    }

    var params = "firstName=" + firstName + "&lastName=" + lastName + "&job=" + job;

    postAjax('/addUser', params, function (message) {
        alert("New User Added : " + message);
    });

}

function updateUser() {
    var firstName = document.forms["userForm"]["firstName"].value.trim();
    if (firstName == "") {
        alert("Enter valid First Name");
        return false;
    }

    var lastName = document.forms["userForm"]["lastName"].value.trim();
    if (lastName == "") {
        alert("Enter valid Last Name");
        return false;
    }

    var job = document.forms["userForm"]["job"].value.trim();
    if (job == "") {
        alert("Enter valid job");
        return false;
    }

    var params = "firstName=" + firstName + "&lastName=" + lastName + "&job=" + job;
    var id = document.getElementById('id').innerText;

    postAjax('/updateUser/' + id, params, function (message) {
        alert("User Updated : " + message);
    });
}

function deleteUser(id) {
    postAjax('/users/' + id, function (message) {
        alert("User deleted : " + message);
    });
}