var studentForm = document.getElementById('student-form');

var stud_id = document.getElementById('stud_id');
var stud_title = document.getElementById('stud_title');
var stud_other = document.getElementById('stud_other');
var stud_firstname = document.getElementById('stud_firstname');
var stud_lastname = document.getElementById('stud_lastname');
var stud_dob = document.getElementById('stud_dob');
var stud_guardian = document.getElementById('stud_guardian');
var stud_permission = document.getElementById('stud_permission');
var stud_subject = document.getElementById('stud_subject');
var stud_mobile = document.getElementById('stud_mobile');
var stud_email = document.getElementById('stud_email');
var stud_line1 = document.getElementById('stud_line1');
var stud_line2 = document.getElementById('stud_line2');
var stud_town = document.getElementById('stud_town');
var stud_county = document.getElementById('stud_county');
var stud_eircode = document.getElementById('stud_eircode');

var stud_insertBtn = document.getElementById('stud_insert');
var stud_searchBtn = document.getElementById('stud_search');
var stud_deleteBtn = document.getElementById('stud_delete');

var stud_uri = 'http://localhost:5000/exam/students';

document.getElementById('student-form').addEventListener('submit', async function (event) {
    event.preventDefault();
});

stud_insertBtn.addEventListener('click', ()=>{
    console.log("insert");
    insertStudent();
})
stud_searchBtn.addEventListener('click', ()=>{
    console.log("search");
    findStudent();
})
stud_deleteBtn.addEventListener('click', ()=>{
    console.log("delete");
    deleteStudent();
})


async function insertStudent(){
    stud_id = stud_id.value;
    stud_title = stud_title.value;
    stud_other = stud_other.value;
    stud_firstname = stud_firstname.value;
    stud_lastname = stud_lastname.value;
    stud_dob = stud_dob.value;
    stud_guardian = stud_guardian.value;
    stud_permission = stud_permission.value;
    stud_subject = stud_subject.value;
    stud_mobile = stud_mobile.value;
    stud_email = stud_email.value;
    stud_line1 = stud_line1.value;
    stud_line2 = stud_line2.value;
    stud_town = stud_town.value;
    stud_county = stud_county.value;
    stud_eircode = stud_eircode.value;

    const stud_homeAddress = {
        line1: stud_line1,
        line2: stud_line2,
        town: stud_town,
        county: stud_county,
        eircode: stud_eircode
    }

    const student = {
        id: stud_id,
        title: stud_title,
        other: stud_other,
        firstname: stud_firstname,
        lastname: stud_lastname,
        dob: stud_dob,
        guardian: stud_guardian,
        permission: stud_permission,
        subject: stud_subject,
        mobile: stud_mobile,
        email: stud_email,
        homeAddress: stud_homeAddress
    };
    console.log(student);
    try {
        const res = await fetch(stud_uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set the Content-Type header to specify JSON format
            },
            body: JSON.stringify(student)
        })
        if(res.ok){
            console.log("Student inserted");
            const resData = await res.json();
            console.log(resData.message);
            studentForm.reset();
        }else{
            const err = await res.json();
            console.log("Student not inserted");
            console.log("Error creating student: " + err.message);
            studentForm.reset();
        }
    } catch (error) {
        console.log("Error inserting student using form: " + error);
        console.log("Student not inserted");
        studentForm.reset();
    }
}

async function findStudent(){
    try {
        stud_id = stud_id.value;
        var stud_endpoint = 'http://localhost:5000/exam/students/' + stud_id;
        console.log(stud_endpoint); 

        const res = await fetch(stud_endpoint);
        const data = await res.json();

        stud_title.value = data.body.title;
        stud_firstname.value = data.body.firstname;
        stud_lastname.value = data.body.lastname;
        stud_other.value = data.body.other;
        stud_dob.value = data.body.dob;
        stud_guardian.value = data.body.guardian;
        stud_permission.value = data.body.permission;
        stud_subject.value = data.body.subject;
        stud_mobile.value = data.body.mobile;
        stud_email.value = data.body.email;
        stud_line1.value = data.body.homeAddress.line1;
        stud_line2.value = data.body.homeAddress.line2;
        stud_town.value = data.body.homeAddress.town;
        stud_county.value = data.body.homeAddress.county;
        stud_eircode.value = data.body.homeAddress.eircode;
        console.log("Student Displayed!");
    } catch (error) {
        console.log("Error finding student: " + error);
    }
}

async function deleteStudent(){
    try {
        stud_id = stud_id.value;
        var stud_endpoint2 = 'http://localhost:5000/exam/students/' + stud_id;
        console.log(stud_endpoint2); 
    
        const res = await fetch(stud_endpoint2, {
            method: 'DELETE',
        });
        alert('Student deleted successfully!');
        console.log("Student Deleted!");
        if (response.ok) {
            // Display a success message or perform any additional actions
            alert('Student deleted successfully!');
            clearForm(); // Optionally clear the form after deletion
        } else {
            // Display an error message if the student deletion failed
            const data = await response.json();
            alert(data.message);
        } 
    } catch (error) {
        console.log("Error deleting student: " + error);
    }
}

