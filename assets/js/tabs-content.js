/**
 * Tabs Content Component
 * A reusable component for creating tabbed content with dynamic data rendering
 */
class TabsContentComponent {
  constructor(containerSelector, data, options = {}) {
    this.container = document.querySelector(containerSelector);
    this.data = data;
    this.options = {
      defaultTab: options.defaultTab || Object.keys(data)[0],
      tabButtonClass: options.tabButtonClass || "tab-btn",
      contentContainerClass: options.contentContainerClass || "tab-content",
      activeButtonClass: options.activeButtonClass || ["active", "btn-primary"],
      inactiveButtonClass: options.inactiveButtonClass || ["btn-secondary"],
      ...options,
    };

    this.tabButtons = null;
    this.tabContentContainer = null;

    this.init();
  }

  init() {
    if (!this.container) {
      console.error("Container not found for TabsContentComponent");
      return;
    }

    this.setupElements();
    this.setupEventListeners();
    this.renderDefaultContent();
  }

  setupElements() {
    this.tabButtons = this.container.querySelectorAll(
      `.${this.options.tabButtonClass}`
    );
    this.tabContentContainer =
      this.container.querySelector(`#${this.options.contentContainerClass}`) ||
      this.container.querySelector(`.${this.options.contentContainerClass}`);

    if (!this.tabContentContainer) {
      console.error("Tab content container not found");
    }
  }

  setupEventListeners() {
    if (!this.tabButtons) return;

    this.tabButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        this.handleTabClick(button);
      });
    });
  }

  handleTabClick(clickedButton) {
    // Remove active classes from all buttons
    this.tabButtons.forEach((btn) => {
      this.options.activeButtonClass.forEach((cls) =>
        btn.classList.remove(cls)
      );
      this.options.inactiveButtonClass.forEach((cls) => btn.classList.add(cls));
    });

    // Add active classes to clicked button
    this.options.activeButtonClass.forEach((cls) =>
      clickedButton.classList.add(cls)
    );
    this.options.inactiveButtonClass.forEach((cls) =>
      clickedButton.classList.remove(cls)
    );

    // Get tab name and render content
    const tabName = clickedButton.dataset.tabName;
    if (this.data[tabName]) {
      this.renderContent(this.data[tabName]);
    }
  }

  renderContent(data) {
    if (!this.tabContentContainer) return;

    let contentHtml = "";
    data.forEach((item) => {
      switch (item.type) {
        case "paragraph":
          contentHtml += `<p class="f-size-20-contact text-white">${item.content}</p>`;
          break;
        case "heading":
          contentHtml += `<h4 class="f-size-20-contact text-white">${item.content}</h4>`;
          break;
        case "list":
          const listType = item.listType || "ul"; // ul (unordered) or ol (ordered)
          const listClass = item.class
            ? ` class="${item.class} f-size-20-contact text-white"`
            : "";
          contentHtml += `<${listType}${listClass}>`;
          item.items?.forEach((listItem) => {
            if (typeof listItem === "string") {
              contentHtml += `<li class="f-size-20-contact text-white">${listItem}</li>`;
            } else if (typeof listItem === "object") {
              // Support for nested lists or complex list items
              contentHtml += `<li>`;
              if (listItem.content) {
                contentHtml += listItem.content;
              }
              if (listItem.sublist) {
                const sublistType = listItem.sublist.listType || "ul";
                const sublistClass = listItem.sublist.class
                  ? ` class="${listItem.sublist.class}"`
                  : "";
                contentHtml += `<${sublistType}${sublistClass}>`;
                listItem.sublist.items?.forEach((subItem) => {
                  contentHtml += `<li>${subItem}</li>`;
                });
                contentHtml += `</${sublistType}>`;
              }
              contentHtml += `</li>`;
            }
          });
          contentHtml += `</${listType}>`;
          break;
        case "link":
          contentHtml += `<a href="${item.url}" class="${item.class || ""}" ${
            item.target ? `target="${item.target}"` : ""
          }>${item.content}</a>`;
          break;
        case "image":
          contentHtml += `<img src="${item.src}" alt="${
            item.alt || ""
          }" class="${item.class || "img-fluid"}" />`;
          break;
        default:
          contentHtml += `<div>${item.content}</div>`;
      }
    });

    this.tabContentContainer.innerHTML = contentHtml;
  }

  renderDefaultContent() {
    if (this.data[this.options.defaultTab]) {
      this.renderContent(this.data[this.options.defaultTab]);
    }
  }

  // Public methods for external control
  switchToTab(tabName) {
    const targetButton = Array.from(this.tabButtons).find(
      (btn) => btn.dataset.tabName === tabName
    );
    if (targetButton) {
      this.handleTabClick(targetButton);
    }
  }

  updateData(newData) {
    this.data = newData;
    this.renderDefaultContent();
  }

  destroy() {
    if (this.tabButtons) {
      this.tabButtons.forEach((button) => {
        button.removeEventListener("click", this.handleTabClick);
      });
    }
  }
}

// Usage example and data structure reference
const exampleData = {
  privacyPolicy: [
    {
      type: "paragraph",
      content:
        "โรงไฟฟ้าบีแอลซีพีฯ ให้ความสำคัญกับการกำหนดมาตรการเพื่อคุ้มครองข้อมูลส่วนบุคคล...",
    },
    {
      type: "heading",
      content: "นโยบายคุ้กกี้",
    },
    {
      type: "list",
      listType: "ul", // ul = unordered list (•), ol = ordered list (1,2,3)
      class: "list-group", // optional CSS class
      items: [
        "ข้อมูลส่วนบุคคลจะถูกเก็บรักษาไว้อย่างปลอดภัย",
        "เราไม่จะไม่เปิดเผยข้อมูลโดยไม่ได้รับอนุญาต",
        "ผู้ใช้งานสามารถขอแก้ไขหรือลบข้อมูลได้",
      ],
    },
  ],
  cookiesPolicy: [
    {
      type: "heading",
      content: "คุ้กกี้คืออะไร",
    },
    {
      type: "paragraph",
      content: "คุ้กกี้คือไฟล์ข้อความขนาดเล็ก...",
    },
    {
      type: "list",
      listType: "ol", // Ordered list (1, 2, 3...)
      items: [
        "คุ้กกี้ที่จำเป็นสำหรับการทำงานของเว็บไซต์",
        "คุ้กกี้สำหรับวิเคราะห์การใช้งาน",
        "คุ้กกี้เพื่อการตลาด",
      ],
    },
  ],
  userRights: [
    {
      type: "heading",
      content: "สิทธิของผู้ใช้งาน",
    },
    {
      type: "list",
      listType: "ul",
      items: [
        "สิทธิในการเข้าถึงข้อมูลส่วนบุคคล",
        {
          content: "สิทธิในการแก้ไขข้อมูล รวมถึง:",
          sublist: {
            listType: "ol",
            class: "ms-3", // margin-start for indentation
            items: [
              "การแก้ไขข้อมูลที่ไม่ถูกต้อง",
              "การอัปเดตข้อมูลใหม่",
              "การเพิ่มข้อมูลที่จำเป็น",
            ],
          },
        },
        "สิทธิในการลบข้อมูลส่วนบุคคล",
        "สิทธิในการคัดค้านการใช้ข้อมูล",
      ],
    },
  ],
};

/* 
วิธีการใช้งาน List Parameters:

1. Simple Unordered List (•):
{
  type: "list",
  listType: "ul", // หรือไม่ใส่ (default เป็น ul)
  items: [
    "รายการที่ 1",
    "รายการที่ 2", 
    "รายการที่ 3"
  ]
}

2. Ordered List (1, 2, 3...):
{
  type: "list",
  listType: "ol",
  items: [
    "ขั้นตอนที่ 1",
    "ขั้นตอนที่ 2",
    "ขั้นตอนที่ 3"
  ]
}

3. List with CSS Classes:
{
  type: "list",
  listType: "ul",
  class: "list-group list-group-flush",
  items: [
    "รายการพิเศษ 1",
    "รายการพิเศษ 2"
  ]
}

4. Nested List (List ซ้อน List):
{
  type: "list", 
  listType: "ul",
  items: [
    "รายการหลัก 1",
    {
      content: "รายการหลัก 2 ที่มีรายการย่อย:",
      sublist: {
        listType: "ol", // หรือ "ul"
        class: "ms-3", // เพิ่ม margin สำหรับการเยื้อง
        items: [
          "รายการย่อย 1",
          "รายการย่อย 2",
          "รายการย่อย 3"
        ]
      }
    },
    "รายการหลัก 3"
  ]
}
*/

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = TabsContentComponent;
}

// Make available globally
window.TabsContentComponent = TabsContentComponent;
