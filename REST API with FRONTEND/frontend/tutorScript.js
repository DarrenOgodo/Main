var tutorForm = document.getElementById('tutor-form');

var tut_id = document.getElementById('tut_id');
var tut_title = document.getElementById('tut_title');
var tut_other = document.getElementById('tut_other');
var tut_firstname = document.getElementById('tut_firstname');
var tut_lastname = document.getElementById('tut_lastname');
var tut_mobile = document.getElementById('tut_mobile');
var tut_email = document.getElementById('tut_email');
var tut_line1 = document.getElementById('tut_line1');
var tut_line2 = document.getElementById('tut_line2');
var tut_town = document.getElementById('tut_town');
var tut_county = document.getElementById('tut_county');
var tut_eircode = document.getElementById('tut_eircode');

var tut_insertBtn = document.getElementById('tut_insert');
var tut_searchBtn = document.getElementById('tut_search');
var tut_deleteBtn = document.getElementById('tut_delete');

var tut_uri = 'http://localhost:5000/exam/tutors';

document.getElementById('tutor-form').addEventListener('submit', async function (event) {
    event.preventDefault();
});

tut_insertBtn.addEventListener('click', ()=>{
    console.log("insert");
    insertTutor();
})
tut_searchBtn.addEventListener('click', ()=>{
    console.log("search");
    findTutor();
})
tut_deleteBtn.addEventListener('click', ()=>{
    console.log("delete");
    deleteTutor();
})

async function insertTutor(){
    tut_id = tut_id.value;
    tut_title = tut_title.value;
    tut_other = tut_other.value;
    tut_firstname = tut_firstname.value;
    tut_lastname = tut_lastname.value;
    tut_mobile = tut_mobile.value;
    tut_email = tut_email.value;
    tut_line1 = tut_line1.value;
    tut_line2 = tut_line2.value;
    tut_town = tut_town.value;
    tut_county = tut_county.value;
    tut_eircode = tut_eircode.value;

    const tut_homeAddress = {
        line1: tut_line1,
        line2: tut_line2,
        town: tut_town,
        county: tut_county,
        eircode: tut_eircode
    }

    const tutor = {
        id: tut_id,
        title: tut_title,
        other: tut_other,
        firstname: tut_firstname,
        lastname: tut_lastname,
        mobile: tut_mobile,
        email: tut_email,
        homeAddress: tut_homeAddress
    }
    console.log(tutor);
    try {
        const res = await fetch(tut_uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set the Content-Type header to specify JSON format
            },
            body: JSON.stringify(tutor)
        })
        if(res.ok){
            console.log("Tutor inserted");
            const resData = await res.json();
            console.log(resData.message);
            tutorForm.reset();
        }else{
            const err = await res.json();
            console.log("Tutor not inserted");
            console.log("Error creating tutor: " + err.message);
            tutorForm.reset();
        }
    } catch (error) {
        console.log("Error inserting tutor using form: " + error);
        console.log("Tutor not inserted");
        tutorForm.reset();
    }
}

async function findTutor(){
    try {
        tut_id = tut_id.value;
        var tut_endpoint = 'http://localhost:5000/exam/tutors/' + tut_id;
        console.log(tut_endpoint); 

        const res = await fetch(tut_endpoint);
        const data = await res.json();

        tut_title.value = data.body.title;
        tut_firstname.value = data.body.firstname;
        tut_lastname.value = data.body.lastname;
        tut_other.value = data.body.other;
        tut_mobile.value = data.body.mobile;
        tut_email.value = data.body.email;
        tut_line1.value = data.body.homeAddress.line1;
        tut_line2.value = data.body.homeAddress.line2;
        tut_town.value = data.body.homeAddress.town;
        tut_county.value = data.body.homeAddress.county;
        tut_eircode.value = data.body.homeAddress.eircode;
        console.log("Tutor Displayed!");
    } catch (error) {
        console.log("Error finding tutor: " + error);
    }
}

async function deleteTutor(){
    try {
        tut_id = tut_id.value;
        var tut_endpoint2 = 'http://localhost:5000/exam/tutors/' + tut_id;
        console.log(tut_endpoint2); 
    
        const res = await fetch(tut_endpoint2, {
            method: 'DELETE',
        });
        alert('Tutor deleted successfully!');
        console.log("Tutor Deleted!");
        if (response.ok) {
            // Display a success message or perform any additional actions
            alert('Tutor deleted successfully!');
            clearForm(); // Optionally clear the form after deletion
        } else {
            // Display an error message if the student deletion failed
            const data = await response.json();
            alert(data.message);
        } 
    } catch (error) {
        console.log("Error deleting tutor: " + error);
    }
}



