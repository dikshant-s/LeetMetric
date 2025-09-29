document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-btn");
  const usernameInput = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyCircle = document.querySelector(".easy-progress");
  const mediumCircle = document.querySelector(".medium-progress");
  const hardCircle = document.querySelector(".hard-progress");
  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");
  const cardstatsContainer = document.querySelector(".stats-card");

  function validateUsername(username) {
    if (username.trim() === "") {
      alert("Username should not be empty.");
      return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching = regex.test(username);
    if (!isMatching) {
      alert("Invalid username");
    }
    return isMatching;
  }

  async function fetchUsername(username) {
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
    try {
      searchButton.textContent = "Searching...";
      searchButton.disabled = true;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Unable to fetch the user details");
      }
      const data = await response.json();
      console.log("fetched data: ", data);
      displayUserData(data);
    } catch (error) {
      statsContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
  }

  function displayUserData(data) {
    const {
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      totalEasy,
      totalMedium,
      totalHard,
      ranking,
      acceptanceRate,
    } = data;

    const easyPercentage = totalEasy ? (easySolved / totalEasy) * 100 : 0;
    const mediumPercentage = totalMedium ? (mediumSolved / totalMedium) * 100 : 0;
    const hardPercentage = totalHard ? (hardSolved / totalHard) * 100 : 0;

    cardstatsContainer.style.display = "block";

    easyLabel.textContent = `${easySolved}/${totalEasy}`;
    mediumLabel.textContent = `${mediumSolved}/${totalMedium}`;
    hardLabel.textContent = `${hardSolved}/${totalHard}`;

    easyCircle.style.setProperty("--progress-degree", `${easyPercentage}%`);
    mediumCircle.style.setProperty("--progress-degree", `${mediumPercentage}%`);
    hardCircle.style.setProperty("--progress-degree", `${hardPercentage}%`);

    cardstatsContainer.innerHTML = `
      <p><strong>Total Solved:</strong> ${totalSolved}</p>
      <p><strong>Ranking:</strong> ${ranking}</p>
      <p><strong>Acceptance Rate:</strong> ${acceptanceRate}%</p>
    `;
  }

  searchButton.addEventListener("click", function () {
    const username = usernameInput.value;
    console.log("logging username: ", username);
    if (validateUsername(username)) {
      fetchUsername(username);
    }
  });
});
