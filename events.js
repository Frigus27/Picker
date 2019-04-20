function Events(){
    var isMainButtonStopped = true;

    document.getElementById("CloseButton").addEventListener('click', function() {

    });

    document.getElementById("MainButton").addEventListener('click', function(){
        if (isMainButtonStopped) {
            document.getElementById("MainButton").src = "src/pause.svg";
            // TODO: Unfinished.
            isMainButtonStopped = false;
        }
        else {
            document.getElementById("MainButton").src = "src/play.svg";
            // TODO: Unfinished.
            isMainButtonStopped = true;
        }
    });
}

module.exports = {Events};