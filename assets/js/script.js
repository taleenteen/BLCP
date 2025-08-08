const allNavItems = document.querySelectorAll(".sidebar-link, .f-link");

allNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    allNavItems.forEach((otherItem) => {
      otherItem.classList.remove("active-link");
    });

    item.classList.add("active-link");

    const parentCollapse = item.closest(".collapse");
    if (parentCollapse) {
      const parentButtonId = parentCollapse.id;
      const parentButton = document.querySelector(
        `[data-bs-target="#${parentButtonId}"]`
      );

      if (parentButton) {
        parentButton.classList.add("active-link");
      }
    }
  });
});
