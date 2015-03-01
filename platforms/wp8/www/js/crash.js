var isDriving = false;
var dropVel = 0;
const var freeFall = 0.5; // <.5 m/s^2
var crashDecel = 0;
const var minAccel = 10;
var isCrashing = false;

function Monitor(dt) {
	if(isDriving) {
				var accel = getAccel();
		var accelmag = magnitude(accel)
		if(accelmag < freeFall) {
			dropVel += 9.8 * dt;
		}else if(accelmag > minAccel) {
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
}

function getAccel() {

}

function magnitude(Vec) {
	return Math.sqrt(Vec.x*Vec.x + Vec.y * Vec.y + Vec.z * Vec.z);
}

function Vector(x, y, z) {
	return {"x":x, "y":y, "z":z};
}

function crashed(decel) {

}