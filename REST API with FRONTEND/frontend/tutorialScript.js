var tutorialForm = document.getElementById('tutorial-form');

var tutu_id = document.getElementById('tutu_id');
var tutu_date = document.getElementById('tutu_date');
var tutu_time = document.getElementById('tutu_time');
var tutu_students = document.getElementById('tutu_students');
var tutu_tutor = document.getElementById('tutu_tutor');
var tutu_fee = document.getElementById('tutu_fee');
var tutu_num = document.getElementById('tutu_num');
var tutu_attendance = document.getElementById('tutu_attendance');
var tutu_subject = document.getElementById('tutu_subject');
var tutu_other = document.getElementById('tutu_other');
var tutu_notes = document.getElementById('tutu_notes');

var tutu_insertBtn = document.getElementById('tutu_insert');
var tutu_searchBtn = document.getElementById('tutu_search');
var tutu_deleteBtn = document.getElementById('tutu_delete');

var tutu_uri = 'http://localhost:5000/exam/tutorials';

document.getElementById('tutorial-form').addEventListener('submit', async function (event) {
    event.preventDefault();
});

tutu_insertBtn.addEventListener('click', ()=>{
    console.log("insert");
    insertTutorial();
})
tutu_searchBtn.addEventListener('click', ()=>{
    console.log("search");
    findTutorial();
})
tutu_deleteBtn.addEventListener('click', ()=>{
    console.log("search");
    deleteTutorial();
})

async function insertTutorial(){
    tutu_id = tutu_id.value;
    tutu_date = tutu_date.value;
    tutu_time = tutu_time.value;
    tutu_students = tutu_students.value; 
    tutu_tutor = tutu_tutor.value;
    tutu_fee = tutu_fee.value;
    tutu_num = tutu_num.value;
    tutu_attendance = tutu_attendance.value;
    tutu_subject = tutu_subject.value;
    tutu_other = tutu_other.value;
    tutu_notes = tutu_notes.value;

    const tutorial = {
        id:tutu_id,
        date:tutu_date,
        time:tutu_time,
        students:tutu_students,
        tutor:tutu_tutor,
        fee:tutu_fee,
        tutorialNum:tutu_num,
        attendance:tutu_attendance,
        subject:tutu_subject,
        other:tutu_other,
        notes:tutu_notes    
    }
    console.log(tutorial);
    try {
        const res = await fetch(tutu_uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set the Content-Type header to specify JSON format
            },
            body: JSON.stringify(tutorial)
        })
        if(res.ok){
            console.log("Tutorial inserted");
            const resData = await res.json();
            console.log(resData.message);
            tutorialForm.reset();
        }else{
            const err = await res.json();
            console.log("Tutorial not inserted");
            console.log("Error creating tutorial: " + err.message);
            tutorialForm.reset();
        }
    } catch (error) {
        console.log("Error inserting tutorial using form: " + error);
        console.log("Tutorial not inserted");
        tutorialForm.reset();
    }
}

async function findTutorial(){
    try {
        tutu_id = tutu_id.value;
        var tutu_endpoint = 'http://localhost:5000/exam/tutorials/' + tutu_id;
        console.log(tutu_endpoint); 

        const res = await fetch(tutu_endpoint);
        const data = await res.json();

        tutu_date.value = data.body.date;
        tutu_time.value = data.body.time;
        tutu_students.value = data.body.students;
        tutu_tutor.value = data.body.tutor;
        tutu_fee.value = data.body.fee;
        tutu_num.value = data.body.tutorialNum;
        tutu_attendance.value = data.body.attendance;
        tutu_subject.value = data.body.subject;
        tutu_other.value = data.body.other;
        tutu_notes.value = data.body.notes;

        console.log("Tutorial found!!!");
    } catch (error) {
        console.log("Error finding tutorial: " + error);
    }
}

async function deleteTutorial(){
    try {
        tutu_id = tutu_id.value;
        var tutu_endpoint2 = 'http://localhost:5000/exam/tutorials/' + tutu_id;
        console.log(tutu_endpoint2); 
    
        const res = await fetch(tutu_endpoint2, {
            method: 'DELETE',
        });
        alert('Tutorial deleted successfully!');
        console.log("Tutorial Deleted!");
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