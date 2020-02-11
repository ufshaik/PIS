DNT =  () => {
    if (navigator.doNotTrack) {
        return navigator.doNotTrack
    } else if (navigator.msDoNotTrack) {
        return navigator.msDoNotTrack
    } else if (window.doNotTrack) {
        return window.doNotTrack
    } else {
        return "unknown"
    }
};
// if type doesnt exist or undefined go for effectivetype


console.log(DNT());



var connection = window.navigator.connection    ||
    window.navigator.mozConnection ||
    null;
if (connection === null) {
    console.log('No support')
} else {
    console.log('^ ^');
    var type = navigator.connection.effectiveType;
    var max = navigator.connection.downlink;
    var rtt = navigator.connection.rtt;
    var sd = navigator.connection.saveData;

    console.log(type);
    console.log(max);
    console.log(rtt);
    console.log(sd);
}



// New canvas stuff

var canvas = document.getElementById('canv');
var gl = canvas.getContext('webgl2');
var sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
console.log(gl.getSyncParameter(sync, gl.SYNC_STATUS));