
// Event listener for the submit button
document.getElementById('submitButton').addEventListener('click', function() {
    // Get the values from the textareas
    const studentID = document.getElementById('studentID').value;
    const courseID = document.getElementById('courseID').value;

    // Define the data object to send
    const data = {
        studentID: studentID,
        courseID: courseID
    };

    // Create the fetch POST request
    fetch('http://localhost:3000/users/attend', { // Replace 'your-endpoint-url' with the URL you're posting to
        method: 'POST', // Method itself
        headers: {
            'Content-Type': 'application/json', // Indicates the content
        },
        body: JSON.stringify(data) // We convert the JavaScript object to a JSON string
    })
        .then(response => response.json()) // Parsing the JSON string into a JavaScript object
        .then(data => {
            console.log('Success:', data); // Handling the success
        })
        .catch((error) => {
            console.error('Error:', error); // Handling the error
        });
});