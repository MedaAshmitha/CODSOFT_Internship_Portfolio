
const hireButton = document.querySelector('.hire');
hireButton.addEventListener('click', function() {
    const emailAddress = 'ashmithareddy584@gmail.com';
    const subject = 'I want to hire you';
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    const tempLink = document.createElement('a');
    tempLink.href = mailtoUrl;
    tempLink.click();
    setTimeout(function() {
        if (!tempLink.href.startsWith('mailto:') || tempLink.target === '_blank') {
            alert('Please compose an email to ' + emailAddress + ' with the subject: ' + subject);
        }
    }, 500); 
});


const resumeButton = document.querySelector('.resume');
resumeButton.addEventListener('click', function() {
    const pdfPath = 'Ashmitha resume.pdf';
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'Ashmitha_resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
