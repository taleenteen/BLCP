console.log(
  "script.js loaded - sidebar functionality handled by components.js"
);

// Enhanced Search functionality with pushing effect
document.addEventListener("DOMContentLoaded", function () {
  const searchToggleBtn = document.getElementById("searchToggleBtn");
  const searchInputWrapper = document.getElementById("searchInputWrapper");
  const searchInput = document.getElementById("searchInput");
  const closeSearchBtn = document.getElementById("closeSearchBtn");
  const searchSuggestions = document.getElementById("searchSuggestions");

  if (!searchToggleBtn || !searchInputWrapper) return;

  let isSearchExpanded = false;
  let searchTimeout;

  // Sample search data - replace with your actual data
  const searchData = [
    { title: "เกี่ยวกับเรา", url: "aboutus/index.html" },
    { title: "About Us", url: "aboutus/index-en.html" },
    { title: "วิสัยทัศน์", url: "aboutus/vision.html" },
    { title: "Vision", url: "aboutus/vision-en.html" },
    { title: "ผู้นำองค์กร", url: "aboutus/leadership.html" },
    { title: "Leadership", url: "aboutus/leadership-en.html" },
    { title: "สิ่งแวดล้อม", url: "aboutus/environment/index.html" },
    { title: "Environment", url: "aboutus/environment/index-en.html" },
    { title: "ข่าวสาร", url: "news/daily-news.html" },
    { title: "News", url: "news/daily-news-en.html" },
    { title: "ติดต่อเรา", url: "contact/complaint-form.html" },
    { title: "Contact Us", url: "contact/complaint-form-en.html" },
    { title: "ความยั่งยืน", url: "sustainability/index.html" },
    { title: "Sustainability", url: "sustainability/index-en.html" },
  ];

  // Toggle search function with pushing effect
  function toggleSearch() {
    if (!isSearchExpanded) {
      expandSearch();
    } else {
      collapseSearch();
    }
  }

  function expandSearch() {
    isSearchExpanded = true;
    searchInputWrapper.classList.add("expanded");

    // Add slight delay before focusing to ensure smooth animation
    setTimeout(() => {
      searchInput.focus();
    }, 200);

    // Hide search toggle button temporarily for better UX
    searchToggleBtn.style.opacity = "0.7";

    // Add event listener for outside clicks
    setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 100);
  }

  function collapseSearch() {
    isSearchExpanded = false;
    searchInputWrapper.classList.remove("expanded");
    searchInput.value = "";
    hideSuggestions();

    // Restore search toggle button
    searchToggleBtn.style.opacity = "1";

    // Remove event listener for outside clicks
    document.removeEventListener("click", handleOutsideClick);
  }

  function handleOutsideClick(event) {
    const searchWrapper = searchToggleBtn.closest(".search-wrapper");
    if (searchWrapper && !searchWrapper.contains(event.target)) {
      collapseSearch();
    }
  }

  function showSuggestions(results) {
    if (results.length === 0) {
      hideSuggestions();
      return;
    }

    const resultsHTML = results
      .map(
        (item) =>
          `<div class="search-suggestion-item" data-url="${item.url}">
                ${item.title}
            </div>`
      )
      .join("");

    searchSuggestions.innerHTML = `<div class="search-results">${resultsHTML}</div>`;
    searchSuggestions.style.display = "block";

    // Add click event listeners to suggestion items
    const suggestionItems = searchSuggestions.querySelectorAll(
      ".search-suggestion-item"
    );
    suggestionItems.forEach((item) => {
      item.addEventListener("click", function () {
        const url = this.getAttribute("data-url");
        window.location.href = url;
      });
    });
  }

  function hideSuggestions() {
    searchSuggestions.style.display = "none";
    searchSuggestions.innerHTML = "";
  }

  function performSearch(query) {
    if (!query.trim()) {
      hideSuggestions();
      return;
    }

    const results = searchData
      .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 8); // Limit to 8 results

    showSuggestions(results);
  }

  // Event listeners
  searchToggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleSearch();
  });

  closeSearchBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    collapseSearch();
  });

  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(this.value);
    }, 300); // Debounce search
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      collapseSearch();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const firstSuggestion = searchSuggestions.querySelector(
        ".search-suggestion-item"
      );
      if (firstSuggestion) {
        const url = firstSuggestion.getAttribute("data-url");
        window.location.href = url;
      }
    }
  });

  // Prevent search wrapper clicks from bubbling
  const searchWrapper = searchToggleBtn.closest(".search-wrapper");
  if (searchWrapper) {
    searchWrapper.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 480 && isSearchExpanded) {
      // Adjust search width on very small screens
      searchInputWrapper.style.maxWidth = "180px";
    } else if (window.innerWidth <= 768 && isSearchExpanded) {
      searchInputWrapper.style.maxWidth = "220px";
    } else {
      searchInputWrapper.style.maxWidth = "280px";
    }
  });

  console.log("Enhanced search functionality initialized with pushing effect");
});
