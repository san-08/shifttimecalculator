function calculate() {
  var stime = document.getElementById("starttime").value;
  var etime = document.getElementById("endtime").value;
  var count = document.getElementById("employeecount").value;

  const result = calculateTimeInterval(stime, etime, count);

  const output = result.map((time, i, arr) =>{
    if(i < arr.length - 1){
        return `${formatTime(arr[i])} to ${formatTime(arr[i+1])} [Emplyoee ${i+1}]`;

    }
  }).filter(Boolean).join("<br>");

  document.getElementById("child2para").innerHTML = output;


}

function calculateTimeInterval(stime, etime, count) {
  const start = new Date(stime);
  const end = new Date(etime);
  // alert(start);
  count = parseInt(count);

  const timeSpan = end - start;
  const interval = timeSpan / count;

  // alert(interval);

  const intervals = [];
  let currentTime = new Date(start);

  for (let i = 0; i <= count; i++) {
    intervals.push(new Date(currentTime));
    currentTime = new Date(currentTime.getTime() + interval);
  }
  // alert(intervals);
  return intervals;
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} ${ampm}`;
}
