function startTime() {
	var time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	var ms = time.getMilliseconds();
	m = checkTime(m);
	s = checkTime(s);
	ms = checkTime(ms);
	document.getElementById("time").innerHTML = h + ":" + m + ":" + s + ":" + ms;
	var t = setTimeout(startTime);
}

function checkTime(i) {
	if (i<10) {i = "0" + i};
		return i;
}