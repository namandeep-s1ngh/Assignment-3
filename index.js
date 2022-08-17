var Role;
(function (Role) {
    Role["SuperAdmin"] = "SuperAdmin";
    Role["Admin"] = "Admin";
    Role["Subscriber"] = "Subscriber";
})(Role || (Role = {}));
;
var json_list = [
    ["Nav", "Deep", "Singh", "nav@gmail.com", 9876543210, "Mohali", "1990-08-28"],
    ["Dev", "Roy", "Kapoor", "dev@gmail.com", 9764523865, "Delhi", "1995-09-18"],
    ["Riya", " ", "Mathur", "riya@gmail.com", 9786354567, "Mumbai", "2002-04-17"]
];
var User = /** @class */ (function () {
    function User(arr) {
        this.firstName = arr[0];
        this.middleName = arr[1];
        this.lastName = arr[2];
        this.email = arr[3];
        this.phone = arr[4];
        this.address = arr[5];
        this.DOB = arr[6];
    }
    User.prototype.createTable = function () {
        DOM("load").innerHTML = "Refresh Data";
        var table = "<table id='table_data'>" +
            "<tr>" +
            "<th> First Name </th>" +
            "<th> Middle Name </th>" +
            "<th> Last Name </th>" +
            "<th> Email </th>" +
            "<th> Phone Number </th>" +
            "<th> Role </th>" +
            "<th> Address </th>" +
            "<th> D.O.B. </th>" +
            "</tr>";
        var count = 1;
        for (var _i = 0, _a = User.list; _i < _a.length; _i++) {
            var i = _a[_i];
            table += "<tr id=" + "row" + count + ">" +
                "<td id=" + "fname_row" + count + ">" + i.firstName + "</td>" +
                "<td id=" + "mname_row" + count + ">" + i.middleName + "</td>" +
                "<td id=" + "lname_row" + count + ">" + i.lastName + "</td>" +
                "<td id=" + "email_row" + count + ">" + i.email + "</td>" +
                "<td id=" + "phone_row" + count + ">" + i.phone + "</td>" +
                "<td id=" + "role_row" + count + ">" +
                "<form> <select> <option value=" + "SuperAdmin" + ">" + Role.SuperAdmin + "</option>" +
                "<option value=" + "Admin" + ">" + Role.Admin + "</option>" +
                "<option value=" + "Subscriber" + ">" + Role.Subscriber + "</option>" +
                "</select> </form>" +
                "</td>" +
                "<td id=" + "address_row" + count + ">" + i.address + "</td>" +
                "<td id=" + "DOB_row" + count + ">" + i.DOB + "</td>" +
                "<td>" +
                "<input type='button' id=" + "edit_button" + count + " value='Edit' class='edit' onclick=" + "User.prototype.edit_row(" + count + ")>" +
                "<input type='button' id=" + "delete_button" + count + " value='Delete' class='delete' onclick=" + "User.prototype.delete_row(" + count + ")>" +
                "<input type='button' id=" + "save_button" + count + " value='Save' class='save'>" +
                "<input type='button' id=" + "cancel_button" + count + " value='Cancel' class='cancel'>" +
                "</td>" +
                "</tr>";
            count++;
        }
        DOM('divison').innerHTML = table + "</table>";
    };
    User.prototype.delete_row = function (no) {
        DOM("row" + no).innerHTML = "";
    };
    User.prototype.edit_row = function (no) {
        User.prototype.hide_buttons(no);
        var fname_data = DOM("fname_row" + no).innerHTML;
        var mname_data = DOM("mname_row" + no).innerHTML;
        var lname_data = DOM("lname_row" + no).innerHTML;
        var email_data = DOM("email_row" + no).innerHTML;
        var phone_data = DOM("phone_row" + no).innerHTML;
        var address_data = DOM("address_row" + no).innerHTML;
        var DOB_data = DOM("DOB_row" + no).innerHTML;
        DOM("fname_row" + no).innerHTML = inputField("fname_text" + no, fname_data);
        DOM("mname_row" + no).innerHTML = inputField("mname_text" + no, mname_data);
        DOM("lname_row" + no).innerHTML = inputField("lname_text" + no, lname_data);
        DOM("email_row" + no).innerHTML = inputField("email_text" + no, email_data);
        DOM("phone_row" + no).innerHTML = inputField("phone_text" + no, phone_data);
        DOM("address_row" + no).innerHTML = inputField("address_text" + no, address_data);
        DOM("DOB_row" + no).innerHTML = "<input type='date' id='DOB_text" + no + "' value='DOB_data'>";
        DOM("cancel_button" + no).addEventListener("click", function () {
            DOM("fname_row" + no).innerHTML = fname_data;
            DOM("mname_row" + no).innerHTML = mname_data;
            DOM("lname_row" + no).innerHTML = lname_data;
            DOM("email_row" + no).innerHTML = email_data;
            DOM("phone_row" + no).innerHTML = phone_data;
            DOM("address_row" + no).innerHTML = address_data;
            DOM("DOB_row" + no).innerHTML = DOB_data;
            User.prototype.show_buttons(no);
        });
        DOM("save_button" + no).addEventListener("click", function () {
            DOM("fname_row" + no).innerHTML = DOM("fname_text" + no).value;
            DOM("mname_row" + no).innerHTML = DOM("mname_text" + no).value;
            DOM("lname_row" + no).innerHTML = DOM("lname_text" + no).value;
            DOM("email_row" + no).innerHTML = DOM("email_text" + no).value;
            DOM("phone_row" + no).innerHTML = DOM("phone_text" + no).value;
            DOM("address_row" + no).innerHTML = DOM("address_text" + no).value;
            if ((DOM("DOB_text" + no).value) === "")
                DOM("DOB_row" + no).innerHTML = DOB_data;
            else
                DOM("DOB_row" + no).innerHTML = DOM("DOB_text" + no).value;
            User.prototype.show_buttons(no);
        });
    };
    User.prototype.hide_buttons = function (no) {
        DOM("edit_button" + no).style.display = "none";
        DOM("save_button" + no).style.display = "block";
        DOM("delete_button" + no).style.display = "none";
        DOM("cancel_button" + no).style.display = "block";
    };
    User.prototype.show_buttons = function (no) {
        DOM("edit_button" + no).style.display = "block";
        DOM("save_button" + no).style.display = "none";
        DOM("delete_button" + no).style.display = "block";
        DOM("cancel_button" + no).style.display = "none";
    };
    User.list = [];
    return User;
}());
function DOM(id) {
    return (document.getElementById(id));
}
function inputField(id, val) {
    return ("<input type='text' id='" + id + "' value='" + val + "'>");
}
function main() {
    if (User.list.length === 0)
        for (var i = 0; i < json_list.length; i++)
            User.list.push(new User(json_list[i]));
    User.prototype.createTable();
}
function today() {
    DOM("date_time").innerHTML = Date();
}
