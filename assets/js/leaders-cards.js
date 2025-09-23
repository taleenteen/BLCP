/**
 * [ฟังก์ชันใหม่] สร้างชุดการ์ดแบบยืดหยุ่นสำหรับทีมใดๆ
 * @param {Array<Object>} teamData - Array ของข้อมูลสมาชิกในทีม
 * @param {string} containerId - ID ของ Element ที่จะนำการ์ดไปแสดงผล
 */
function createTeamCards(teamData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`ไม่พบ Element ที่มี ID: ${containerId}`);
    return;
  }

  // สร้าง HTML สำหรับการ์ดแต่ละใบ
  const createCardHTML = (member) => `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0 card-hover text-center" style="max-width: 321px;">
          ${
            member.photo
              ? `<img src="${member.photo}" class="card-img-top" alt="${member.name}" style="height: 321px; object-fit: cover;">`
              : ""
          }
          <div class="card-body d-flex flex-column p-4">
            <h5 class="card-title f-size-30 text-primary text-start">${
              member.name || "N/A"
            }</h5>
            <p class="card-text flex-grow-1 f-size-22 text-start">${
              member.position || ""
            }</p>
          </div>
        </div>
      </div>
    `;

  // ใช้ .map() เพื่อแปลงข้อมูลทั้งหมดเป็น HTML แล้ว .join() เพื่อรวมเป็น string เดียว
  const allCardsHTML = teamData.map(createCardHTML).join("");

  // นำ HTML ที่ได้ไปใส่ใน row ที่มีการจัดกลางเรียบร้อยแล้ว
  container.innerHTML = allCardsHTML;
}

/* ฟังก์ชัน createLeaderCards เดิมยังคงเก็บไว้ได้ หากต้องการใช้ Layout 5 การ์ดแบบเฉพาะเจาะจง
    แต่ฟังก์ชัน createTeamCards ใหม่จะใช้งานได้หลากหลายกว่า
  */
createLeaderCards(executiveTeam, "leaders-container");
{
  // ... (โค้ดเดิม) ...
}
