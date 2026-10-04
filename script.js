const targetDate = new Date("2026-11-01T07:55:00+01:00");

function updateCountdown() {

  const now = new Date();
  const difference = targetDate - now;

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  if (difference <= 0) {

    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    document.querySelector(".countdown").innerHTML = `
      <div style="
        grid-column: 1 / -1;
        padding: 40px;
        border: 1px solid rgba(231,199,106,0.4);
        color: #e7c76a;
        font-family: Oswald, sans-serif;
        font-size: 30px;
        letter-spacing: 3px;
      ">
        MISSION STARTED
      </div>
    `;

    return;
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


function checkCode() {

  const input = document.getElementById("secretCode");
  const result = document.getElementById("secretResult");

  const enteredCode = input.value.trim().toUpperCase();

  const correctCode = "ELITE2026";

  if (enteredCode === correctCode) {

    result.innerHTML = `
      🔓 ZUGANG GEWÄHRT<br>
      <span style="color:#aaa;font-size:13px;">
        Ihr seid tatsächlich die Elite.
        Mehr Informationen gibt es trotzdem nicht. 😎
      </span>
    `;

  } else {

    result.innerHTML = `
      🔒 ZUGANG VERWEIGERT<br>
      <span style="color:#777;font-size:13px;">
        Netter Versuch. Die Mission bleibt geheim.
      </span>
    `;
  }
}


document
  .getElementById("secretCode")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      checkCode();
    }

  });
