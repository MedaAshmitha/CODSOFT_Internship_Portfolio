// first.js

// Code for 'Hire me' button
// Code for 'Hire me' button
const hireButton = document.querySelector('.hire');
hireButton.addEventListener('click', function() {
    const emailAddress = 'ashmithareddy584@gmail.com';
    const subject = 'I want to hire you';
    
    // Attempt to open the mail client using mailto: link
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    
    // Create a temporary anchor element to open mailto: link
    const tempLink = document.createElement('a');
    tempLink.href = mailtoUrl;
    
    // Trigger click on the temporary link to open email client
    tempLink.click();
    
    // Fallback if opening mailto: fails (due to browser settings/extensions)
    setTimeout(function() {
        // Check if the email client window is closed or blocked
        if (!tempLink.href.startsWith('mailto:') || tempLink.target === '_blank') {
            // Inform the user to manually compose an email
            alert('Please compose an email to ' + emailAddress + ' with the subject: ' + subject);
        }
    }, 500); // Delay to allow time for email client to open
});


const resumeButton = document.querySelector('.resume');

// Add a click event listener
resumeButton.addEventListener('click', function() {
    // Replace 'Ashmitha resume.pdf' with your actual PDF file name
    const pdfPath = 'Ashmitha resume.pdf';
    
    // Create an anchor element
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'Ashmitha_resume.pdf';
    
    // Append the anchor to the body
    document.body.appendChild(a);
    
    // Programmatically click the anchor element to trigger download
    a.click();
    
    // Clean up: remove the anchor element from the DOM
    document.body.removeChild(a);
});
