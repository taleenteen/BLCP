/**
 * Table Component System
 * รองรับการสร้าง table ที่มี pagination และ sorting
 */

class TableComponent {
  constructor(options = {}) {
    this.container = options.container || document.body;
    this.itemsPerPage = options.itemsPerPage || 10;
    this.currentPage = 1;
    this.data = [];
    this.filteredData = [];
    this.sortColumn = null;
    this.sortDirection = "asc";
    this.tableContainer = null;
    this.paginationContainer = null;

    // Callbacks
    this.onFileClick = options.onFileClick || null;
    this.onRowClick = options.onRowClick || null;
    this.onPageChange = options.onPageChange || null;

    this.init();
  }

  init() {
    this.createContainers();
  }

  createContainers() {
    // สร้าง container สำหรับ table
    this.tableContainer = document.createElement("div");
    this.tableContainer.className = "table-container";
    this.container.appendChild(this.tableContainer);

    // สร้าง container สำหรับ pagination
    this.paginationContainer = document.createElement("div");
    this.paginationContainer.className =
      "pagination-container d-flex justify-content-center mt-4";
    this.container.appendChild(this.paginationContainer);
  }

  /**
   * โหลดข้อมูลและแสดง table
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
   * ค้นหาข้อมูล
   * @param {String} query - คำค้นหา
   * @param {Array} fields - ฟิลด์ที่จะค้นหา
   */
  search(query, fields = ["name", "category"]) {
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
   * @param {String} column - column ที่จะเรียง
   */
  sort(column) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "asc";
    }

    this.filteredData.sort((a, b) => {
      let aVal = a[column];
      let bVal = b[column];

      // จัดการวันที่
      if (column === "createdDate" || column === "date") {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }

      // จัดการ string
      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      if (this.sortDirection === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    this.currentPage = 1;
    this.render();
  }

  /**
   * แสดง table และ pagination
   */
  render() {
    this.renderTable();
    this.renderPagination();
  }

  /**
   * แสดง table ตามหน้าปัจจุบัน
   */
  renderTable() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const currentData = this.filteredData.slice(startIndex, endIndex);

    let tableHTML = `
      <div class="table-responsive">
        <table class="table table-hover table-striped mb-0">
          <thead>
            <tr>
              <th scope="col" class="sortable" data-column="createdDate">
                วันที่สร้าง
              </th>
              <th scope="col" class="sortable" data-column="name">
                ชื่อ
              </th>
              <th scope="col" class="sortable" data-column="category">
                หมวดหมู่
              </th>
              <th scope="col" class="text-center">File</th>
            </tr>
          </thead>
          <tbody>
    `;

    if (currentData.length === 0) {
      tableHTML += `
        <tr>
          <td colspan="4" class="text-center text-muted py-4">
            ไม่พบข้อมูล
          </td>
        </tr>
      `;
    } else {
      currentData.forEach((item, index) => {
        tableHTML += this.createTableRow(item, startIndex + index);
      });
    }

    tableHTML += `
          </tbody>
        </table>
      </div>
    `;

    this.tableContainer.innerHTML = tableHTML;

    // เพิ่ม event listeners
    this.addEventListeners();
  }

  /**
   * สร้างแถวของ table
   * @param {Object} data - ข้อมูลของแถว
   * @param {Number} index - ลำดับของแถว
   */
  createTableRow(data, index) {
    const formattedDate = this.formatDate(data.createdDate || data.date);
    const fileName = data.fileName || data.file || "ดาวน์โหลด";

    return `
      <tr class="table-row" data-index="${index}">
  <td class="text-primary p-4 align-middle">${formattedDate}</td>
  <td class="text-primary p-4 align-middle">${data.name || "ไม่ระบุชื่อ"}</td>
  <td class="text-primary p-4 align-middle">${
    data.category || "ไม่ระบุหมวดหมู่"
  }</td>
  <td class="text-center p-4 align-middle">
    <button 
      class="btn btn-md file-btn p-2 px-3" 
      data-file="${data.fileUrl || data.file || "#"}"
      data-filename="${fileName}"
      data-index="${index}"
    >
      Download File Here
      <i class="bi bi-file-earmark-text ms-1"></i>
    </button>
  </td>
</tr>
    `;
  }

  /**
   * จัดรูปแบบวันที่
   * @param {String|Date} date - วันที่
   */
  formatDate(date) {
    if (!date) return "ไม่ระบุวันที่";

    try {
      const dateObj = new Date(date);
      return dateObj.toLocaleDateString("th-TH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "วันที่ไม่ถูกต้อง";
    }
  }

  /**
   * สร้าง icon สำหรับ sorting
   * @param {String} column - column name
   */
  getSortIcon(column) {
    if (this.sortColumn !== column) {
      return '<i class="bi bi-arrow-down-up ms-1 text-muted"></i>';
    }

    if (this.sortDirection === "asc") {
      return '<i class="bi bi-arrow-up ms-1"></i>';
    } else {
      return '<i class="bi bi-arrow-down ms-1"></i>';
    }
  }

  /**
   * เพิ่ม event listeners
   */
  addEventListeners() {
    // Sorting
    this.tableContainer.querySelectorAll(".sortable").forEach((header) => {
      header.addEventListener("click", (e) => {
        const column = e.currentTarget.getAttribute("data-column");
        this.sort(column);
      });
    });

    // File buttons
    this.tableContainer.querySelectorAll(".file-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const fileUrl = e.currentTarget.getAttribute("data-file");
        const fileName = e.currentTarget.getAttribute("data-filename");
        const index = parseInt(e.currentTarget.getAttribute("data-index"));
        const data =
          this.filteredData[index - (this.currentPage - 1) * this.itemsPerPage];

        if (this.onFileClick) {
          this.onFileClick(fileUrl, fileName, data, index);
        } else {
          // Default behavior - try to download or open file
          if (fileUrl && fileUrl !== "#") {
            window.open(fileUrl, "_blank");
          }
        }
      });
    });

    // Row clicks
    if (this.onRowClick) {
      this.tableContainer.querySelectorAll(".table-row").forEach((row) => {
        row.addEventListener("click", (e) => {
          if (
            e.target.classList.contains("file-btn") ||
            e.target.closest(".file-btn")
          ) {
            return; // Don't trigger row click if file button was clicked
          }

          const index = parseInt(e.currentTarget.getAttribute("data-index"));
          const data =
            this.filteredData[
              index - (this.currentPage - 1) * this.itemsPerPage
            ];
          this.onRowClick(data, index);
        });
      });
    }
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
      '<nav aria-label="Table pagination"><ul class="pagination">';

    // Previous button
    paginationHTML += `
      <li class="page-item ${this.currentPage === 1 ? "disabled" : ""}">
        <a class="page-link" href="#" data-page="${
          this.currentPage - 1
        }" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
    `;

    // Page numbers
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(totalPages, this.currentPage + 2);

    if (startPage > 1) {
      paginationHTML += `<li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>`;
      if (startPage > 2) {
        paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationHTML += `
        <li class="page-item ${i === this.currentPage ? "active" : ""}">
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
      `;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
      }
      paginationHTML += `<li class="page-item"><a class="page-link" href="#" data-page="${totalPages}">${totalPages}</a></li>`;
    }

    // Next button
    paginationHTML += `
      <li class="page-item ${
        this.currentPage === totalPages ? "disabled" : ""
      }">
        <a class="page-link" href="#" data-page="${
          this.currentPage + 1
        }" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
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

    // Scroll to top of table
    this.tableContainer.scrollIntoView({ behavior: "smooth", block: "start" });

    if (this.onPageChange) {
      this.onPageChange(page);
    }
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

  /**
   * รีเฟรชข้อมูล
   */
  refresh() {
    this.render();
  }

  /**
   * ล้างข้อมูลทั้งหมด
   */
  clear() {
    this.data = [];
    this.filteredData = [];
    this.currentPage = 1;
    this.render();
  }
}

// CSS Styles สำหรับ table
const tableStyles = `
<style>
.table-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.table thead th {
  font-size: 24px !important;
  font-weight: 700;
  font-style: 75 Bd;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 1rem 1.5rem;
  vertical-align: middle;
  border-bottom: 2px solid #dee2e6;
  color: white;
  background-color: rgba(38, 82, 115, 1);
}

.table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
  font-size: 1rem;
}

.table tbody {
  font-size: 24px !important;
  font-weight: 700;
  font-style: 75 Bd;
  line-height: 100%;
  letter-spacing: 0%;
}

.table-row {
  cursor: pointer;
  transition: background-color 0.2s;
}

.table-row:hover {
  background-color: rgba(0,123,255,0.1) !important;
}

.file-btn {
  font-size: 16px;
  font-weight: 700;
  font-style: 75 Bd;
  line-height: 100%;
  letter-spacing: 0%;
  background: linear-gradient(90deg, #265273 0%, #489BD9 100%);
  transition: all 0.2s;
  border-radius: 15px;
  color: white;
  border: 0px;
}

.file-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  background: linear-gradient(90deg, #FFFFFF 0%, #BED84E 100%);
  color: rgba(14, 63, 100, 1);
}

.bi-file-earmark-text {
  font-size: 1.3rem;
  font-weight: 700;
  vertical-align: middle;
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

@media (max-width: 768px) {
  .table-responsive {
    font-size: 0.875rem;
  }
  
  .file-btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
`;

// เพิ่ม styles ให้กับ document
if (!document.querySelector("#table-component-styles")) {
  const styleSheet = document.createElement("div");
  styleSheet.id = "table-component-styles";
  styleSheet.innerHTML = tableStyles;
  document.head.appendChild(styleSheet);
}

// Export สำหรับใช้งาน
if (typeof module !== "undefined" && module.exports) {
  module.exports = TableComponent;
} else {
  window.TableComponent = TableComponent;
}
