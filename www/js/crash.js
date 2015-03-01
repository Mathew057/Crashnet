var isDriving = false;
var dropVel = 0;;
var crashDecel = 0;
var isCrashing = false;
//const MIN_CRASH_ACCEL = 14; // > gravity + 1G braking
//const FREE_FALL = 0.5;
//const ACCEL_MONITOR_INTERVAL = 10;
//const GRAVITY = 9.8;

function registerWatcher() {
	navigator.geolocation.watchPosition (
		function (accel) {
			if(isDriving) {
				var accelmag = magnitude(accel)
				if(accelmag < FREE_FALL) {
					dropVel += GRAVITY * ACCEL_MONITOR_INTERVAL;
				}else if(accelmag > MIN_CRASH_ACCEL) {
					isCrashing = true;
					crashDecel += magnitude(accel) * ACCEL_MONITOR_INTERVAL;
				}else if(isCrashing) {
					isCrashing = false;
					if(crashDecel > dropVel * 1.3) {
						crashed(crashDecel);
					}
					dropVel = 0;
					crashDecel = 0;
				}
			}
		},
		function () {},
		{frequency:ACCEL_MONITOR_INTERVAL}
	);
}

function getAccel(callback) {
	navigator.accelerometer.getCurrentAcceleration();
}

function magnitude(Vec) {
	return Math.sqrt(Vec.x*Vec.x + Vec.y * Vec.y + Vec.z * Vec.z);
}

function Vector(x, y, z) {
	return {"x":x, "y":y, "z":z};
}

function crashed(decel) {
	var msg = "test TEST";
	jQuery.ajax({
		type:"POST",
		url:"https://api.twilio.com/2010-04-01/Accounts/AC4ef0f686e173833b4fc146530a2e3a0b/Messages.json",
		data:{
			From:"+19032744826",
			To:"9034566041",
			Body:msg},
		headers: {
			"Authorization":"Basic "+ btoa("AC4ef0f686e173833b4fc146530a2e3a0b:0b5e70297d9edd6677bed365291c68f7")
		}
	});
}