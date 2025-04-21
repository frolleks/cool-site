const tabs = document.getElementById("tabs");

const tabElems = tabs.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

function handleActiveSwitch(tabElems) {
  tabElems.forEach((elemI) => {
    elemI.addEventListener("click", () => {
      tabElems.forEach((elemJ) => {
        elemJ.classList.remove("active");
      });
      sections.forEach((s) => s.classList.remove("section-active"));

      elemI.classList.add("active");

      // fixme: sections not showing when tab is clicked
      const targetId = elemI.dataset.target;
      if (!targetId) return;

      const section = document.getElementById(targetId);
      if (section) section.classList.add("active");

      location.hash = `#${targetId}`;
    });
  });

  tabElems[0].click();
}

handleActiveSwitch(tabElems);
