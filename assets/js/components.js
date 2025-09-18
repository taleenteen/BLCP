// Footer Component
function createFooter(basePath = "../..") {
  return `
    <footer class="footer-bg text-center text-lg-start" style="position: relative">
      <div class="d-none d-md-block" style="position: absolute; top: 0; right: 0; overflow: hidden; height: 315px; width: 100%; pointer-events: none;">
        <img
          src="${basePath}/assets/footer/footer-circle-1.png"
          alt="footer"
          class="img-fluid"
          style="
            position: absolute;
            top: 49%;
            right: 13.5%;
            transform: translate(50%, -50%);
            max-width: 365px;
            max-height: 307px;
            z-index: 0;
          "
        />
        <img
          src="${basePath}/assets/footer/footer-circle-2.png"
          alt="footer"
          class="img-fluid"
          style="
            position: absolute;
            top: 48%;
            right: 12%;
            transform: translate(50%, -50%);
            z-index: 0;
            max-width: 350px;
            max-height: 290px;
          "
        />
      </div>
      <div
        class="text-center py-4 py-md-5"
        style="
          background-color: rgba(0, 0, 0, 0.05);
          min-height: 280px;
          height: auto;
          position: relative;
        "
      >
        <img
          src="${basePath}/assets/footer/footer.png"
          alt="footer"
          class="d-none d-md-block"
          style="
            position: absolute;
            top: 90px;
            left: 120px;
            transform: translate(-50%, -50%);
          "
        />

        <div class="d-flex justify-content-center align-items-center flex-column gap-3 mb-4">
          <button
            type="button"
            class="btn rounded-pill light-green-bg text-white f-btn-click"
            style="max-width: 448px; height: 50px; width: 100%;"
          >
            FAQ เรื่องพลังงานที่นี่
          </button>
        </div>

        <div class="row g-3">
          <div class="col-12 col-md-4 d-flex align-items-end justify-content-center" style="z-index: 2">
            <div class="card rounded-pill">
              <div class="card-body d-flex justify-content-center gap-2 p-2">
                <img
                  src="${basePath}/assets/logo/Facebook.png"
                  alt="Facebook logo"
                  style="cursor: pointer;"
                />
                <img
                  src="${basePath}/assets/logo/Line.png"
                  alt="Line logo"
                  style="cursor: pointer;"
                />
                <img
                  src="${basePath}/assets/logo/Tiktok.png"
                  alt="Tiktok logo"
                  style="cursor: pointer;" 
                />
                <img
                  src="${basePath}/assets/logo/Youtube.png"
                  alt="YouTube logo"
                  style="cursor: pointer;"
                />
              </div>
            </div>
          </div>
          
          <div class="col-12 col-md-4 text-start p-3 p-md-5">
            <div class="d-flex align-items-center mb-3">
              <img
                src="${basePath}/assets/footer/map-icon.png"
                alt="Map icon"
                style="cursor: pointer"
                class="me-2"
              />
              <h5 class="text-white mb-0" style="font-size: clamp(14px, 2.5vw, 18px);">
                เลขที่ 9, ถนน I-8 ป.ณ. 92 ปณจ.มาบตาพุด <br />
                อำเภอเมือง จังหวัดระยอง 21150
              </h5>
            </div>
            <div class="d-flex align-items-center">
              <img
                src="${basePath}/assets/footer/mail-icon.png"
                alt="Mail icon"
                style="cursor: pointer"
                width="48"
                class="me-2"
              />
              <h5 class="text-white mb-0" style="font-size: clamp(14px, 2.5vw, 18px);">webmaster@blcp.co.th</h5>
            </div>
          </div>
          
          <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center gap-3 p-3">
            <button
              type="button"
              class="btn btn-primary bg-white btn-lg rounded-pill p-1 text-black d-flex align-items-center gap-2 gap-md-3"
              style="width: 100%; max-width: 180px; height: 42px; font-size: clamp(12px, 2vw, 16px);"
            >
              <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1">
                <img
                  src="${basePath}/assets/navbar/Form_nav.png"
                  alt="Logo"
                  style="width: 20px; height: 20px"
                />
              </span>
              <div class="d-flex flex-column align-items-start">
                <p class="mb-0 fw-bold text-primary" style="font-size: inherit; line-height: 100%">
                  แบบฟอร์มร้องเรียน
                </p>
                <p class="mb-0 fw-bold text-primary" style="font-size: inherit; line-height: 100%">
                  081-000-7362
                </p>
              </div>
            </button>

            <button
              type="button"
              class="btn btn-primary bg-white btn-lg rounded-pill p-1 text-black d-flex align-items-center gap-2 gap-md-3"
              style="width: 100%; max-width: 180px; height: 42px; font-size: clamp(12px, 2vw, 16px);"
            >
              <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1">
                <img
                  src="${basePath}/assets/navbar/Phone_nav.png"
                  alt="Logo"
                  style="width: 20px; height: 20px"
                />
              </span>
              <div class="d-flex flex-column align-items-start">
                <p class="mb-0 fw-bold text-primary" style="font-size: inherit; line-height: 100%">
                  ติดต่อโรงไฟฟ้าบีแอลซีพี
                </p>
                <p class="mb-0 fw-bold text-primary" style="font-size: inherit; line-height: 100%">
                  038-925100
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Sidebar Component - Responsive with Hamburger Menu
function createSidebar(basePath = "../..") {
  return `
    <!-- Mobile Sidebar Overlay -->
    <div class="sidebar-overlay d-lg-none" id="sidebarOverlay"></div>
    
    <!-- Sidebar -->
    <aside class="sidebar d-lg-block border-end" id="sidebar" style="min-width: 220px; max-width: 320px; transform: translateX(-100%);">
      <img
        src="${basePath}/assets/logo/BLCP-01.png"
        alt="Sidebar Logo"
        class="img-fluid"
        style="max-width: 300px; height: auto"
      />
      <div class="accordion border-none" id="accordionExample">
        <ul class="list-unstyled sidebar-menu">
          <!-- Tab 1 -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu1"
              aria-expanded="false"
              aria-controls="menu1"
            >
              <div>
                <img
                  src="${basePath}/assets/sidebar/lightning_light.png"
                  alt="About us"
                  class="img-fluid"
                />
                เกี่ยวกับเรา
              </div>
              <span class="chevron-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                  />
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu1">
              <a href="#" class="d-block py-1 ps-4 f-link">ประวัติองค์กร</a>
              <a href="#" class="d-block py-1 ps-4 f-link">วิสัยทัศน์ พันธกิจ ค่านิยม</a>
              <a href="#" class="d-block py-1 ps-4 f-link">คณะผู้บริหาร</a>
              <a href="#" class="d-block py-1 ps-4 f-link">รางวัล และเหตุการณ์สำคัญ</a>

              <ul class="list-unstyled">
                <li>
                  <button
                    class="btn w-100 ps-4 d-flex justify-content-between align-items-center sidebar-link f-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu1"
                    aria-expanded="false"
                    aria-controls="submenu1"
                  >
                    การดำเนินงาน
                    <span class="chevron-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu1">
                    <a href="#" class="d-block py-1 ps-5 f-link">เทคโนโลยีการผลิตไฟฟ้า</a>
                    <a href="#" class="d-block py-1 ps-5 f-link">การใช้น้ำจืด</a>
                    <a href="#" class="d-block py-1 ps-5 f-link">ระบบหล่อน้ำเย็น</a>
                    <a href="#" class="d-block py-1 ps-5 f-link">ระบบควบคุมมลพิษ</a>
                    <a href="#" class="d-block py-1 ps-5 f-link">การจัดการน้ำเสีย</a>
                  </div>
                </li>
              </ul>

              <a href="#" class="d-block py-1 ps-4 f-link">FAQs คำถามที่พบบ่อย</a>
            </div>
          </li>
          <!-- Tab 2 -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu2"
              aria-expanded="false"
              aria-controls="menu2"
            >
              <div>
                <img
                  src="${basePath}/assets/sidebar/Leaf.png"
                  alt="Sustainability and Environment"
                  class="img-fluid"
                  width="23"
                  height="25"
                />
                ความยั่งยืนและสิ่งแวดล้อม
              </div>
              <span class="chevron-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                  />
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu2">
              <a href="#" class="d-block py-1 ps-4 f-link">กลยุทธ์ ESG</a>
              <ul class="list-unstyled">
                <li>
                  <button
                    class="btn w-100 ps-4 d-flex justify-content-between align-items-center sidebar-link f-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu2"
                    aria-expanded="false"
                    aria-controls="submenu2"
                  >
                    สิ่งแวดล้อม
                    <span class="chevron-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu2">
                    <a href="#" class="d-block py-1 ps-5 f-link">ระบบสิ่งแวดล้อม</a>
                    <a href="#" class="d-block py-1 ps-5 f-link">การตรวจสอบสิ่งแวดล้อม</a>
                  </div>
                </li>
              </ul>

              <ul class="list-unstyled">
                <li>
                  <button
                    class="btn w-100 ps-4 d-flex justify-content-between align-items-center sidebar-link f-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu3"
                    aria-expanded="false"
                    aria-controls="submenu3"
                  >
                    สังคม
                    <span class="chevron-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu3">
                    <a href="#" class="d-block py-1 ps-5 f-link">โครงการ และกิจกรรมเพื่อสังคม</a>
                    <a href="#" class="d-block py-1 ps-5 f-link">การประชุมไตรภาคี</a>
                    <a href="#" class="d-block py-1 ps-5 f-link">วิดีโอกิจกรรม ฯลฯ</a>
                  </div>
                </li>
              </ul>

              <ul class="list-unstyled">
                <li>
                  <button
                    class="btn w-100 ps-4 d-flex justify-content-between align-items-center sidebar-link f-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu4"
                    aria-expanded="false"
                    aria-controls="submenu4"
                  >
                    รายงานด้านความยั่งยืน
                    <span class="chevron-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu4">
                    <a href="#" class="d-block py-1 ps-5 f-link">รายงาน CSR-DIW</a>
                    <a href="#" class="d-block py-1 ps-5 f-link">รายงานยความยั่งยืนคณะทำงาน</a>
                  </div>
                </li>
              </ul>

              <a href="#" class="d-block py-1 ps-4 f-link">นโยบาย</a>
            </div>
          </li>
          <!-- Tab 3 -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu3"
              aria-expanded="false"
              aria-controls="menu3"
            >
              <div>
                <img
                  src="${basePath}/assets/sidebar/Chat_fill.png"
                  alt="News"
                  class="img-fluid"
                />
                ข่าวสาร
              </div>
              <span class="chevron-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                  />
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu3">
              <a href="#" class="d-block py-1 ps-4 f-link">ข่าวประจำวัน ข่าวสารองค์กร</a>
              <a href="#" class="d-block py-1 ps-4 f-link">สาระน่ารู้</a>
              <a href="#" class="d-block py-1 ps-4 f-link">หน่วยงานที่เกี่ยวข้อง</a>

              <ul class="list-unstyled">
                <li>
                  <button
                    class="btn w-100 ps-4 d-flex justify-content-between align-items-center sidebar-link f-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu5"
                    aria-expanded="false"
                    aria-controls="submenu5"
                  >
                    ร่วมงานกับเรา
                    <span class="chevron-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu5">
                    <a href="#" class="d-block py-1 ps-5 f-link">ตำแหน่งว่าง</a>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <!-- Tab 4 -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu4"
              aria-expanded="false"
              aria-controls="menu4"
            >
              <div>
                <img
                  src="${basePath}/assets/sidebar/mortarboard-fill.png"
                  alt="Learning Center"
                  class="img-fluid"
                />
                ศูนย์การเรียนรู้
              </div>
              <span class="chevron-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                  />
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu4">
              <a href="#" class="d-block py-1 ps-4 f-link">KSEC</a>
            </div>
          </li>
          <!-- Tab 5 -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu5"
              aria-expanded="false"
              aria-controls="menu5"
            >
              <div>
                <img
                  src="${basePath}/assets/sidebar/File_dock_fill.png"
                  alt="Report Publication"
                  class="img-fluid"
                />
                รายงานเอกสารเผยแพร่
              </div>
              <span class="chevron-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                  />
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu5">
              <a href="#" class="d-block py-1 ps-4 f-link">รายงานการตรวจสอบสิ่งแวดล้อม</a>
              <a href="#" class="d-block py-1 ps-4 f-link">รายงาน AQMS</a>
              <a href="#" class="d-block py-1 ps-4 f-link">รายงาน CEMS</a>
              <a href="#" class="d-block py-1 ps-4 f-link">รายงาน CSR-DIW</a>
              <a href="#" class="d-block py-1 ps-4 f-link">รายงานความยั่งยืนคณะทำงาน</a>
              <a href="#" class="d-block py-1 ps-4 f-link">การประชุมไตรภาคี</a>
            </div>
          </li>
          <!-- Tab 6 -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu6"
              aria-expanded="false"
              aria-controls="menu6"
            >
              <div>
                <img
                  src="${basePath}/assets/sidebar/Send_fill.png"
                  alt="Contact Us"
                  class="img-fluid"
                  width="30"
                  height="30"
                />
                ติดต่อเรา
              </div>
              <span class="chevron-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                  />
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu6">
              <a href="#" class="d-block py-1 ps-4 f-link">ร้องเรียนการดำเนินงานทั่วไป</a>
              <a href="#" class="d-block py-1 ps-4 f-link">ร้องเรียนเรื่องการทุจริต</a>
              <a href="#" class="d-block py-1 ps-4 f-link">แบบสอบถามความพึงพอใจเว็ปไซต์</a>
              <a href="#" class="d-block py-1 ps-4 f-link">นโยบายความเป็นส่วนตัว</a>
            </div>
          </li>
        </ul>
        <div class="d-flex flex-column justify-content-center text-center p-3">
          <h1 class="f-size-30 text-primary">รายงานคุณภาพอากาศ</h1>
          <p class="f-size-22 text-primary">19 .พค. 68 เวลา 08.00 น.</p>
          <img
            src="${basePath}/assets/navbar/Sidebar-report.png"
            alt="รายงานคุณภาพอากาศ"
          />
        </div>
      </div>
    </aside>
  `;
}

// Navbar Component - Responsive with Hamburger Menu
function createNavbar(basePath = "..", currentLang = "th") {
  return `
    <nav class="navbar navbar-expand-lg bg-primary" style="min-height: 64px;">
      <div class="container-fluid">
        <!-- Mobile Hamburger Button -->
        <button
          class="btn btn-primary d-lg-none me-2"
          type="button"
          id="sidebarToggle"
          aria-label="Toggle sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>

        <!-- Logo (Mobile) -->
        <div class="d-lg-none">
          <img
            src="${basePath}/assets/navbar/Logo.png"
            alt="Logo"
            class="img-fluid"
            style="height: 32px;"
          />
        </div>

        <!-- Desktop Action Buttons -->
        <div class="d-none d-lg-flex gap-2 flex-wrap">
          <button
            type="button"
            class="btn btn-primary bg-white btn-sm rounded-pill p-1 text-black d-flex align-items-center gap-2"
            style="height: 40px; min-width: 160px;"
          >
            <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">
              <img
                src="${basePath}/assets/navbar/Form_nav.png"
                alt="Form"
                style="width: 20px; height: 20px"
              />
            </span>
            <div class="d-flex flex-column align-items-start">
              <small class="mb-0 fw-bold text-primary" style="font-size: 12px; line-height: 1;">
                แบบฟอร์มร้องเรียน
              </small>
              <small class="mb-0 fw-bold text-primary" style="font-size: 12px; line-height: 1;">
                081-000-7362
              </small>
            </div>
          </button>

          <button
            type="button"
            class="btn btn-primary bg-white btn-sm rounded-pill p-1 text-black d-flex align-items-center gap-2"
            style="height: 40px; min-width: 160px;"
          >
            <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">
              <img
                src="${basePath}/assets/navbar/Carrer_nav.png"
                alt="Career"
                style="width: 20px; height: 20px"
              />
            </span>
            <div class="d-flex flex-column align-items-start">
              <small class="mb-0 fw-bold text-primary" style="font-size: 12px; line-height: 1;">
                ร่วมงานกับเรา
              </small>
              <small class="mb-0 fw-bold text-primary" style="font-size: 12px; line-height: 1;">
                081-000-7362
              </small>
            </div>
          </button>

          <button
            type="button"
            class="btn post-btn btn-sm rounded-pill p-1 text-white d-flex align-items-center gap-2 border-0"
            style="height: 40px; min-width: 160px;"
          >
            <span class="border bg-white rounded-circle border-2 border-dark d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">
              <img
                src="${basePath}/assets/navbar/Phone_nav.png"
                alt="Phone"
                style="width: 20px; height: 20px"
              />
            </span>
            <div class="d-flex flex-column align-items-start">
              <small class="mb-0 fw-bold" style="font-size: 12px; line-height: 1;">
                ติดต่อโรงไฟฟ้าบีแอลซีพี
              </small>
              <small class="mb-0 fw-bold" style="font-size: 12px; line-height: 1;">
                038-925100
              </small>
            </div>
          </button>
        </div>

        <!-- Right Side Controls -->
        <div class="d-flex align-items-center gap-2 ms-auto">
          <!-- Desktop Logo -->
          <div class="d-none d-lg-block me-3">
            <img
              src="${basePath}/assets/navbar/Logo.png"
              alt="Logo"
              class="img-fluid"
              style="height: 42px;"
            />
          </div>

          <!-- Language Switcher -->
          <div class="d-flex align-items-center gap-1">
            <a
              href="index.html"
              class="btn btn-sm rounded-pill px-2 ${
                currentLang === "th"
                  ? "post-btn border-0 text-white"
                  : "btn-outline-light text-white"
              } fw-bold"
              style="font-size: clamp(16px, 3vw, 20px); min-width: 40px; height: 36px; line-height: 1;"
            >TH</a>
            
            <div style="width: 1px; height: 20px; background-color: white;"></div>
            
            <a
              href="index-en.html"
              class="btn btn-sm rounded-pill px-2 ${
                currentLang === "en"
                  ? "post-btn border-0 text-white"
                  : "btn-outline-light text-white"
              } fw-bold"
              style="font-size: clamp(16px, 3vw, 20px); min-width: 40px; height: 36px; line-height: 1;"
            >EN</a>
          </div>

          <!-- Search Button -->
          <button class="btn btn-primary bg-white btn-sm rounded-pill p-1 text-primary fw-bold d-flex align-items-center justify-content-center" style="width: 36px; height: 36px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  `;
}

// Function to initialize sidebar active states
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

// Function to handle mobile sidebar toggle
function initializeSidebarToggle() {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  if (sidebarToggle && sidebar && sidebarOverlay) {
    // Toggle sidebar visibility
    const toggleSidebar = () => {
      const isOpen =
        sidebar.style.transform === "translateX(0px)" ||
        !sidebar.style.transform;

      if (isOpen) {
        sidebar.style.transform = "translateX(-100%)";
        sidebarOverlay.classList.remove("active");
        document.body.style.overflow = "";
      } else {
        sidebar.style.transform = "translateX(0px)";
        sidebarOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    };

    // Event listeners
    sidebarToggle.addEventListener("click", toggleSidebar);
    sidebarOverlay.addEventListener("click", toggleSidebar);

    // Close sidebar when clicking on links (mobile)
    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          // Only on mobile
          toggleSidebar();
        }
      });
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        sidebar.style.transform = "";
        sidebarOverlay.classList.remove("active");
        document.body.style.overflow = "";
      } else {
        sidebar.style.transform = "translateX(-100%)";
      }
    });

    // Initialize correct state
    if (window.innerWidth < 992) {
      sidebar.style.transform = "translateX(-100%)";
    }
  }
}

// Load components function
function loadComponents() {
  // Determine base path based on current location
  const currentPath = window.location.pathname;
  let basePath = "..";
  let navBasePath = ".";

  // Adjust paths based on folder depth
  if (
    currentPath.includes("/aboutus/environment/") ||
    currentPath.includes("/aboutus/operation/") ||
    currentPath.includes("/sustainability/environment/") ||
    currentPath.includes("/sustainability/social/") ||
    currentPath.includes("/sustainability/sustainability-report/")
  ) {
    basePath = "../..";
    navBasePath = "../..";
  } else if (
    currentPath.includes("/aboutus/") ||
    currentPath.includes("/sustainability/") ||
    currentPath.includes("/publications/") ||
    currentPath.includes("/news/") ||
    currentPath.includes("/contact/")
  ) {
    basePath = "..";
    navBasePath = "..";
  } else {
    // Root level files
    basePath = ".";
    navBasePath = ".";
  }

  // Load components
  const sidebarElement = document.getElementById("sidebar-container");
  const navbarElement = document.getElementById("navbar-container");
  const footerElement = document.getElementById("footer-container");

  if (sidebarElement) sidebarElement.innerHTML = createSidebar(basePath);
  if (navbarElement) navbarElement.innerHTML = createNavbar(navBasePath);
  if (footerElement) footerElement.innerHTML = createFooter(basePath);

  // Initialize sidebar active states after components are loaded
  setTimeout(() => {
    initializeSidebarActiveStates();
    initializeSidebarToggle();
  }, 100);
}

// Run when DOM is loaded
document.addEventListener("DOMContentLoaded", loadComponents);
