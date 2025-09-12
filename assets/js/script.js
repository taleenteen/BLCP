// Sidebar active state management
function initializeSidebarActiveStates() {
  const allNavItems = document.querySelectorAll(".sidebar-link, .f-link");

  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all items
      allNavItems.forEach((otherItem) => {
        otherItem.classList.remove("active-link");
      });

      // Add active class to clicked item
      item.classList.add("active-link");

      // Check if item is inside a collapse and activate parent
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
}

// Initialize when DOM is loaded and components are ready
document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for components to load
  setTimeout(initializeSidebarActiveStates, 200);
});
