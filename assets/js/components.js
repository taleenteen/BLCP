// Language Data Objects
const languageData = {
  th: {
    // Footer
    faqButton: "FAQ เรื่องพลังงานที่นี่",
    address:
      "เลขที่ 9, ถนน I-8 ป.ณ. 92 ปณจ.มาบตาพุด <br />อำเภอเมือง จังหวัดระยอง 21150",
    complaintForm: "แบบฟอร์มร้องเรียน",
    contactPlant: "ติดต่อโรงไฟฟ้าบีแอลซีพี",

    // Sidebar
    airQualityReport: "รายงานคุณภาพอากาศ",
    reportTime: "19 พ.ค 68 เวลา 08.00 น.",

    // Menu Items
    aboutUs: "เกี่ยวกับเรา",
    companyHistory: "ประวัติองค์กร",
    visionMission: "วิสัยทัศน์ พันธกิจ ค่านิยม",
    leadership: "คณะผู้บริหาร",
    prizesEvents: "รางวัล และเหตุการณ์สำคัญ",
    operations: "การดำเนินงาน",
    powerGenTech: "เทคโนโลยีการผลิตไฟฟ้า",
    freshwaterUse: "การใช้น้ำจืด",
    coolingSystem: "ระบบหล่อน้ำเย็น",
    emissionControl: "ระบบควบคุมมลพิษ",
    wasteManagement: "การจัดการน้ำเสีย",
    faqs: "FAQs คำถามที่พบบ่อย",

    sustainability: "ความยั่งยืนและสิ่งแวดล้อม",
    esgStrategy: "กลยุทธ์ ESG",
    environment: "สิ่งแวดล้อม",
    envSystem: "ระบบสิ่งแวดล้อม",
    envInspection: "การตรวจสอบสิ่งแวดล้อม",
    social: "สังคม",
    socialProjects: "โครงการ และกิจกรรมเพื่อสังคม",
    tripartiteMeeting: "การประชุมไตรภาคี",
    activityVideos: "วิดีโอกิจกรรม ฯลฯ",
    sustainabilityReports: "รายงานด้านความยั่งยืน",
    csrReport: "รายงาน CSR-DIW",
    sustainabilityCommittee: "รายงานยความยั่งยืนคณะทำงาน",
    policy: "นโยบาย",

    news: "ข่าวสาร",
    dailyNews: "ข่าวประจำวัน ข่าวสารองค์กร",
    knowledgeTips: "สาระน่ารู้",
    partnerOrgs: "หน่วยงานที่เกี่ยวข้อง",
    joinUs: "ร่วมงานกับเรา",
    jobPositions: "ตำแหน่งว่าง",

    learningCenter: "ศูนย์การเรียนรู้",

    publications: "รายงานเอกสารเผยแพร่",
    envAuditReport: "รายงานการตรวจสอบสิ่งแวดล้อม",
    aqmsReport: "รายงาน AQMS",
    cemsReport: "รายงาน CEMS",

    contactUs: "ติดต่อเรา",
    generalComplaint: "ร้องเรียนการดำเนินงานทั่วไป",
    integrityReport: "ร้องเรียนเรื่องการทุจริต",
    satisfactionSurvey: "แบบสอบถามความพึงพอใจเว็ปไซต์",
    privacyPolicy: "นโยบายความเป็นส่วนตัว",
  },

  en: {
    // Footer
    faqButton: "Energy FAQ Here",
    address:
      "No. 9, I-8 Road, P.O. Box 92, Maptaput Post Office <br />Muang District, Rayong Province 21150",
    complaintForm: "Complaint Form",
    contactPlant: "Contact BLCP Power Plant",

    // Sidebar
    airQualityReport: "Air Quality Report",
    reportTime: "May 19, 2025 at 08:00 AM",

    // Menu Items
    aboutUs: "About Us",
    companyHistory: "Company History",
    visionMission: "Vision, Mission, Values",
    leadership: "Leadership",
    prizesEvents: "Awards and Key Events",
    operations: "Operations",
    powerGenTech: "Power Generation Technology",
    freshwaterUse: "Freshwater Use",
    coolingSystem: "Cooling Water System",
    emissionControl: "Emission Control System",
    wasteManagement: "Wastewater Management",
    faqs: "FAQs",

    sustainability: "Sustainability and Environment",
    esgStrategy: "ESG Strategy",
    environment: "Environment",
    envSystem: "Environmental System",
    envInspection: "Environmental Inspection",
    social: "Social",
    socialProjects: "Social Projects and Activities",
    tripartiteMeeting: "Tripartite Meeting",
    activityVideos: "Activity Videos etc.",
    sustainabilityReports: "Sustainability Reports",
    csrReport: "CSR-DIW Report",
    sustainabilityCommittee: "Sustainability Committee Report",
    policy: "Policy",

    news: "News",
    dailyNews: "Daily News & Corporate News",
    knowledgeTips: "Knowledge Tips",
    partnerOrgs: "Partner Organizations",
    joinUs: "Join Us",
    jobPositions: "Available Positions",

    learningCenter: "Learning Center",

    publications: "Publications and Reports",
    envAuditReport: "Environmental Audit Report",
    aqmsReport: "AQMS Report",
    cemsReport: "CEMS Report",

    contactUs: "Contact Us",
    generalComplaint: "General Complaint",
    integrityReport: "Integrity Report",
    satisfactionSurvey: "Website Satisfaction Survey",
    privacyPolicy: "Privacy Policy",
  },
};

// Enhanced Footer Component with Language Support
function createFooter(basePath = "../..", currentLang = "th") {
  const lang = languageData[currentLang] || languageData.th;

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
            class="post-btn border-0 rounded-pill light-green-bg text-white f-btn-click"
            style="max-width: 448px; height: 50px; width: 100%;"
          >
            ${lang.faqButton}
          </button>
        </div>

        <div class="row g-3">
          <div class="col-12 col-md-4 d-flex align-items-end justify-content-center p-3 p-md-5" style="z-index: 2">
            <div class="card rounded-pill">
              <div class="card-body d-flex justify-content-center gap-2 p-2">
                <img src="${basePath}/assets/logo/Facebook.png" alt="Facebook logo" style="cursor: pointer;" />
                <img src="${basePath}/assets/logo/Line.png"     alt="Line logo"     style="cursor: pointer;" />
                <img src="${basePath}/assets/logo/Tiktok.png"   alt="Tiktok logo"   style="cursor: pointer;" />
                <img src="${basePath}/assets/logo/Youtube.png"  alt="YouTube logo"  style="cursor: pointer;" />
              </div>
            </div>
          </div>
          
          <div class="col-12 col-md-4 text-start p-3 p-md-5">
            <div class="d-flex align-items-center mb-3">
              <img src="${basePath}/assets/footer/map-icon.png" alt="Map icon" style="cursor: pointer" class="me-2" />
              <h5 class="text-white mb-0" style="font-size: clamp(14px, 2.5vw, 18px);">
                ${lang.address}
              </h5>
            </div>
            <div class="d-flex align-items-center">
              <img src="${basePath}/assets/footer/mail-icon.png" alt="Mail icon" style="cursor: pointer" width="48" class="me-2" />
              <h5 class="text-white mb-0" style="font-size: clamp(14px, 2.5vw, 18px);">webmaster@blcp.co.th</h5>
            </div>
          </div>
          
          <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center gap-3 p-3 mb-5" style="position: relative;">
            <button
              type="button"
              class="btn btn-primary bg-white btn-lg rounded-pill p-1 text-black d-flex align-items-center gap-2 gap-md-3"
              style="width: 100%; max-width: 180px; height: 42px; font-size: clamp(12px, 2vw, 16px);"
            >
              <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1">
                <img src="${basePath}/assets/navbar/Form_nav.png" alt="Logo" style="width: 20px; height: 20px" />
              </span>
              <div class="d-flex flex-column align-items-start">
                <p class="mb-0 fw-bold text-primary" style="font-size: inherit; line-height: 100%">${lang.complaintForm}</p>
                <p class="mb-0 fw-bold text-primary" style="font-size: inherit; line-height: 100%">081-000-7362</p>
              </div>
            </button>

            <button
              type="button"
              class="post-btn border-0 btn-lg rounded-pill p-1 text-black d-flex align-items-center gap-2 gap-md-3"
              style="width: 100%; max-width: 180px; height: 42px; font-size: clamp(12px, 2vw, 16px);"
            >
              <span class="bg-white border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1">
                <img src="${basePath}/assets/navbar/Phone_nav.png" alt="Logo" style="width: 20px; height: 20px" />
              </span>
              <div class="d-flex flex-column align-items-start">
                <p class="mb-0 fw-bold text-primary" style="font-size: inherit; line-height: 100%">${lang.contactPlant}</p>
                <p class="mb-0 fw-bold text-primary" style="font-size: inherit; line-height: 100%">038-925100</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Enhanced Sidebar Component with Language Support
function createSidebar(basePath = "../..", currentLang = "th") {
  const lang = languageData[currentLang] || languageData.th;
  const langSuffix = currentLang === "en" ? "-en" : "";

  return `
    <!-- Mobile Sidebar Overlay -->
    <div class="sidebar-overlay d-lg-none" id="sidebarOverlay"></div>
    
    <!-- Sidebar -->
    <aside class="sidebar d-lg-block border-end" id="sidebar" style="min-width: 220px; max-width: 320px; transform: translateX(-100%);">
      <a href="${basePath}/index${langSuffix}.html">
        <img src="${basePath}/assets/logo/BLCP-01.png" alt="Sidebar Logo" class="img-fluid" style=" height: auto" />
      </a>
      <div class="accordion border-none" id="accordionExample">
        <ul class="list-unstyled sidebar-menu">
          <!-- Tab 1: About Us -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu1"
              aria-expanded="false"
              aria-controls="menu1">
              <div>
                <img src="${basePath}/assets/sidebar/lightning_light.png" alt="About us" class="img-fluid" />
                ${lang.aboutUs}
              </div>
              <span class="chevron-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu1">
              <a href="${basePath}/aboutus/index${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.companyHistory}</a>
              <a href="${basePath}/aboutus/vision${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.visionMission}</a>
              <a href="${basePath}/aboutus/leadership${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.leadership}</a>
              <a href="${basePath}/aboutus/prize-event${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.prizesEvents}</a>

              <ul class="list-unstyled">
                <li>
                  <button
                    class="btn w-100 ps-4 d-flex justify-content-between align-items-center sidebar-link f-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu1"
                    aria-expanded="false"
                    aria-controls="submenu1">
                    ${lang.operations}
                    <span class="chevron-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu1">
                    <a href="${basePath}/aboutus/operation/index${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.powerGenTech}</a>
                    <a href="${basePath}/aboutus/operation/freshwater-use${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.freshwaterUse}</a>
                    <a href="${basePath}/aboutus/operation/cooling-water-system${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.coolingSystem}</a>
                    <a href="${basePath}/aboutus/operation/emission-control-system${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.emissionControl}</a>
                    <a href="${basePath}/aboutus/operation/wastewater${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.wasteManagement}</a>
                  </div>
                </li>
              </ul>

              <a href="${basePath}/aboutus/faqs${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.faqs}</a>
            </div>
          </li>

          <!-- Tab 2: Sustainability -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu2"
              aria-expanded="false"
              aria-controls="menu2">
              <div>
                <img src="${basePath}/assets/sidebar/Leaf.png" alt="Sustainability and Environment" class="img-fluid" width="23" height="25" />
                ${lang.sustainability}
              </div>
              <span class="chevron-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu2">
              <a href="${basePath}/sustainability/index${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.esgStrategy}</a>
              
              <ul class="list-unstyled">
                <li>
                  <button
                    class="btn w-100 ps-4 d-flex justify-content-between align-items-center sidebar-link f-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu2"
                    aria-expanded="false"
                    aria-controls="submenu2">
                    ${lang.environment}
                    <span class="chevron-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu2">
                    <a href="${basePath}/aboutus/environment/environment-system${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.envSystem}</a>
                    <a href="${basePath}/aboutus/environment/environmental-inspection${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.envInspection}</a>
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
                    aria-controls="submenu3">
                    ${lang.social}
                    <span class="chevron-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu3">
                    <a href="${basePath}/sustainability/social/social-projects${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.socialProjects}</a>
                    <a href="${basePath}/sustainability/social/tripartite-meeting${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.tripartiteMeeting}</a>
                    <a href="${basePath}/sustainability/social/videos${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.activityVideos}</a>
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
                    aria-controls="submenu4">
                    ${lang.sustainabilityReports}
                    <span class="chevron-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu4">
                    <a href="${basePath}/publications/csr-diw-report${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.csrReport}</a>
                    <a href="${basePath}/publications/sustainability-committee-report${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.sustainabilityCommittee}</a>
                  </div>
                </li>
              </ul>

              <a href="${basePath}/sustainability/policy${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.policy}</a>
            </div>
          </li>

          <!-- Tab 3: News -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu3"
              aria-expanded="false"
              aria-controls="menu3">
              <div>
                <img src="${basePath}/assets/sidebar/Chat_fill.png" alt="News" class="img-fluid" />
                ${lang.news}
              </div>
              <span class="chevron-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu3">
              <a href="${basePath}/news/daily-news${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.dailyNews}</a>
              <a href="${basePath}/news/knowledge-tips${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.knowledgeTips}</a>
              <a href="${basePath}/news/partner-organizations${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.partnerOrgs}</a>

              <ul class="list-unstyled">
                <li>
                  <button
                    class="btn w-100 ps-4 d-flex justify-content-between align-items-center sidebar-link f-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu5"
                    aria-expanded="false"
                    aria-controls="#submenu5">
                    ${lang.joinUs}
                    <span class="chevron-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                      </svg>
                    </span>
                  </button>
                  <div class="collapse" id="submenu5">
                    <a href="${basePath}/news/career/job-avaliable${langSuffix}.html" class="d-block py-1 ps-5 f-link">${lang.jobPositions}</a>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <!-- Tab 4: Learning Center -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu4"
              aria-expanded="false"
              aria-controls="menu4">
              <div>
                <img src="${basePath}/assets/sidebar/mortarboard-fill.png" alt="Learning Center" class="img-fluid" />
                ${lang.learningCenter}
              </div>
              <span class="chevron-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu4">
              <a href="${basePath}/learning-center/ksec${langSuffix}.html" class="d-block py-1 ps-4 f-link">KSEC</a>
            </div>
          </li>

          <!-- Tab 5: Publications -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu5"
              aria-expanded="false"
              aria-controls="menu5">
              <div>
                <img src="${basePath}/assets/sidebar/File_dock_fill.png" alt="Report Publication" class="img-fluid" />
                ${lang.publications}
              </div>
              <span class="chevron-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu5">
              <a href="${basePath}/publications/environmental-audit-report${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.envAuditReport}</a>
              <a href="${basePath}/publications/aqms-report${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.aqmsReport}</a>
              <a href="${basePath}/publications/cems-report${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.cemsReport}</a>
              <a href="${basePath}/publications/csr-diw-report${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.csrReport}</a>
              <a href="${basePath}/publications/sustainability-committee-report${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.sustainabilityCommittee}</a>
              <a href="${basePath}/publications/tripartite-meeting${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.tripartiteMeeting}</a>
            </div>
          </li>

          <!-- Tab 6: Contact -->
          <li>
            <button
              class="btn w-100 d-flex justify-content-between align-items-center sidebar-link f-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu6"
              aria-expanded="false"
              aria-controls="menu6">
              <div>
                <img src="${basePath}/assets/sidebar/Send_fill.png" alt="Contact Us" class="img-fluid" width="30" height="30" />
                ${lang.contactUs}
              </div>
              <span class="chevron-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
                </svg>
              </span>
            </button>
            <div class="collapse" id="menu6">
              <a href="${basePath}/contact/complaint-normal${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.generalComplaint}</a>
              <a href="${basePath}/contact/integrity-report${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.integrityReport}</a>
              <a href="${basePath}/contact/satisfaction-survey${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.satisfactionSurvey}</a>
              <a href="${basePath}/contact/privacy-policy${langSuffix}.html" class="d-block py-1 ps-4 f-link">${lang.privacyPolicy}</a>
            </div>
          </li>
        </ul>
        
        <div class="d-flex justify-content-center align-items-center flex-column ">
          <h5 class="f-size-30 text-primary mb-0">${lang.airQualityReport}</h5>
          <p class="f-size-24 text-primary mb-0">${lang.reportTime}</p>
        </div>
        
       <div class="card text-white rounded-3 border-0 p-2">
  <img 
    src="${basePath}/assets/sidebar/sidebar-pic.png" 
    class="card-img" 
    alt="รายงานคุณภาพอากาศ" 
  />

  <div class="card-img-overlay d-flex gap-2 justify-content-center text-center mt-3 p-2">
    
    <div class="p-1 gap-1 rounded-4 info-box">
      <h5 class="mb-0 info-box-title text-white">UNIT 1</h5>
      <div class="d-flex gap-2 align-items-center justify-content-center">
        <p class="m-0 info-box-label text-white">NOx :</p>
        <div class="d-flex justify-content-center align-items-center text-white info-box-value rounded-pill post-btn border-0">
            201.93
        </div>
      </div>
      <div class="d-flex gap-2 align-items-center justify-content-center">
        <p class="m-0 info-box-label text-white">SOx :</p> <div class="d-flex justify-content-center align-items-center text-white info-box-value rounded-pill post-btn border-0">
            201.93
        </div>
      </div>
    </div>
    
    <div class="p-1 gap-1 rounded-4 info-box">
      <h5 class="mb-0 info-box-title text-white">UNIT 2</h5>
      <div class="d-flex gap-2 align-items-center justify-content-center">
        <p class="m-0 info-box-label text-white">NOx :</p>
        <div class="d-flex justify-content-center align-items-center text-white info-box-value rounded-pill post-btn border-0">
            215.47
        </div>
      </div>
      <div class="d-flex gap-2 align-items-center justify-content-center">
        <p class="m-0 info-box-label text-white">SOx :</p> <div class="d-flex justify-content-center align-items-center text-white info-box-value rounded-pill post-btn border-0">
            201.93
        </div>
      </div>
    </div>

  </div>
</div>

  </div>
</div>
        
      </div>
    </aside>
  `;
}

// Enhanced Navbar Component with Language Support and Advanced Search
function createNavbar(basePath = "..", currentLang = "th") {
  const lang = languageData[currentLang] || languageData.th;
  const langSuffix = currentLang === "en" ? "-en" : "";

  return `
    <nav class="navbar navbar-expand-lg bg-primary" style="min-height: 64px;">
      <div class="container-fluid">
        <!-- Mobile Hamburger Button -->
        <button class="btn btn-primary d-lg-none me-2" type="button" id="sidebarToggle" aria-label="Toggle sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>

        <!-- Logo (Mobile) -->
        <div class="d-lg-none">
          <img src="${basePath}/assets/navbar/Logo.png" alt="Logo" class="img-fluid" style="height: 32px;" />
        </div>

        <!-- Desktop Action Buttons -->
        <div class="d-none d-lg-flex gap-2 flex-wrap">
          <button type="button" class="post-white-btn bg-white btn-sm rounded-pill p-1 text-black d-flex align-items-center gap-2" style="height: 40px; min-width: 160px;">
            <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center p-1" style="width: 30px; height: 30px;">
              <img src="${basePath}/assets/navbar/Form_nav.png" alt="Form" style="width: 18px; height: 18px" />
            </span>
            <div class="d-flex flex-column align-items-start">
              <small class="mb-0 fw-bold text-primary f-size-16">${
                lang.complaintForm
              }</small>
              <small class="mb-0 fw-bold text-primary f-size-16">081-000-7362</small>
            </div>
          </button>

          <button type="button" class="post-white-btn bg-white btn-sm rounded-pill p-1 text-black d-flex align-items-center gap-2" style="height: 40px; min-width: 160px;">
            <span class="border rounded-circle border-2 border-dark d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">
              <img src="${basePath}/assets/navbar/Carrer_nav.png" alt="Career" style="width: 20px; height: 20px" />
            </span>
            <div class="d-flex flex-column align-items-start">
              <small class="mb-0 fw-bold text-primary f-size-16">${
                lang.joinUs
              }</small>
              <small class="mb-0 fw-bold text-primary f-size-16"> 081-000-7362</small>
            </div>
          </button>

          <button type="button" class="post-btn btn-sm rounded-pill p-1 text-white d-flex align-items-center gap-2 border-0" style="height: 40px; min-width: 160px;">
            <span class="border bg-white rounded-circle border-2 border-dark d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;">
              <img src="${basePath}/assets/navbar/Phone_nav.png" alt="Phone" style="width: 20px; height: 20px" />
            </span>
            <div class="d-flex flex-column align-items-start">
              <small class="mb-0 fw-bold text-primary f-size-16">${
                lang.contactPlant
              }</small>
              <small class="mb-0 fw-bold text-primary f-size-16">038-925100</small>
            </div>
          </button>
        </div>

        <!-- Right Side Controls -->
        <div class="d-flex align-items-center gap-2 ms-auto">
          <!-- Desktop Logo -->
          <div class="d-none d-lg-block">
            <img src="${basePath}/assets/navbar/Logo.png" alt="Logo" class="img-fluid" />
          </div>

          <!-- Enhanced Language Switcher -->
          <div class="d-flex align-items-center gap-1">
            <a
              href="${getCurrentPageWithLang("en")}"
              class="btn btn-sm rounded-pill f-size-32 px-2 ${
                currentLang === "en"
                  ? "text-white post-btn border-0"
                  : "grey-btn text-primary"
              } fw-bold"
              style=" min-width: 61.25px; height: 39px;">EN</a>
            <div style="width: 2px; height: 40px; background-color: white;"></div>
            <a
              href="${getCurrentPageWithLang("th")}"
              class="btn btn-sm rounded-pill f-size-32 px-2 ${
                currentLang === "th"
                  ? "text-white post-btn border-0"
                  : "grey-btn text-primary"
              } fw-bold"
              style=" min-width: 61.25px; height: 39px;">TH</a>
          </div>

          <!-- Enhanced Search Container -->
          <div class="search-container position-relative">
            <!-- Search Input (Hidden by default) -->
            <div class="search-input-wrapper d-none position-absolute" style="right: 0; top: 0; z-index: 1050;">
              <div class="d-flex align-items-center bg-white rounded-pill p-1" style="min-width: 280px; height: 40px;">
                <input 
                  type="text" 
                  class="form-control border-0 bg-transparent px-3" 
                  id="searchInput"
                  placeholder="${
                    currentLang === "th" ? "ค้นหา..." : "Search..."
                  }"
                  autocomplete="off"
                  style="outline: none; box-shadow: none; font-size: 14px;">
                <button class="btn btn-link p-1 me-1" id="closeSearchBtn" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <!-- Search Suggestions Dropdown -->
              <div class="search-suggestions position-absolute bg-white border rounded mt-1 d-none" style="width: 100%; max-height: 300px; overflow-y: auto; z-index: 1051;">
                <div class="p-2">
                  <div class="search-results"></div>
                </div>
              </div>
            </div>

            <!-- Search Button -->
            <button class="btn btn-primary bg-white btn-sm rounded-pill p-1 text-primary fw-bold d-flex align-items-center justify-content-center" 
                    style="width: 50px; height: 40px;" 
                    id="searchToggleBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Search CSS Styles -->
    <style>
      .search-container {
        transition: all 0.3s ease;
      }
      
      .search-input-wrapper {
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      
      .search-input-wrapper.closing {
        animation: slideOutRight 0.3s ease-in;
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(100%);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideOutRight {
        from {
          opacity: 1;
          transform: translateX(0);
        }
        to {
          opacity: 0;
          transform: translateX(100%);
        }
      }
      
      .search-suggestions {
        border-color: #dee2e6;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }
      
      .search-result-item {
        padding: 8px 12px;
        border-bottom: 1px solid #f0f0f0;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }
      
      .search-result-item:hover {
        background-color: #f8f9fa;
      }
      
      .search-result-item:last-child {
        border-bottom: none;
      }
      
      .search-highlight {
        background-color: #fff3cd;
        font-weight: bold;
      }
      
      @media (max-width: 576px) {
        .search-input-wrapper {
          min-width: 250px !important;
          right: -10px !important;
        }
      }
    </style>
  `;
}

// Language Switching Utility Functions
function getCurrentPageWithLang(targetLang) {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop();
  const currentFolder = currentPath.substring(0, currentPath.lastIndexOf("/"));

  let newPage = currentPage;

  if (targetLang === "en") {
    // Switch to English
    if (!currentPage.includes("-en.html")) {
      newPage = currentPage.replace(".html", "-en.html");
    }
  } else {
    // Switch to Thai
    if (currentPage.includes("-en.html")) {
      newPage = currentPage.replace("-en.html", ".html");
    }
  }

  return currentFolder + "/" + newPage;
}

function detectCurrentLanguage() {
  const currentPage = window.location.pathname.split("/").pop();
  return currentPage.includes("-en.html") ? "en" : "th";
}

// Enhanced Component Loading Function
function loadComponents() {
  const currentPath = window.location.pathname;
  let basePath = "..";
  let navBasePath = ".";

  // Determine base path based on current location
  if (
    currentPath.includes("/aboutus/environment/") ||
    currentPath.includes("/aboutus/operation/") ||
    currentPath.includes("/sustainability/environment/") ||
    currentPath.includes("/sustainability/social/") ||
    currentPath.includes("/sustainability/sustainability-report/") ||
    currentPath.includes("/news/career/")
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
    basePath = ".";
    navBasePath = ".";
  }

  // Detect current language
  const currentLang = detectCurrentLanguage();

  // Load components with language support
  const sidebarElement = document.getElementById("sidebar-container");
  const navbarElement = document.getElementById("navbar-container");
  const footerElement = document.getElementById("footer-container");

  if (sidebarElement)
    sidebarElement.innerHTML = createSidebar(basePath, currentLang);
  if (navbarElement)
    navbarElement.innerHTML = createNavbar(navBasePath, currentLang);
  if (footerElement)
    footerElement.innerHTML = createFooter(basePath, currentLang);

  // Initialize components after DOM insertion
  setTimeout(() => {
    initializeSidebarActiveStates();
    initializeSidebarToggle();
    initializeSearchFeatures();
  }, 200);
}

/* ===================== Accordion State (LocalStorage) ===================== */

function saveAccordionState() {
  const accordionState = {};
  const accordions = document.querySelectorAll(".collapse");
  accordions.forEach((accordion) => {
    if (accordion.id) {
      accordionState[accordion.id] = accordion.classList.contains("show");
    }
  });
  localStorage.setItem("accordionState", JSON.stringify(accordionState));
}

function restoreAccordionState() {
  const savedState = localStorage.getItem("accordionState");
  if (!savedState) return;

  try {
    const accordionState = JSON.parse(savedState);
    Object.entries(accordionState).forEach(([accordionId, isOpen]) => {
      const accordion = document.getElementById(accordionId);
      const button = document.querySelector(
        `[data-bs-target="#${accordionId}"]`
      );
      if (accordion && button) {
        if (isOpen) {
          accordion.classList.add("show");
          button.setAttribute("aria-expanded", "true");
          button.classList.remove("collapsed");
        } else {
          accordion.classList.remove("show");
          button.setAttribute("aria-expanded", "false");
          button.classList.add("collapsed");
        }
      }
    });
  } catch (e) {
    console.error("Error restoring accordion state:", e);
  }
}

function initializeAccordionStateManagement() {
  const accordionButtons = document.querySelectorAll(
    '[data-bs-toggle="collapse"]'
  );
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTimeout(() => {
        saveAccordionState();
      }, 300);
    });
  });
}

/* =================== Enhanced Sidebar Active State ================== */

function initializeSidebarActiveState() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "index.html";

  console.log("Current path:", currentPath);
  console.log("Current page:", currentPage);

  // Remove any existing active states
  document.querySelectorAll(".sidebar-link, .f-link").forEach((link) => {
    link.classList.remove("active-link");
  });

  let foundMatch = false;

  // Phase 1: Find exact page match (highest priority)
  document.querySelectorAll(".f-link").forEach((link) => {
    if (foundMatch) return; // Stop if already found

    const href = link.getAttribute("href");
    if (href) {
      const linkPage = href.split("/").pop();
      const normalizedHref = href.replace(/^\.\.\//, "").replace(/^\.\//, "");
      const normalizedPath = currentPath.replace(/^\//, "");

      // Exact match logic
      let isMatch = false;

      if (linkPage === currentPage) {
        // For index.html files, check folder match too
        if (linkPage === "index.html") {
          const linkFolder = normalizedHref.replace("/index.html", "");
          const currentFolder = normalizedPath.replace("/index.html", "");
          isMatch = linkFolder === currentFolder;
        } else {
          // For other files, simple filename match
          isMatch = true;
        }
      }

      if (isMatch) {
        console.log("Found exact match:", href);
        link.classList.add("active-link");
        foundMatch = true;

        // If it's a submenu item, expand its parent
        const parentCollapse = link.closest(".collapse");
        if (parentCollapse) {
          parentCollapse.classList.add("show");
          const parentToggle = document.querySelector(
            `[data-bs-target="#${parentCollapse.id}"]`
          );
          if (parentToggle) {
            parentToggle.setAttribute("aria-expanded", "true");
            parentToggle.classList.remove("collapsed");
          }
        }
      }
    }
  });

  // Phase 2: Activate main menu button if submenu was found
  if (foundMatch) {
    // Check which section we're in and activate main menu
    if (currentPath.includes("/aboutus/")) {
      const aboutUsButton = document.querySelector('[data-bs-target="#menu1"]');
      if (aboutUsButton && !aboutUsButton.classList.contains("active-link")) {
        aboutUsButton.classList.add("active-link");
        const aboutUsMenu = document.getElementById("menu1");
        if (aboutUsMenu && !aboutUsMenu.classList.contains("show")) {
          aboutUsMenu.classList.add("show");
          aboutUsButton.setAttribute("aria-expanded", "true");
          aboutUsButton.classList.remove("collapsed");
        }
      }
    } else if (currentPath.includes("/sustainability/")) {
      const sustainabilityButton = document.querySelector(
        '[data-bs-target="#menu2"]'
      );
      if (
        sustainabilityButton &&
        !sustainabilityButton.classList.contains("active-link")
      ) {
        sustainabilityButton.classList.add("active-link");
        const sustainabilityMenu = document.getElementById("menu2");
        if (
          sustainabilityMenu &&
          !sustainabilityMenu.classList.contains("show")
        ) {
          sustainabilityMenu.classList.add("show");
          sustainabilityButton.setAttribute("aria-expanded", "true");
          sustainabilityButton.classList.remove("collapsed");
        }
      }
    } else if (currentPath.includes("/news/")) {
      const newsButton = document.querySelector('[data-bs-target="#menu3"]');
      if (newsButton && !newsButton.classList.contains("active-link")) {
        newsButton.classList.add("active-link");
        const newsMenu = document.getElementById("menu3");
        if (newsMenu && !newsMenu.classList.contains("show")) {
          newsMenu.classList.add("show");
          newsButton.setAttribute("aria-expanded", "true");
          newsButton.classList.remove("collapsed");
        }
      }
    } else if (currentPath.includes("/learning-center/")) {
      const learningButton = document.querySelector(
        '[data-bs-target="#menu4"]'
      );
      if (learningButton && !learningButton.classList.contains("active-link")) {
        learningButton.classList.add("active-link");
        const learningMenu = document.getElementById("menu4");
        if (learningMenu && !learningMenu.classList.contains("show")) {
          learningMenu.classList.add("show");
          learningButton.setAttribute("aria-expanded", "true");
          learningButton.classList.remove("collapsed");
        }
      }
    } else if (currentPath.includes("/publications/")) {
      const publicationsButton = document.querySelector(
        '[data-bs-target="#menu5"]'
      );
      if (
        publicationsButton &&
        !publicationsButton.classList.contains("active-link")
      ) {
        publicationsButton.classList.add("active-link");
        const publicationsMenu = document.getElementById("menu5");
        if (publicationsMenu && !publicationsMenu.classList.contains("show")) {
          publicationsMenu.classList.add("show");
          publicationsButton.setAttribute("aria-expanded", "true");
          publicationsButton.classList.remove("collapsed");
        }
      }
    } else if (currentPath.includes("/contact/")) {
      const contactButton = document.querySelector('[data-bs-target="#menu6"]');
      if (contactButton && !contactButton.classList.contains("active-link")) {
        contactButton.classList.add("active-link");
        const contactMenu = document.getElementById("menu6");
        if (contactMenu && !contactMenu.classList.contains("show")) {
          contactMenu.classList.add("show");
          contactButton.setAttribute("aria-expanded", "true");
          contactButton.classList.remove("collapsed");
        }
      }
    }
  }

  console.log("Active state set, found match:", foundMatch);
}

/* ================== Initialization & Mobile Sidebar Toggle ================= */

function initializeSidebarActiveStates() {
  // เรียงลำดับ: คืนค่า accordion -> ตั้ง active จาก URL -> ผูก event เซฟสถานะ
  restoreAccordionState();

  // รอให้ DOM render เสร็จก่อน
  setTimeout(() => {
    initializeSidebarActiveState();
    initializeAccordionStateManagement();
  }, 100);

  // คลิกแล้วเซฟ + active ที่ลิงก์ปัจจุบัน
  const navLinks = document.querySelectorAll(".sidebar-link, .f-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      saveAccordionState();
      document
        .querySelectorAll(".sidebar-link, .f-link")
        .forEach((l) => l.classList.remove("active-link"));
      this.classList.add("active-link");
    });
  });
}

function initializeSidebarToggle() {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  if (sidebarToggle && sidebar && sidebarOverlay) {
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

    sidebarToggle.addEventListener("click", toggleSidebar);
    sidebarOverlay.addEventListener("click", toggleSidebar);

    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) toggleSidebar();
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        sidebar.style.transform = "";
        sidebarOverlay.classList.remove("active");
        document.body.style.overflow = "";
      } else {
        sidebar.style.transform = "translateX(-100%)";
      }
    });

    if (window.innerWidth < 992) {
      sidebar.style.transform = "translateX(-100%)";
    }
  }
}

/* ========================== Component Loader ============================== */

function loadComponent(elementId, componentPath, callback) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  fetch(componentPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      element.innerHTML = html;
      if (callback) callback();
    })
    .catch((error) => {
      console.error(`Error loading ${componentPath}:`, error);
      element.innerHTML = `<div class="alert alert-warning">Unable to load component</div>`;
    });
}

/* ============================= Bootstrapping ============================== */

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded - initializing components");
  loadComponents();
});

document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    setTimeout(() => {
      restoreAccordionState();
      initializeSidebarActiveState();
    }, 100);
  }
});

window.addEventListener("popstate", function () {
  setTimeout(() => {
    restoreAccordionState();
    initializeSidebarActiveState();
  }, 100);
});

window.addEventListener("load", function () {
  console.log("Window load event - checking sidebar");
  if (!document.getElementById("sidebar")) {
    console.log("Sidebar not found, loading components");
    loadComponents();
  } else {
    // Force re-initialize active states if sidebar already exists
    setTimeout(() => {
      initializeSidebarActiveState();
    }, 300);
  }
});

// Enhanced Search Functionality
function initializeSearchFeatures() {
  const searchToggleBtn = document.getElementById("searchToggleBtn");
  const searchInputWrapper = document.querySelector(".search-input-wrapper");
  const searchInput = document.getElementById("searchInput");
  const closeSearchBtn = document.getElementById("closeSearchBtn");
  const searchSuggestions = document.querySelector(".search-suggestions");
  const searchResults = document.querySelector(".search-results");

  // Search data for autocomplete (can be expanded with actual site content)
  const searchData = [
    { title: "หน้าแรก", title_en: "Home", url: "index.html", type: "page" },
    {
      title: "เกี่ยวกับเรา",
      title_en: "About Us",
      url: "aboutus/index.html",
      type: "page",
    },
    {
      title: "วิสัยทัศน์",
      title_en: "Vision",
      url: "aboutus/vision.html",
      type: "page",
    },
    {
      title: "ความเป็นมา",
      title_en: "Leadership",
      url: "aboutus/leadership.html",
      type: "page",
    },
    {
      title: "รางวัลและกิจกรรม",
      title_en: "Awards & Events",
      url: "aboutus/prize-event.html",
      type: "page",
    },
    {
      title: "คำถามที่พบบ่อย",
      title_en: "FAQs",
      url: "aboutus/faqs.html",
      type: "page",
    },
    {
      title: "ระบบสิ่งแวดล้อม",
      title_en: "Environmental System",
      url: "aboutus/environment/index.html",
      type: "page",
    },
    {
      title: "ระบบควบคุมมลพิษ",
      title_en: "Pollution Control System",
      url: "aboutus/environment/environment-system.html",
      type: "page",
    },
    {
      title: "การตรวจสอบสิ่งแวดล้อม",
      title_en: "Environmental Inspection",
      url: "aboutus/environment/environmental-inspection.html",
      type: "page",
    },
    {
      title: "การจัดการน้ำและอากาศ",
      title_en: "Water & Air Management",
      url: "aboutus/environment/water-air-management.html",
      type: "page",
    },
    {
      title: "การดำเนินงาน",
      title_en: "Operations",
      url: "aboutus/operation/index.html",
      type: "page",
    },
    {
      title: "ระบบน้ำหล่อเย็น",
      title_en: "Cooling Water System",
      url: "aboutus/operation/cooling-water-system.html",
      type: "page",
    },
    {
      title: "ระบบควบคุมการปล่อย",
      title_en: "Emission Control System",
      url: "aboutus/operation/emission-control-system.html",
      type: "page",
    },
    {
      title: "การใช้น้ำสด",
      title_en: "Fresh Water Use",
      url: "aboutus/operation/freshwater-use.html",
      type: "page",
    },
    {
      title: "น้ำเสีย",
      title_en: "Wastewater",
      url: "aboutus/operation/wastewater.html",
      type: "page",
    },
    {
      title: "ข่าวสาร",
      title_en: "News",
      url: "news/daily-news.html",
      type: "page",
    },
    {
      title: "ข่าวประจำวัน",
      title_en: "Daily News",
      url: "news/daily-news.html",
      type: "page",
    },
    {
      title: "เคล็ดลับความรู้",
      title_en: "Knowledge Tips",
      url: "news/knowledge-tips.html",
      type: "page",
    },
    {
      title: "องค์กรพันธมิตร",
      title_en: "Partner Organizations",
      url: "news/partner-organizations.html",
      type: "page",
    },
    {
      title: "ความยั่งยืน",
      title_en: "Sustainability",
      url: "sustainability/index.html",
      type: "page",
    },
    {
      title: "นโยบายความยั่งยืน",
      title_en: "Sustainability Policy",
      url: "sustainability/policy.html",
      type: "page",
    },
    {
      title: "ติดต่อเรา",
      title_en: "Contact Us",
      url: "contact/complaint-form.html",
      type: "page",
    },
    {
      title: "แบบฟอร์มร้องเรียน",
      title_en: "Complaint Form",
      url: "contact/complaint-form.html",
      type: "page",
    },
    {
      title: "แบบฟอร์มร้องเรียนทั่วไป",
      title_en: "General Complaint Form",
      url: "contact/complaint-normal.html",
      type: "page",
    },
    {
      title: "รายงานการทุจริต",
      title_en: "Integrity Report",
      url: "contact/integrity-report.html",
      type: "page",
    },
    {
      title: "นโยบายความเป็นส่วนตัว",
      title_en: "Privacy Policy",
      url: "contact/privacy-policy.html",
      type: "page",
    },
    {
      title: "แบบสำรวจความพึงพอใจ",
      title_en: "Satisfaction Survey",
      url: "contact/satisfaction-survey.html",
      type: "page",
    },
    {
      title: "เอกสารเผยแพร่",
      title_en: "Publications",
      url: "publications/aqms-report.html",
      type: "page",
    },
    {
      title: "รายงาน AQMS",
      title_en: "AQMS Report",
      url: "publications/aqms-report.html",
      type: "page",
    },
    {
      title: "รายงาน CEMS",
      title_en: "CEMS Report",
      url: "publications/cems-report.html",
      type: "page",
    },
    {
      title: "รายงาน CSR-DIW",
      title_en: "CSR-DIW Report",
      url: "publications/csr-diw-report.html",
      type: "page",
    },
    {
      title: "รายงานตรวจสอบสิ่งแวดล้อม",
      title_en: "Environmental Audit Report",
      url: "publications/environmental-audit-report.html",
      type: "page",
    },
    {
      title: "รายงานคณะกรรมการความยั่งยืน",
      title_en: "Sustainability Committee Report",
      url: "publications/sustainability-committee-report.html",
      type: "page",
    },
    {
      title: "การประชุมสามฝ่าย",
      title_en: "Tripartite Meeting",
      url: "publications/tripartite-meeting.html",
      type: "page",
    },
  ];

  let isSearchOpen = false;
  let debounceTimer = null;

  // Get current language from URL or default to Thai
  function getCurrentLanguage() {
    const currentUrl = window.location.pathname;
    return currentUrl.includes("-en.html") ? "en" : "th";
  }

  // Toggle search bar
  function toggleSearch() {
    const currentLang = getCurrentLanguage();

    if (!isSearchOpen) {
      // Open search
      searchInputWrapper.classList.remove("d-none");
      searchToggleBtn.style.opacity = "0.7";
      isSearchOpen = true;

      // Focus on input after animation
      setTimeout(() => {
        searchInput.focus();
        searchInput.placeholder =
          currentLang === "th"
            ? "ค้นหาเนื้อหาในเว็บไซต์..."
            : "Search website content...";
      }, 100);
    } else {
      closeSearch();
    }
  }

  // Close search with animation
  function closeSearch() {
    searchInputWrapper.classList.add("closing");
    searchSuggestions.classList.add("d-none");
    searchToggleBtn.style.opacity = "1";

    setTimeout(() => {
      searchInputWrapper.classList.add("d-none");
      searchInputWrapper.classList.remove("closing");
      searchInput.value = "";
      isSearchOpen = false;
    }, 300);
  }

  // Search functionality with autocomplete
  function performSearch(query) {
    const currentLang = getCurrentLanguage();
    const results = [];

    if (query.length < 2) {
      searchSuggestions.classList.add("d-none");
      return;
    }

    // Filter search data based on current language and query
    searchData.forEach((item) => {
      const titleToSearch = currentLang === "th" ? item.title : item.title_en;
      const matchIndex = titleToSearch
        .toLowerCase()
        .indexOf(query.toLowerCase());

      if (matchIndex !== -1) {
        // Create highlighted text
        const beforeMatch = titleToSearch.substring(0, matchIndex);
        const matchText = titleToSearch.substring(
          matchIndex,
          matchIndex + query.length
        );
        const afterMatch = titleToSearch.substring(matchIndex + query.length);

        results.push({
          ...item,
          displayTitle: titleToSearch,
          highlightedTitle: `${beforeMatch}<span class="search-highlight">${matchText}</span>${afterMatch}`,
          relevance: matchIndex === 0 ? 1 : 0.5, // Prioritize matches at the beginning
        });
      }
    });

    // Sort by relevance and limit results
    results.sort((a, b) => b.relevance - a.relevance);
    const limitedResults = results.slice(0, 8);

    displaySearchResults(limitedResults, currentLang);
  }

  // Display search results
  function displaySearchResults(results, currentLang) {
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="text-muted text-center py-3">
          ${currentLang === "th" ? "ไม่พบผลการค้นหา" : "No results found"}
        </div>
      `;
      searchSuggestions.classList.remove("d-none");
      return;
    }

    const resultsHTML = results
      .map((result) => {
        const urlWithLang =
          currentLang === "en" && !result.url.includes("-en.html")
            ? result.url.replace(".html", "-en.html")
            : result.url;

        return `
        <div class="search-result-item" data-url="${urlWithLang}">
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="me-2 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
            <div>
              <div class="fw-medium" style="font-size: 14px;">${
                result.highlightedTitle
              }</div>
              <small class="text-muted">${
                result.type === "page"
                  ? currentLang === "th"
                    ? "หน้า"
                    : "Page"
                  : result.type
              }</small>
            </div>
          </div>
        </div>
      `;
      })
      .join("");

    searchResults.innerHTML = resultsHTML;
    searchSuggestions.classList.remove("d-none");

    // Add click events to search results
    document.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", function () {
        const url = this.getAttribute("data-url");
        if (url) {
          window.location.href = url;
        }
      });
    });
  }

  // Event listeners
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener("click", toggleSearch);
  }

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", closeSearch);
  }

  if (searchInput) {
    // Debounced search input
    searchInput.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(this.value.trim());
      }, 300);
    });

    // Handle Enter key
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const firstResult = document.querySelector(".search-result-item");
        if (firstResult) {
          const url = firstResult.getAttribute("data-url");
          if (url) {
            window.location.href = url;
          }
        }
      }
    });

    // Handle Escape key
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeSearch();
      }
    });
  }

  // Close search when clicking outside
  document.addEventListener("click", function (e) {
    if (isSearchOpen && !e.target.closest(".search-container")) {
      closeSearch();
    }
  });

  // Close suggestions when input loses focus (with delay for click events)
  if (searchInput) {
    searchInput.addEventListener("blur", function () {
      setTimeout(() => {
        searchSuggestions.classList.add("d-none");
      }, 200);
    });

    searchInput.addEventListener("focus", function () {
      if (this.value.trim().length >= 2) {
        performSearch(this.value.trim());
      }
    });
  }
}

// Main initialization function
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  loadComponents();
  initializeSearchFeatures(); // Add search functionality
});
