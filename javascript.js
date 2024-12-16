function hideIntro() {
  document.getElementById("begin").style.display = "none";
  document.getElementById("cave").play();
}
function showPrompt() {
  console.log("x");
  document.getElementById("sewer").style.display = "block";
}
function hidePrompt() {
  document.getElementById("sewer").style.display = "none";
}
function showKey() {
  document.getElementById("skelly").style.display = "flex";
}
function hideKey() {
  document.getElementById("skelly").style.display = "none";
}
function showRoom() {
  document.getElementById("arrow").style.display = "flex";
}
function hideRoom() {
  document.getElementById("arrow").style.display = "none";
}
function showMisc() {
  document.getElementById("poly").style.display = "flex";
}
function hideMisc() {
  document.getElementById("poly").style.display = "none";
}
function showNine() {
  document.getElementById("Nine").style.display = "flex";
}
function hideNine() {
  document.getElementById("Nine").style.display = "none";
}
function showBlood() {
  document.getElementById("hand").style.display = "flex";
}
function hideBlood() {
  document.getElementById("hand").style.display = "none";
}

function showChart() {
  document.getElementById("chart").style.display = "flex";
}
function hideChart() {
  document.getElementById("chart").style.display = "none";
}

function showRid() {
  document.getElementById("rid").style.display = "flex";
}
function hideRid() {
  document.getElementById("rid").style.display = "none";
}

function showSS() {
  document.getElementById("ss").style.display = "flex";
  document.getElementById("cave").pause();
  document.getElementById("sun").play();
}
function hideSS() {
  document.getElementById("ss").style.display = "none";
  document.getElementById("sun").pause();
  document.getElementById("cave").play();
}

function checkAnswerBox3() {
  const userAnswer = document
    .getElementById("userAnswerBox3")
    .value.trim()
    .toLowerCase();
  const feedback = document.getElementById("answerFeedback3");

  if (userAnswer === "fifth = eight" || userAnswer === "fifth=eight") {
    feedback.style.color = "green";
    feedback.textContent = "Not the last number, but im closer...";

    // Optionally unlock or display new content
    unlockNextStep();
  } else {
    feedback.style.color = "red";
    feedback.textContent =
      "Doesn't add up, spelling error? Don't type the underlines?...";
  }
}

function checkAnswerBox2() {
  const userAnswer = document
    .getElementById("userAnswerBox2")
    .value.trim()
    .toLowerCase();
  const feedback = document.getElementById("answerFeedback2");

  if (userAnswer === "second two" || userAnswer === "2") {
    feedback.style.color = "green";
    feedback.textContent = "FIRSTLY, this person had time to write this???";

    // Optionally unlock or display new content
    unlockNextStep();
  } else {
    feedback.style.color = "red";
    feedback.textContent = "Incorrect. You might need a mirror...";
  }
}

function checkAnswerBox() {
  const userAnswer = document
    .getElementById("userAnswerBox")
    .value.trim()
    .toLowerCase();
  const feedback = document.getElementById("answerFeedback");

  if (userAnswer === "nine" || userAnswer === "9") {
    feedback.style.color = "green";
    feedback.textContent = "Correct! You've unlocked the second number...";

    // Optionally unlock or display new content
    unlockNextStep();
  } else {
    feedback.style.color = "red";
    feedback.textContent =
      "Incorrect. The answer is one word and has 4 letters. Try matching the lines up.";
  }
}

// Example of a function to unlock new content or provide a clue
function unlockNextStep() {
  const nextClue = document.getElementById("nextClue");
  nextClue.style.display = "block"; // Display the next clue or step
}

function escapeNow() {
  // Navigate to the next website
  window.location.href =
    "https://emilyspicybeatz2.github.io/BackroomsProjectEnding/"; // Replace with your target URL
}

function checkAnswer() {
  const correctAnswer = "291386";
  const userAnswer = document
    .getElementById("userAnswer")
    .value.trim()
    .toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.style.color = "green";
    feedback.textContent = "The grate finally moves, and you run";
    document.getElementById("sw").remove();
    document.getElementById("sewerdiv").add(escapeNow());
    // Add your logic to move to the next part of the escape room here
  } else {
    feedback.style.color = "red";
    feedback.textContent = "You try the lock, it didn't budge...";
  }
}

function onVideoEnd() {
  document.getElementById("vidc").style.display = "none";
  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    countdownElement.textContent = `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;

    console.log(time);
    if (time < 0) {
      clearInterval(interval);
      checkTime();
    } else {
      checkTime();
    }
    time--;
  }, 1000);
}

// Time countdown
let time = 4 * 60;

const countdownElement = document.getElementById("countdown");

function checkTime() {
  // Change background color (with RGBA transparency)
  if (time <= 3 * 60) {
    document.getElementById("box1").style.backgroundColor =
      "rgba(127, 255, 212, 0.4)"; // Aqua with opacity
  }
  if (time <= 2 * 60) {
    document.getElementById("box2").style.backgroundColor =
      "rgba(127, 255, 212, 0.4)";
  }
  if (time <= 1 * 60) {
    document.getElementById("box3").style.backgroundColor =
      "rgba(127, 255, 212, 0.4)";
  }
  if (time <= 0) {
    document.getElementById("box4").style.backgroundColor =
      "rgba(127, 255, 212, 0.4)";
    countdownElement.textContent = "GG's Chat, you drowned T-T";
    document.getElementById("ded").play();
    document.getElementById("cave").pause();

    // Wait 10 seconds before reloading the page
    setTimeout(() => {
      location.reload();
    }, 10000);
  }
}

document.getElementById("intro").addEventListener("ended", onVideoEnd);

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("poly");
  const openButton = document.getElementById("openModalButton"); // Replace with the correct button ID
  const closeButton = modal.querySelector(".close-button");
  const overlay = modal;

  // Open modal
  openButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Close modal on close button click
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on clicking outside modal-content
  overlay.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Optional: Close modal on 'Escape' key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});
