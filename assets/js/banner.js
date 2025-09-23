/**
 * ฟังก์ชันสำหรับสร้าง Hero Banner พร้อม Social Icons
 * @param {string} containerId - ID ของ Element ที่จะนำ Banner ไปแสดงผล
 * @param {object} options - อ็อปชันสำหรับปรับแต่ง Component
 * @param {string} options.title - ข้อความ Title หลักที่จะแสดงใน Banner
 * @param {string} options.basePath - Path สำหรับอ้างอิงไปยังโฟลเดอร์ assets (เช่น '.', '..', '../..')
 */
function createHeroBanner(containerId, options) {
  // 1. ตรวจสอบว่ามี Container ในหน้าเว็บหรือไม่
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Error: ไม่พบ Element ที่มี ID: "${containerId}"`);
    return;
  }

  // 2. ดึงค่าจาก options หรือใช้ค่าเริ่มต้น
  const title = options.title || "หัวข้อเริ่มต้น";
  const basePath = options.basePath || ".."; // ค่าเริ่มต้นคือถอยหลังไป 1 โฟลเดอร์

  // 3. สร้าง HTML ของ Component ทั้งหมด
  const bannerHTML = `
      <section>
        <div class="card border-0 text-primary">
          <img
            src="${basePath}/assets/aboutus/aboutus-hero.png"
            alt="Hero Banner"
            class="img-fluid"
          />
          <div class="card-img-overlay d-flex justify-content-between align-items-center p-3 p-md-4">
            
            <h1 class="card-title text-white">${title}</h1>
  
            <div class="card rounded-4 shadow-sm" style="width: fit-content">
              <div class="card-body d-flex flex-row flex-lg-column justify-content-center align-items-center gap-3 p-2">
                <a href="#"><img
                  src="${basePath}/assets/logo/Facebook.png"
                  alt="Facebook logo"
                  style="cursor: pointer; width: 25px; height: 25px"
                /></a>
                <a href="#"><img
                  src="${basePath}/assets/logo/Line.png"
                  alt="Line logo"
                  style="cursor: pointer; width: 25px; height: 25px"
                /></a>
                <a href="#"><img
                  src="${basePath}/assets/logo/Tiktok.png"
                  alt="Tiktok logo"
                  style="cursor: pointer; width: 25px; height: 25px"
                /></a>
                <a href="#"><img
                  src="${basePath}/assets/logo/YouTube.png"
                  alt="YouTube logo"
                  style="cursor: pointer; width: 25px; height: 25px"
                /></a>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    `;

  container.innerHTML = bannerHTML;
}
