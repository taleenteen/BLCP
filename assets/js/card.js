/**
 * Card Component System with Pagination
 * รองรับการสร้าง card หลายแบบและ pagination อัตโนมัติ
 */

class CardComponent {
  constructor(options = {}) {
    this.container = options.container || document.body;
    this.itemsPerPage = options.itemsPerPage || 8;
    this.currentPage = 1;
    this.data = [];
    this.filteredData = [];
    this.cardType = options.cardType || "default";
    this.paginationContainer = null;
    this.cardsContainer = null;

    // Callbacks
    this.onCardClick = options.onCardClick || null;
    this.onPageChange = options.onPageChange || null;

    this.init();
  }

  init() {
    this.createContainers();
  }

  createContainers() {
    // สร้าง container สำหรับ cards
    this.cardsContainer = document.createElement("div");

    // กำหนด class ตามประเภท card
    if (this.cardType === "transparent") {
      this.cardsContainer.className = "cards-container row g-4"; // gap ใหญ่กว่าสำหรับ transparent
    } else {
      this.cardsContainer.className = "cards-container row g-3"; // gap ปกติ
    }

    this.container.appendChild(this.cardsContainer);

    // สร้าง container สำหรับ pagination
    this.paginationContainer = document.createElement("div");
    this.paginationContainer.className =
      "pagination-container d-flex justify-content-center mt-4";
    this.container.appendChild(this.paginationContainer);
  }

  /**
   * โหลดข้อมูลและแสดง cards
   * @param {Array} data - ข้อมูลที่จะแสดง
   */
  loadData(data) {
    this.data = data;
    this.filteredData = [...data];
    this.currentPage = 1;
    this.render();
  }

  /**
   * กรองข้อมูล
   * @param {Function} filterFn - function สำหรับกรองข้อมูล
   */
  filter(filterFn) {
    this.filteredData = this.data.filter(filterFn);
    this.currentPage = 1;
    this.render();
  }

  /**
   * แสดง cards และ pagination
   */
  render() {
    this.updateContainerClass();
    this.renderCards();
    this.renderPagination();
  }

  /**
   * อัปเดต class ของ container ตามประเภท card
   */
  updateContainerClass() {
    if (this.cardType === "transparent") {
      this.cardsContainer.className = "cards-container row g-4";
    } else {
      this.cardsContainer.className = "cards-container row g-3";
    }
  }

  /**
   * แสดง cards ตามหน้าปัจจุบัน
   */
  renderCards() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const currentData = this.filteredData.slice(startIndex, endIndex);

    this.cardsContainer.innerHTML = "";

    currentData.forEach((item, index) => {
      const card = this.createCard(item, startIndex + index);
      this.cardsContainer.appendChild(card);
    });
  }

  /**
   * สร้าง card ตามประเภทที่กำหนด
   * @param {Object} data - ข้อมูลของ card
   * @param {Number} index - ลำดับของ card
   */
  createCard(data, index) {
    const cardWrapper = document.createElement("div");

    // กำหนด class ตามประเภท card
    if (this.cardType === "transparent") {
      cardWrapper.className = "col-12 col-md-6 col-lg-4 mb-4 d-flex"; // เพิ่ม d-flex สำหรับ equal height
    } else {
      cardWrapper.className = "col-12 col-sm-6 col-md-4 col-lg-3"; // แถวละ 4 สำหรับ card อื่นๆ
    }

    let cardHTML = "";

    switch (this.cardType) {
      case "news":
        cardHTML = this.createNewsCard(data, index);
        break;
      case "blog":
        cardHTML = this.createBlogCard(data, index);
        break;
      case "product":
        cardHTML = this.createProductCard(data, index);
        break;
      case "team":
        cardHTML = this.createTeamCard(data, index);
        break;
      case "gallery":
        cardHTML = this.createGalleryCard(data, index);
        break;
      case "post":
        cardHTML = this.createPostCard(data, index);
        break;
      case "transparent":
        cardHTML = this.createTransparentCard(data, index);
        break;
      default:
        cardHTML = this.createDefaultCard(data, index);
    }

    cardWrapper.innerHTML = cardHTML;

    // เพิ่ม event listener
    if (this.onCardClick) {
      cardWrapper.addEventListener("click", () =>
        this.onCardClick(data, index)
      );
    }

    return cardWrapper;
  }

  /**
   * Card แบบ Default
   */
  createDefaultCard(data, index) {
    return `
      <div class="card h-100 shadow-sm border-0 card-hover">
        ${
          data.image
            ? `<img src="${data.image}" class="card-img-top" alt="${
                data.title || "Card image"
              }" style="height: 200px; object-fit: cover;">`
            : ""
        }
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${data.title || "ไม่มีหัวข้อ"}</h5>
          <p class="card-text flex-grow-1">${
            data.description || "ไม่มีรายละเอียด"
          }</p>
          ${
            data.date
              ? `<small class="text-muted">${new Date(
                  data.date
                ).toLocaleDateString("th-TH")}</small>`
              : ""
          }
        </div>
      </div>
    `;
  }

  /**
   * Card แบบ News
   */
  createNewsCard(data, index) {
    return `
      <div class="card h-100 shadow-sm border-0 card-hover">
        ${
          data.image
            ? `<img src="${data.image}" class="card-img-top" alt="${data.title}" style="height: 200px; object-fit: cover;">`
            : ""
        }
        <div class="card-body d-flex flex-column">
          ${
            data.category
              ? `<span class="badge bg-primary mb-2 align-self-start">${data.category}</span>`
              : ""
          }
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text flex-grow-1">${
            data.summary || data.description
          }</p>
          <div class="mt-auto">
            ${
              data.date
                ? `<small class="text-muted">${new Date(
                    data.date
                  ).toLocaleDateString("th-TH")}</small>`
                : ""
            }
            ${
              data.author
                ? `<small class="text-muted"> โดย ${data.author}</small>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Card แบบ Blog
   */
  createBlogCard(data, index) {
    return `
      <div class="card h-100 shadow-sm border-0 card-hover">
        ${
          data.image
            ? `<img src="${data.image}" class="card-img-top" alt="${data.title}" style="height: 180px; object-fit: cover;">`
            : ""
        }
        <div class="card-body d-flex flex-column">
          <h6 class="card-title">${data.title}</h6>
          <p class="card-text flex-grow-1 small">${
            data.excerpt || data.description
          }</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            ${
              data.readTime
                ? `<small class="text-muted">อ่าน ${data.readTime} นาที</small>`
                : ""
            }
            ${
              data.tags
                ? `<div class="tags">${data.tags
                    .slice(0, 2)
                    .map(
                      (tag) =>
                        `<span class="badge bg-light text-dark me-1">${tag}</span>`
                    )
                    .join("")}</div>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Card แบบ Product
   */
  createProductCard(data, index) {
    return `
      <div class="card h-100 shadow-sm border-0 card-hover">
        ${
          data.image
            ? `<img src="${data.image}" class="card-img-top" alt="${data.name}" style="height: 220px; object-fit: cover;">`
            : ""
        }
        <div class="card-body d-flex flex-column">
          <h6 class="card-title">${data.name || data.title}</h6>
          <p class="card-text flex-grow-1 small">${data.description}</p>
          ${
            data.price
              ? `<div class="price mb-2"><strong class="text-primary">฿${Number(
                  data.price
                ).toLocaleString()}</strong></div>`
              : ""
          }
          ${
            data.rating
              ? `<div class="rating mb-2">${"★".repeat(
                  Math.floor(data.rating)
                )}${"☆".repeat(5 - Math.floor(data.rating))} <small>(${
                  data.rating
                })</small></div>`
              : ""
          }
        </div>
      </div>
    `;
  }

  /**
   * Card แบบ Team
   */
  createTeamCard(data, index) {
    return `
      <div class="card h-100 shadow-sm border-0 card-hover text-center">
        ${
          data.photo
            ? `<img src="${data.photo}" class="card-img-top rounded-circle mx-auto mt-3" alt="${data.name}" style="width: 120px; height: 120px; object-fit: cover;">`
            : ""
        }
        <div class="card-body d-flex flex-column">
          <h6 class="card-title">${data.name}</h6>
          <p class="card-text text-muted">${data.position}</p>
          <p class="card-text flex-grow-1 small">${
            data.bio || data.description
          }</p>
          ${
            data.social
              ? `
            <div class="social-links mt-auto">
              ${
                data.social.facebook
                  ? `<a href="${data.social.facebook}" class="text-decoration-none me-2">📘</a>`
                  : ""
              }
              ${
                data.social.twitter
                  ? `<a href="${data.social.twitter}" class="text-decoration-none me-2">🐦</a>`
                  : ""
              }
              ${
                data.social.linkedin
                  ? `<a href="${data.social.linkedin}" class="text-decoration-none">💼</a>`
                  : ""
              }
            </div>
          `
              : ""
          }
        </div>
      </div>
    `;
  }

  /**
   * Card แบบ Gallery
   */
  createGalleryCard(data, index) {
    return `
      <div class="card h-100 shadow-sm border-0 card-hover">
        ${
          data.image
            ? `<img src="${data.image}" class="card-img-top" alt="${data.title}" style="height: 250px; object-fit: cover;">`
            : ""
        }
        <div class="card-body">
          <h6 class="card-title">${data.title}</h6>
          ${
            data.description
              ? `<p class="card-text small">${data.description}</p>`
              : ""
          }
          ${
            data.location
              ? `<small class="text-muted">📍 ${data.location}</small>`
              : ""
          }
        </div>
      </div>
    `;
  }

  /**
   * Card แบบ Post (สำหรับโพสต์/ข่าวสาร)
   */
  createPostCard(data, index) {
    return `
    <div class="card rounded-4 overflow-hidden h-100 border-0" style="width: 14.063rem; max-height: 330px">
      ${
        data.image
          ? `<img src="${data.image}" class="card-img-top rounded-t-4" alt="${
              data.title || "Post image"
            }">`
          : ""
      }
      <div class="card-body p-0 d-flex flex-column">
  <div class="p-3 flex-grow-1 d-flex flex-column">
    
    <h5 class="card-title text-center text-primary f-size-14 multiline-ellipsis text-shadow">
      ${data.title || "ไม่มีหัวข้อ"}
    </h5>
    
    <div class="d-flex align-items-center justify-content-center mt-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-calendar f-post-date me-2"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
        />
      </svg>
      <small class="f-post-date">${data.date || "ไม่ระบุวันที่"}</small>
    </div>
  </div>
</div>
        
        <div class="footer-section d-flex flex-column">
          <hr class="my-0">
          <div class="d-flex justify-content-between p-2 flex-grow-1">
            <h2 class="f-size-16 f-green d-flex justify-content-center align-items-center mb-0 text-shadow">Read more</h2>
            <button class="btn green-btn d-flex align-items-center justify-content-center p-1 rounded-circle border-0" style="width: 32px; height: 32px;">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  }

  /**
   * Card แบบ Transparent (สำหรับ card พื้นหลังโปร่งใส)
   */
  createTransparentCard(data, index) {
    return `
      <div class="card border-0 rounded-top-5 card-transparent overflow-hidden w-100 h-100 d-flex flex-column" style="min-height: 353px">
        ${
          data.image
            ? `<img src="${
                data.image
              }" class="card-img-top w-100 rounded-5" alt="${
                data.title || "Card image"
              }" style="height: 240px; object-fit: cover; flex-shrink: 0;">`
            : ""
        }
        <div class="card-body bg-transparent p-0 d-flex flex-column flex-grow-1">
          <p class="card-text text-center f-size-20 p-3 text-shadow flex-grow-1 text-clamp-3">
            ${data.description || data.text || "ไม่มีรายละเอียด"}
          </p>
          <div class="green-pagination-btn rounded-3 mt-auto mb-1" style="height: 4px; width: 100%;"></div>
        </div>
      </div>
    `;
  }

  /**
   * แสดง pagination
   */
  renderPagination() {
    const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);

    if (totalPages <= 1) {
      this.paginationContainer.innerHTML = "";
      return;
    }

    let paginationHTML =
      '<nav aria-label="Page navigation"><ul class="pagination  gap-3">';

    // Previous button
    paginationHTML += `
      <li class="page-item me-2 ${this.currentPage === 1 ? "disabled" : ""}">
        <a class="page-link bg-transparent rounded-5" href="#" data-page="${
          this.currentPage - 1
        }" aria-label="Previous">
          <span class="text-white fs-5 fw-bold" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
</svg></span>
        </a>
      </li>
    `;

    // Page numbers
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(totalPages, this.currentPage + 2);

    if (startPage > 1) {
      paginationHTML += `<li class="page-item "><a class="page-link bg-transparent rounded-5" href="#" data-page="1">1</a></li>`;
      if (startPage > 2) {
        paginationHTML += `<li class="page-item disabled"><span class="page-link bg-transparent rounded-5">...</span></li>`;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationHTML += `
        <li class="page-item  ${i === this.currentPage ? "active" : ""}">
          <a class="page-link fs-5 fw-bold bg-transparent rounded-5" href="#" data-page="${i}">${i}</a>
        </li>
      `;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationHTML += `<li class="page-item disabled"><span class="page-link bg-transparent rounded-5">...</span></li>`;
      }
      paginationHTML += `<li class="page-item "><a class="page-link fs-5 fw-bold bg-transparent rounded-5" href="#" data-page="${totalPages}">${totalPages}</a></li>`;
    }

    // Next button
    paginationHTML += `
      <li class="page-item ms-2  ${
        this.currentPage === totalPages ? "disabled" : ""
      }">
        <a class="page-link bg-transparent rounded-5" href="#" data-page="${
          this.currentPage + 1
        }" aria-label="Next">
          <span class="text-white fs-1 fw-bold" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
</svg></span>
        </a>
      </li>
    `;

    paginationHTML += "</ul></nav>";

    this.paginationContainer.innerHTML = paginationHTML;

    // เพิ่ม event listeners สำหรับ pagination
    this.paginationContainer.querySelectorAll(".page-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = parseInt(e.target.getAttribute("data-page"));
        if (
          page &&
          page !== this.currentPage &&
          page >= 1 &&
          page <= totalPages
        ) {
          this.goToPage(page);
        }
      });
    });
  }

  /**
   * ไปยังหน้าที่กำหนด
   * @param {Number} page - หมายเลขหน้า
   */
  goToPage(page) {
    this.currentPage = page;
    this.render();

    // Scroll to top of cards container
    this.cardsContainer.scrollIntoView({ behavior: "smooth", block: "start" });

    if (this.onPageChange) {
      this.onPageChange(page);
    }
  }

  /**
   * ค้นหาข้อมูล
   * @param {String} query - คำค้นหา
   * @param {Array} fields - ฟิลด์ที่จะค้นหา
   */
  search(query, fields = ["title", "description", "name"]) {
    if (!query.trim()) {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter((item) =>
        fields.some(
          (field) =>
            item[field] &&
            item[field].toLowerCase().includes(query.toLowerCase())
        )
      );
    }
    this.currentPage = 1;
    this.render();
  }

  /**
   * เรียงลำดับข้อมูล
   * @param {String} field - ฟิลด์ที่จะเรียง
   * @param {String} order - 'asc' หรือ 'desc'
   */
  sort(field, order = "asc") {
    this.filteredData.sort((a, b) => {
      let aVal = a[field];
      let bVal = b[field];

      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      if (order === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    this.currentPage = 1;
    this.render();
  }

  /**
   * ได้ข้อมูลสถิติ
   */
  getStats() {
    return {
      total: this.data.length,
      filtered: this.filteredData.length,
      currentPage: this.currentPage,
      totalPages: Math.ceil(this.filteredData.length / this.itemsPerPage),
      itemsPerPage: this.itemsPerPage,
    };
  }
}

// CSS Styles สำหรับ card hover effects
const cardStyles = `
<style>
.card-hover {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
}

.pagination .page-link {
  color: #ffffffff;
  border: 0px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.pagination .page-item.active .page-link {
  background: linear-gradient(180deg, #bed84e 0%, #ffffff 100%);
  border-color: #007bff;
  color: rgba(14, 63, 100, 1);
}

.pagination .page-item.disabled .page-link {
  color: #6c757d;
  background-color: #fff;
  border-color: #dee2e6;
}

.cards-container {
  min-height: 300px;
}

.tags .badge {
  font-size: 0.7em;
}

.social-links a {
  font-size: 1.2em;
}

/* Text clamping for transparent cards */
.text-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
  min-height: calc(1.5em * 3); /* รับประกันความสูงขั้นต่ำ */
}

/* Ensure equal height for card rows */
.cards-container.row.g-4 > [class*="col-"] {
  display: flex;
  flex-direction: column;
}

.cards-container.row.g-4 .card {
  flex: 1;
}
</style>
`;

// เพิ่ม styles ให้กับ document
if (!document.querySelector("#card-component-styles")) {
  const styleSheet = document.createElement("div");
  styleSheet.id = "card-component-styles";
  styleSheet.innerHTML = cardStyles;
  document.head.appendChild(styleSheet);
}

// Export สำหรับใช้งาน
if (typeof module !== "undefined" && module.exports) {
  module.exports = CardComponent;
} else {
  window.CardComponent = CardComponent;
}
