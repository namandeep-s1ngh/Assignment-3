enum Role {a = 'SuperAdmin', b = 'Admin', c = 'Subscriber'};

const json_list: Array<any> = [
    ["Nav", "Deep", "Singh", "nav@gmail.com", 9876543210, Role.a, "Mohali", "1990-08-28"],
    ["Dev", "Roy", "Kapoor", "dev@gmail.com", 9764523865, Role.b, "Delhi", "1995-09-18"],
    ["Riya", " ", "Mathur", "riya@gmail.com", 9786354567, Role.c, "Mumbai", "2002-04-17"]
];


interface create_table {            
    createTable(): void;
}

interface delete_row_table {        
    delete_row(n: number): void;
}

interface edit_row_table {                                                                                                             //save and cancel operations will also be defined here. 
    edit_row(n: number): void;
}

interface hide_show_buttons {
    hide_buttons(n: number): void;
    show_buttons(n: number): void;
}

interface user_data {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: number;
    role: Role;
    address: string;
    DOB: string;
}

class User <T> implements create_table, delete_row_table, edit_row_table, hide_show_buttons, user_data {
    
    static list: any = [];

    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: number;
    role: Role;
    address: string;
    DOB: string;

    constructor(arr:any []) {        
        this.firstName = arr[0];
        this.middleName = arr[1];
        this.lastName = arr[2];
        this.email = arr[3];
        this.phone = arr[4];
        this.role = arr[5];
        this.address = arr[6];      
        this.DOB = arr[7];  
    }    

    createTable() : void {
        
        document.getElementById("load").innerHTML = "Refresh Data";

        let table: string = "<table class='table_data'>" +
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

        let count: number = 1;

        for(let i of User.list) {

            table += "<tr id="+"row"+count+">" +
                             "<td id="+"fname_row"+count+">" +i.firstName+  "</td>" +
                             "<td id="+"mname_row"+count+">" +i.middleName+ "</td>" + 
                             "<td id="+"lname_row"+count+">" +i.lastName+ "</td>" +
                             "<td id="+"email_row"+count+">" +i.email+ "</td>" +
                             "<td id="+"phone_row"+count+">" +i.phone+ "</td>" +
                             "<td id="+"role_row"+count+">" +i.role+ "</td>" +
                             "<td id="+"address_row"+count+">" +i.address+ "</td>" +    
                             "<td id="+"DOB_row"+count+">" +i.DOB+ "</td>" +                          
                             "<td>" + 
                             "<input type='button' id="+"edit_button"+count+" value='Edit' class='edit' onclick="+"User.prototype.edit_row("+count+")>" + 
                             "<input type='button' id="+"delete_button"+count+" value='Delete' class='delete' onclick="+"User.prototype.delete_row("+count+")>" +  
                             "<input type='button' id="+"save_button"+count+" value='Save' class='save'>" +
                             "<input type='button' id="+"cancel_button"+count+" value='Cancel' class='cancel'>" +                            
                             "</td>" +                          
                      "</tr>";                        

            count++;
        }       
                            
        document.getElementById('divison').innerHTML = table + "</table>";         
    }      


    delete_row(no: number): void {                                                                                                     //delete button functionality
        document.getElementById("row"+no).style.visibility = "hidden";
    }

    edit_row(no: number): void {                                                                                                       //edit button functionality

        User.prototype.hide_buttons(no);
    
        let fname_data: string = document.getElementById("fname_row"+no).innerHTML;
        let mname_data: string = document.getElementById("mname_row"+no).innerHTML;
        let lname_data: string = document.getElementById("lname_row"+no).innerHTML;
        let email_data: string = document.getElementById("email_row"+no).innerHTML;
        let phone_data: string = document.getElementById("phone_row"+no).innerHTML;
        let role_data: string = document.getElementById("role_row"+no).innerHTML;
        let address_data: string = document.getElementById("address_row"+no).innerHTML;
        let DOB_data: string = document.getElementById("DOB_row"+no).innerHTML;
        
    
        document.getElementById("fname_row"+no).innerHTML = "<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
        document.getElementById("mname_row"+no).innerHTML = "<input type='text' id='mname_text"+no+"' value='"+mname_data+"'>";
        document.getElementById("lname_row"+no).innerHTML = "<input type='text' id='lname_text"+no+"' value='"+lname_data+"'>";
        document.getElementById("email_row"+no).innerHTML = "<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
        document.getElementById("phone_row"+no).innerHTML = "<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
        document.getElementById("role_row"+no).innerHTML = "<input type='text' id='role_text"+no+"' value='"+role_data+"'>";
        document.getElementById("address_row"+no).innerHTML = "<input type='text' id='address_text"+no+"' value='"+address_data+"'>";
        document.getElementById("DOB_row"+no).innerHTML = "<input type='date' id='DOB_text"+no+"' value='DOB_data'>";
    
        document.getElementById("cancel_button"+no).addEventListener("click", function (): void {                                       //cancel button functionality
    
            document.getElementById("fname_row"+no).innerHTML = fname_data;
            document.getElementById("mname_row"+no).innerHTML = mname_data;
            document.getElementById("lname_row"+no).innerHTML = lname_data;
            document.getElementById("email_row"+no).innerHTML = email_data;
            document.getElementById("phone_row"+no).innerHTML = phone_data;
            document.getElementById("role_row"+no).innerHTML = role_data;
            document.getElementById("address_row"+no).innerHTML = address_data;
            document.getElementById("DOB_row"+no).innerHTML = DOB_data;
         
            User.prototype.show_buttons(no);
        });
    
        document.getElementById("save_button"+no).addEventListener("click", function (): void {                                         //save button functionality
            
            document.getElementById("fname_row"+no).innerHTML = (document.getElementById("fname_text"+no) as HTMLInputElement).value;
            document.getElementById("mname_row"+no).innerHTML = (document.getElementById("mname_text"+no) as HTMLInputElement).value;
            document.getElementById("lname_row"+no).innerHTML = (document.getElementById("lname_text"+no) as HTMLInputElement).value;
            document.getElementById("email_row"+no).innerHTML = (document.getElementById("email_text"+no) as HTMLInputElement).value;
            document.getElementById("phone_row"+no).innerHTML = (document.getElementById("phone_text"+no) as HTMLInputElement).value;
            document.getElementById("role_row"+no).innerHTML = (document.getElementById("role_text"+no) as HTMLInputElement).value;
            document.getElementById("address_row"+no).innerHTML = (document.getElementById("address_text"+no) as HTMLInputElement).value;
            document.getElementById("DOB_row"+no).innerHTML = (document.getElementById("DOB_text"+no) as HTMLInputElement).value;
    
            User.prototype.show_buttons(no);
        });
    
    }

    hide_buttons(no: number): void {                                                                                                   //hide edit and delete button.
        document.getElementById("edit_button"+no).style.display = "none";
        document.getElementById("save_button"+no).style.display = "block";
        document.getElementById("delete_button"+no).style.display = "none";
        document.getElementById("cancel_button"+no).style.display = "block";
    }
    
    show_buttons(no: number): void {                                                                                                   //show edit and delete button.
        document.getElementById("edit_button"+no).style.display = "block";
        document.getElementById("save_button"+no).style.display = "none";
        document.getElementById("delete_button"+no).style.display = "block";
        document.getElementById("cancel_button"+no).style.display = "none";
    }
}

function main(): void {   

    if(User.list.length === 0) 
        for(let i=0; i<json_list.length; i++)
            User.list.push(new User(json_list[i]));         
         
    User.prototype.createTable();   
}

function today(): void {
    document.getElementById("date_time").innerHTML = Date();
}