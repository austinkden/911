document.getElementById('log').addEventListener('click', function() {
    const units = document.getElementById('units').value;
    const callType = document.getElementById('call-type').value;
    const address = document.getElementById('address').value;

    // Get the current date in "MMM DD YYYY" format
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const currentDate = new Date().toLocaleDateString('en-US', options).replace(',', '');

    // Get the current hour in 24-hour format
    const currentHour = new Date().getHours(); // This returns the hour as a number (0-23)

    const copy = `${units}	${callType}	${address}	${currentDate}	${currentHour}`;
    navigator.clipboard.writeText(copy);

    document.getElementById('units').value = '';
    document.getElementById('call-type').value = '';
    document.getElementById('address').value = '';

    document.getElementById('log').style.backgroundColor = 'green'

    setTimeout(() => {
        document.getElementById('log').style.backgroundColor = ''
    }, 1000);
});
