// nav bar

const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  dropdown.style.display = "flex";
});

closeBtn.addEventListener('click', () => {
  dropdown.style.display = "none";
});

// name changing effects

const names = [
    'ವೈಭವ್', // Kannada
    'వైభవ్', // Telugu
    'Vaibhava', // English
    'வைபவ்', // Tamil
    'വൈഭവ്', // Malayalam
    'Vaibhava', // English
    'वैभव', // Hindi
];

let currentIndex = 0;

function updateName() {
    const nameDisplay = document.getElementById('name-display');
    nameDisplay.classList.add('fade-out');
    setTimeout(() => {
        nameDisplay.textContent = names[currentIndex];
        nameDisplay.classList.remove('fade-out');
        currentIndex = (currentIndex + 1) % names.length;
    }, 500);
}

setInterval(updateName, 2000);
updateName();

// Popup display option
const openPopupButton = document.getElementById("open-popup");
const popup = document.getElementById("popup");
const closePopupButton = document.querySelector(".close");

openPopupButton.addEventListener("click", () => {
  popup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

// // Selected item display option
// function updateTabs(eventNumber, activeTab, activeLink) {
//   const tabs = ["overview", "details", "cood"];
//   const links = ["tab-hov1", "tab-hov2", "tab-hov3"].map(
//     (link, index) => `tab-hov${3 * (eventNumber - 1) + index + 1}`
//   );

//   tabs.forEach((tab, index) => {
//     const tabId = `${tab}${eventNumber}`;
//     const tabElement = document.getElementById(tabId);
//     if (tabElement) {
//       if (tab === activeTab) {
//         tabElement.classList.add("active-tab");
//       } else {
//         tabElement.classList.remove("active-tab");
//       }
//     }
//   });

//   links.forEach((link, index) => {
//     const linkElement = document.getElementById(link);
//     if (linkElement) {
//       if (link === activeLink) {
//         linkElement.classList.add("active-link");
//       } else {
//         linkElement.classList.remove("active-link");
//       }
//     }
//   });
// }

// // Usage
// function dispTab(eventNumber, tabType) {
//   const tabMap = {
//     overview: `overview${eventNumber}`,
//     details: `details${eventNumber}`,
//     cood: `cood${eventNumber}`,
//   };
//   const activeTab = tabMap[tabType];
//   const activeLink = `tab-hov${3 * (eventNumber - 1) + Object.keys(tabMap).indexOf(tabType) + 1}`;
//   updateTabs(eventNumber, activeTab, activeLink);
// }

// // Example function usage
// document.getElementById("tab-hov1").addEventListener("click", () => dispTab(1, "overview"));
// document.getElementById("tab-hov2").addEventListener("click", () => dispTab(1, "details"));
// document.getElementById("tab-hov3").addEventListener("click", () => dispTab(1, "cood"));

// // Repeat the above `addEventListener` calls for other tab-hovs as needed.

$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });