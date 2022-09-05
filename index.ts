enum Role {SuperAdmin, Admin, Subscriber};

const json_list: Array<any> = [
    ["Nav", "Deep", "Singh", "nav@gmail.com", 9876543210, 0, "Mohali", "1990-08-28"],
    ["Dev", "Roy", "Kapoor", "dev@gmail.com", 9764523865, 1, "Delhi", "1995-09-18"],
    ["Riya", " ", "Mathur", "riya@gmail.com", 9786354567, 2, "Mumbai", "2002-04-17"]
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

class User implements create_table, delete_row_table, edit_row_table, hide_show_buttons, user_data {
    
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
        this.role = arr[5]
        this.address = arr[6];      
        this.DOB = arr[7];  
    }    

    createTable() : void {
        
        DOM("load").innerHTML = "Refresh Data";

        let table: string = "<table id='table_data'>" +
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
                             "<td id="+"role_row"+count+">" +Role[i.role]+ "</td>" + 
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
                            
        DOM('divison').innerHTML = table + "</table>";         
    }      


    delete_row(no: number): void {                                                                                                     //delete button functionality
        DOM("row"+no).innerHTML="";
    }

    edit_row(no: number): void {                                                                                                       //edit button functionality

        User.prototype.hide_buttons(no);
    
        let fname_data: string = DOM("fname_row"+no).innerHTML;
        let mname_data: string = DOM("mname_row"+no).innerHTML;
        let lname_data: string = DOM("lname_row"+no).innerHTML;
        let email_data: string = DOM("email_row"+no).innerHTML;
        let phone_data: string = DOM("phone_row"+no).innerHTML;
        let role_data: string = DOM("role_row"+no).innerHTML;
        console.log(role_data);      
        let address_data: string = DOM("address_row"+no).innerHTML;
        let DOB_data: string = DOM("DOB_row"+no).innerHTML;
        
    
        DOM("fname_row"+no).innerHTML = inputField("fname_text"+no, fname_data);
        DOM("mname_row"+no).innerHTML = inputField("mname_text"+no, mname_data);
        DOM("lname_row"+no).innerHTML = inputField("lname_text"+no, lname_data);
        DOM("email_row"+no).innerHTML = inputField("email_text"+no, email_data);
        DOM("phone_row"+no).innerHTML = inputField("phone_text"+no, phone_data);
        DOM("role_row"+no).innerHTML = "<form> <select id=role_text"+no+"> <option value=" +Role[0]+">" +Role[0]+"</option> <option value=" +Role[1]+">" +Role[1]+"</option> <option value=" +Role[2]+">" +Role[2]+"</option>" +"</select> </form>";
        DOM("address_row"+no).innerHTML = inputField("address_text"+no, address_data);
        DOM("DOB_row"+no).innerHTML = "<input type='date' id='DOB_text"+no+"' value='DOB_data'>";
    
        DOM("cancel_button"+no).addEventListener("click", function (): void {                                                         //cancel button functionality
    
            DOM("fname_row"+no).innerHTML = fname_data;
            DOM("mname_row"+no).innerHTML = mname_data;
            DOM("lname_row"+no).innerHTML = lname_data;
            DOM("email_row"+no).innerHTML = email_data;
            DOM("phone_row"+no).innerHTML = phone_data; 
            DOM("role_row"+no).innerHTML = role_data;            
            DOM("address_row"+no).innerHTML = address_data;
            DOM("DOB_row"+no).innerHTML = DOB_data;
         
            User.prototype.show_buttons(no);
        });
    
        DOM("save_button"+no).addEventListener("click", function (): void {                                                           //save button functionality
            
            DOM("fname_row"+no).innerHTML = (DOM("fname_text"+no) as HTMLInputElement).value;
            DOM("mname_row"+no).innerHTML = (DOM("mname_text"+no) as HTMLInputElement).value;
            DOM("lname_row"+no).innerHTML = (DOM("lname_text"+no) as HTMLInputElement).value;
            DOM("email_row"+no).innerHTML = (DOM("email_text"+no) as HTMLInputElement).value;
            DOM("phone_row"+no).innerHTML = (DOM("phone_text"+no) as HTMLInputElement).value; 
            DOM("role_row"+no).innerHTML = (DOM("role_text"+no) as HTMLInputElement).value;            
            DOM("address_row"+no).innerHTML = (DOM("address_text"+no) as HTMLInputElement).value;               
            if(((DOM("DOB_text"+no) as HTMLInputElement).value) === "") DOM("DOB_row"+no).innerHTML = DOB_data;
            else DOM("DOB_row"+no).innerHTML = (DOM("DOB_text"+no) as HTMLInputElement).value;
    
            User.prototype.show_buttons(no);
        });
    
    }

    hide_buttons(no: number): void {                                                                                                  //hide edit and delete button.
        DOM("edit_button"+no).style.display = "none";
        DOM("save_button"+no).style.display = "block";
        DOM("delete_button"+no).style.display = "none";
        DOM("cancel_button"+no).style.display = "block";
    }
    
    show_buttons(no: number): void {                                                                                                  //show edit and delete button.
        DOM("edit_button"+no).style.display = "block";
        DOM("save_button"+no).style.display = "none";
        DOM("delete_button"+no).style.display = "block";
        DOM("cancel_button"+no).style.display = "none";
    }
   
}

function DOM(id: string): HTMLElement {
    return(document.getElementById(id));
}

function inputField(id: string, val: string): string {
    return("<input type='text' id='" +id+ "' value='" +val+ "'>")
}


function main(): void {   

    if(User.list.length === 0) 
        for(let i=0; i<json_list.length; i++)
            User.list.push(new User(json_list[i]));         
         
    User.prototype.createTable();   
}

function today(): void {
    DOM("date_time").innerHTML = Date();
}