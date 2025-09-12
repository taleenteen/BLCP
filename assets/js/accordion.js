// Accordion Class for BLCP Website
// Object-oriented approach for creating accordion components

class AccordionBuilder {
  constructor(options = {}) {
    this.id = options.id || "accordion";
    this.items = options.items || [];
    this.containerClass =
      options.containerClass ||
      "container accordion d-flex flex-column p-5 gap-3";
    this.maxWidth = options.maxWidth || "925px";
    this.buttonHeight = options.buttonHeight || "66px";
  }

  // Method to add an item
  addItem(item) {
    this.items.push(item);
    return this; // For method chaining
  }

  // Method to set container class
  setContainerClass(className) {
    this.containerClass = className;
    return this;
  }

  // Method to set max width
  setMaxWidth(width) {
    this.maxWidth = width;
    return this;
  }

  // Method to set button height
  setButtonHeight(height) {
    this.buttonHeight = height;
    return this;
  }

  // Method to generate accordion HTML
  render() {
    return `
      <div class="${this.containerClass}" id="${this.id}" style="max-width: ${
      this.maxWidth
    }; margin: 0 auto; width: 100%;">
        ${this.items
          .map((item, index) => {
            const collapseId = `collapse-${this.id}-${item.id || index}`;
            const headingId = `heading-${this.id}-${item.id || index}`;
            const isFirstItem = index === 0;

            return `
            <div class="accordion-item rounded-3">
              <h2 class="accordion-header" id="${headingId}">
                <button
                  class="accordion-button accordion-btn-custom rounded-3 text-primary ${
                    isFirstItem ? "" : "collapsed"
                  }"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#${collapseId}"
                  aria-expanded="${isFirstItem ? "true" : "false"}"
                  aria-controls="${collapseId}"
                  style="height: ${this.buttonHeight}; min-height: ${
              this.buttonHeight
            };"
                >
                  <h3 class="mb-0 accordion-title">${item.title}</h3>
                </button>
              </h2>
              <div
                id="${collapseId}"
                class="accordion-collapse collapse ${isFirstItem ? "show" : ""}"
                aria-labelledby="${headingId}"
                data-bs-parent="#${this.id}"
              >
                <div class="accordion-body" style="padding: 1.5rem;">
                  ${item.content}
                </div>
              </div>
            </div>
          `;
          })
          .join("")}
      </div>
    `;
  }

  // Static method to create accordion quickly
  static create(options) {
    return new AccordionBuilder(options);
  }
}

// Original function with title support (backward compatibility)
function createAccordion(data) {
  const {
    id = "accordion",
    items = [],
    containerClass = "container accordion d-flex flex-column p-5 gap-3",
    title = null,
    maxWidth = "925px",
  } = data;

  return `
    ${title ? `<h1 class="text-white mb-0 text-center">${title}</h1>` : ""}
    <div class="${containerClass}" id="${id}" style="max-width: ${maxWidth}; margin: 0 auto; width: 100%;">
      ${items
        .map((item, index) => {
          const collapseId = `collapse-${id}-${item.id || index}`;
          const headingId = `heading-${id}-${item.id || index}`;
          const isFirstItem = index === 0;

          return `
          <div class="accordion-item rounded-3">
            <h2 class="accordion-header" id="${headingId}">
              <button
                class="accordion-button accordion-btn-custom rounded-3 text-primary ${
                  isFirstItem ? "" : "collapsed"
                }"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#${collapseId}"
                aria-expanded="${isFirstItem ? "true" : "false"}"
                aria-controls="${collapseId}"
              >
                <h3 class="mb-0 accordion-title">${item.title}</h3>
              </button>
            </h2>
            <div
              id="${collapseId}"
              class="accordion-collapse collapse ${isFirstItem ? "show" : ""}"
              aria-labelledby="${headingId}"
              data-bs-parent="#${id}"
            >
              <div class="accordion-body" style="padding: 1.5rem;">
                ${item.content}
              </div>
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
  `;
}

// New function without title - สำหรับใช้เฉพาะ accordion ไม่มี title
function createAccordionOnly(data) {
  const {
    id = "accordion",
    items = [],
    containerClass = "container-fluid py-5",
    maxWidth = "925px",
  } = data;

  return `
    <div class="${containerClass}" id="${id}" style="max-width: ${maxWidth}; margin: 0 auto; width: 100%;">
      ${items
        .map((item, index) => {
          const collapseId = `collapse-${id}-${item.id || index}`;
          const headingId = `heading-${id}-${item.id || index}`;
          const isFirstItem = index === 0;

          return `
          <div class="accordion-item rounded-3">
            <h2 class="accordion-header" id="${headingId}">
              <button
                class="accordion-button accordion-btn-custom rounded-3 text-primary ${
                  isFirstItem ? "" : "collapsed"
                }"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#${collapseId}"
                aria-expanded="${isFirstItem ? "true" : "false"}"
                aria-controls="${collapseId}"
              >
                <h3 class="mb-0 accordion-title">${item.title}</h3>
              </button>
            </h2>
            <div
              id="${collapseId}"
              class="accordion-collapse collapse ${isFirstItem ? "show" : ""}"
              aria-labelledby="${headingId}"
              data-bs-parent="#${id}"
            >
              <div class="accordion-body" style="padding: 1.5rem;">
                ${item.content}
              </div>
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
  `;
}

// Export to global scope
window.AccordionBuilder = AccordionBuilder;
window.createAccordion = createAccordion;
window.createAccordionOnly = createAccordionOnly;
