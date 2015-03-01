var isDriving = false;
var dropVel = 0;;
var crashDecel = 0;
var isCrashing = false;
const MIN_CRASH_ACCEL = 14; // > gravity + 1G braking
const FREE_FALL = 0.5;
const ACCEL_MONITOR_INTERVAL = 25;
const GRAVITY = 9.8;

function registerWatcher() {
	navigator.geolocation.watchPosition (
		function (accel) {
			if(isDriving) {
				var accelmag = magnitude(accel)
				if(accelmag < FREE_FALL) {
					dropVel += GRAVITY * ACCEL_MONITOR_INTERVAL;
				}else if(accelmag > MIN_CRASH_ACCEL) {
					isCrashing = true;
					crashDecel += magnitude(accel) * dt;
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

}