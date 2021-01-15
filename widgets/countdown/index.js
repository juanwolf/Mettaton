function getParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

function formatNumber(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

function main() {
  totalSeconds = Number(getParameter("duration"));
  console.log("Total Seconds:" + totalSeconds);
  setInterval(function () {
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
    document.getElementById("countdown").innerHTML =
      formatNumber(minutes) + ":" + formatNumber(seconds);
    if (totalSeconds == 0) {
      return;
    } else {
      totalSeconds = totalSeconds - 1;
    }
  }, 1000);
}

main();
