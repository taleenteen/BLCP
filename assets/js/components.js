// Footer Component
function createFooter(basePath = "../..") {
  return `
    <footer class="footer-bg text-center text-lg-star" style="position: relative">
      <img
        src="${basePath}/assets/footer/footer-circle-1.png"
        alt="footer"
        class="img-fluid w-100 h-100"
        style="
          position: absolute;
          top: 49%;
          right: 13.5%;
          transform: translate(50%, -50%);
          max-width: 365px;
          max-height: 307px;
        "
      />
      <img
        src="${basePath}/assets/footer/footer-circle-2.png"
        alt="footer"
        class="img-fluid w-100 h-100"
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
      <div
        class="text-center p-5"
        style="
          background-color: rgba(0, 0, 0, 0.05);
          height: 315px;
          position: relative;
        "
      >
        <img
          src="${basePath}/assets/footer/footer.png"
          alt="footer"
          style="
            position: absolute;
            top: 90px;
            left: 120px;
            transform: translate(-50%, -50%);
          "
        />

        <div class="d-flex justify-content-center align-items-center flex-column gap-3">
          <button
            type="button"
            class="btn rounded-pill light-green-bg text-white f-btn-click w-100 h-100"
            style="max-width: 448px; max-height: 50px"
          >
            FAQ เรื่องพลังงานที่นี่
          </button>
        </div>

        <div class="row">
          <div class="col d-flex align-items-end justify-content-center p-5" style="z-index: 2">
            <button type="button" class="btn rounded-pill light-green-bg text-white f-btn-click">
              hello
            </button>
          </div>
          <div class="col text-start p-5">
            <h5 class="text-white">
              เลขที่ 9, ถนน I-8 ป.ณ. 92 ปณจ.มาบตาพุด <br />
              อำเภอเมือง จังหวัดระยอง 21150
            </h5>
            <h5 class="text-white">webmaster@blcp.co.th</h5>
          </div>
          <div class="col d-flex flex-column justify-content-center align-items-center gap-3 p-1">
            <button
              type="button"
              class="btn btn-primary bg-white btn-lg rounded-pill p-1 text-black d-flex align-items-center gap-3"
              style="width: 180px; height: 42px"
            >
              <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1">
                <img
                  src="${basePath}/assets/navbar/Form_nav.png"
                  alt="Logo"
                  style="width: 25px; height: 24px"
                />
              </span>
              <div class="d-flex flex-column align-items-start">
                <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
                  แบบฟอร์มร้องเรียน
                </p>
                <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
                  081-000-7362
                </p>
              </div>
            </button>

            <button
              type="button"
              class="btn btn-primary bg-white btn-lg rounded-pill p-1 text-black d-flex align-items-center gap-3"
              style="width: 180px; height: 42px"
            >
              <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1">
                <img
                  src="${basePath}/assets/navbar/Phone_nav.png"
                  alt="Logo"
                  style="width: 25px; height: 24px"
                />
              </span>
              <div class="d-flex flex-column align-items-start">
                <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
                  ติดต่อโรงไฟฟ้าบีแอลซีพี
                </p>
                <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
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

// Sidebar Component
function createSidebar(basePath = "../..") {
  return `
    <aside class="border-end" style="min-width: 220px; min-height: 100vh; max-width: 320px">
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

// Navbar Component
function createNavbar(basePath = "..", currentLang = "th") {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-primary justify-content-between" style="min-height: 64px">
      <div class="container-fluid">
        <div class="d-flex gap-2">
          <button
            type="button"
            class="btn btn-primary bg-white btn-lg rounded-pill p-1 text-black d-flex align-items-center gap-3"
            style="width: 180px; height: 42px"
          >
            <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1">
              <img
                src="${basePath}/assets/navbar/Form_nav.png"
                alt="Logo"
                style="width: 25px; height: 24px"
              />
            </span>
            <div class="d-flex flex-column align-items-start">
              <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
                แบบฟอร์มร้องเรียน
              </p>
              <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
                081-000-7362
              </p>
            </div>
          </button>

          <button
            type="button"
            class="btn btn-primary bg-white btn-lg rounded-pill p-1 text-black d-flex align-items-center gap-3"
            style="width: 180px; height: 42px"
          >
            <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1">
              <img
                src="${basePath}/assets/navbar/Carrer_nav.png"
                alt="Logo"
                style="width: 25px; height: 24px"
              />
            </span>
            <div class="d-flex flex-column align-items-start">
              <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
                ร่วมงานกับเรา
              </p>
              <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
                081-000-7362
              </p>
            </div>
          </button>

          <button
            type="button"
            class="btn post-btn btn-lg rounded-pill p-1 text-black d-flex align-items-center gap-3 border-0"
            style="width: 180px; height: 42px"
          >
            <span class="border bg-white rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1">
              <img
                src="${basePath}/assets/navbar/Phone_nav.png"
                alt="Logo"
                style="width: 25px; height: 24px"
              />
            </span>
            <div class="d-flex flex-column align-items-start">
              <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
                ติดต่อโรงไฟฟ้าบีแอลซีพี
              </p>
              <p class="mb-0 fw-bold text-primary" style="font-size: 16px; line-height: 100%">
                038-925100
              </p>
            </div>
          </button>
        </div>
      </div>
      <div class="container-fluid d-flex align-items-center gap-2 justify-content-end">
        <div class="d-flex align-items-center gap-2">
          <img
            src="${basePath}/assets/navbar/Nav_logo.png"
            alt="Logo"
            class="img-fluid me-3"
          />
          <a
            href="index-en.html"
            class="btn btn-secondary ${
              currentLang === "en" ? "post-btn border-0" : ""
            } lang-btn btn-lg rounded-pill p-1 ${
    currentLang === "en" ? "text-white" : "text-primary"
  } fw-bold d-flex align-items-center px-3"
            style="font-size: 32px; line-height: 100%"
          >EN</a>

          <div style="width: 2px; height: 42px; background-color: white"></div>

          <a
            href="index.html"
            class="btn btn-secondary ${
              currentLang === "th" ? "post-btn border-0" : ""
            } lang-btn btn-lg rounded-pill p-1 ${
    currentLang === "th" ? "text-white" : "text-primary"
  } fw-bold d-flex align-items-center px-3"
            style="font-size: 32px; line-height: 100%"
          >TH</a>
          
          <button class="btn btn-primary bg-white btn-lg rounded-pill p-1 text-primary fw-bold d-flex align-items-center px-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
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

// Load components function
function loadComponents() {
  // Determine base path based on current location
  const currentPath = window.location.pathname;
  let basePath = "..";
  let navBasePath = ".";

  // Adjust paths based on folder depth
  if (
    currentPath.includes("/aboutus/environment/") ||
    currentPath.includes("/aboutus/operation/")
  ) {
    basePath = "../..";
    navBasePath = "../..";
  } else if (currentPath.includes("/aboutus/")) {
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
  }, 100);
}

// Run when DOM is loaded
document.addEventListener("DOMContentLoaded", loadComponents);
