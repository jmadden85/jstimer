var timer = function () {
    var button = document.querySelector('#timedButton');
    var startTime = new Date().getTime();
    //Set the date of the conference
    var endTime = new Date("April 12, 2013");
    var videoReady = false;
    //Set the exact time to enable
    //(hours, minutes, seconds, ms)
    //hours 0-23, minutes 0-59, seconds 0-59, ms 0-999
    endTime.setUTCHours(19, 48, 0, 0);
    //Set the new date with hours seconds etc.
    endTime.setTime(endTime.getTime());
    //Get the time in milliseconds since January 1, 1970 midnight
    endTime = endTime.getTime();

    //Recursive function runs ever 5 seconds
    var interval = setInterval(function () {
        //Gets current time in milliseconds since January 1, 1970 midnight
        var currTime = new Date().getTime();
        //If current time is equal or past conf date
        //Stop the recursive function, change var to true call button function
        if ( currTime >= endTime ) {
            clearInterval(interval);
            videoReady = true;
            activateButton();
        }
    }, 5000);

    function activateButton () {
        //Generate a random number between 0 and 599,999
        var randomTime = Math.floor(Math.random() * 600000);
        //Spit it out on the screen just for dev purposes
        document.getElementById('inform').innerHTML = 'Button will show in ' + randomTime / 1000 + ' seconds.';
        //Enable button after random amount of time to prevent all users from refreshing page at the same time.
        setTimeout(function () {
            button.className = 'enabled';
            button.innerHTML = 'I do something';
        }, randomTime);
    };
}();