/**
 * ฟังก์ชันสำหรับสร้าง Post Card จากข้อมูล Array
 * @param {Array<Object>} posts - Array ของข้อมูลโพสต์ ที่แต่ละ Object มี key: img, date, content
 * @param {string} containerId - ID ของ HTML element ที่จะให้ Card เข้าไปอยู่
 */
function createPostCards(posts, containerId) {
  const container = document.getElementById(containerId);

  // ตรวจสอบก่อนว่ามี container นี้อยู่จริงหรือไม่
  if (!container) {
    console.error(`ไม่พบ Element ที่มี ID: ${containerId}`);
    return;
  }

  // ใช้ .map() เพื่อวนลูปสร้าง Array ของ HTML string จากข้อมูลแต่ละชิ้น
  // จากนั้นใช้ .join('') เพื่อรวม Array ทั้งหมดให้กลายเป็น String ก้อนเดียว
  const allCardsHTML = posts
    .map((post) => {
      // post คือ Object หนึ่งชิ้นจาก postData ในแต่ละรอบของลูป

      // นี่คือโครงสร้างของ Card 1 ใบ ที่ดึงข้อมูลจากตัวแปร post
      const cardHTML = `
        <div class="col-12 mb-4">
            <div class="card h-100 bg-grey border-0 shadow-sm p-3 p-md-4">
                <div class="row g-3">
                    <div class="col-12 col-md-5">
                        <img src="${post.img}" class="card-img-left rounded bg-white card-post-shadow" alt="รูปภาพประกอบ: ${post.date}">
                    </div>
                    <div class="col-12 col-md-7 d-flex align-items-center">
                        <h2 class="text-primary f-vision-title">${post.date}</h2>
                    </div>
                    <div class="col-12">
                        <div class="card-body pt-2 px-0">
                            <p class="card-text f-size-30">${post.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
      return cardHTML;
    })
    .join("");

  // นำ HTML ของ Card ทั้งหมดที่สร้างเสร็จแล้วใส่เข้าไปใน Container
  container.innerHTML = allCardsHTML;
}

// ---- ส่วนเรียกใช้งาน ----
// รอให้หน้าเว็บโหลดเสร็จก่อน แล้วค่อยเริ่มทำงาน
document.addEventListener("DOMContentLoaded", () => {
  // ย้ายข้อมูล postData ออกมาไว้นอกฟังก์ชัน
  const postData = [
    {
      img: "../assets/logo/BLCP-01.png",
      date: "2540 - ปัจจุบัน",
      content:
        "โรงไฟฟ้าบีแอลซีพี ใช้นโยบายตามหลัก ESG (Environment, Social, Governance) ดำเนินกิจกรรมทางธุรกิจ อย่างโปร่งใส เผยแพร่ และเปิดเผยข้อมูลทั้งหมดตามความสมัครใจ และพยายามอย่างเต็มที่ในการมีส่วนร่วมสนับสนุนกิจกรรมของชุมชน",
    },
    {
      img: "../assets/logo/BLCP-01.png",
      date: "มกราคม 2544",
      content:
        "โรงไฟฟ้าบีแอลซีพีได้รับอนุญาตจากสำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.) ให้จัดทำรายงานการวิเคราะห์ผลกระทบสิ่งแวดล้อม (EIA) ของโรงไฟฟ้า",
    },
    {
      img: "../assets/logo/BLCP-01.png",
      date: "กุมภาพันธ์ 2545",
      content:
        "โรงไฟฟ้าบีแอลซีพียังได้รับรายงานการวิเคราะห์ผลกระทบสิ่งแวดล้อม (EIA) อีกฉบับของโรงงานขนถ่ายถ่านหิน",
    },
    {
      img: "../assets/logo/BLCP-01.png",
      date: "สิงหาคม 2546",
      content:
        "โรงไฟฟ้าบีแอลซีพี ประสบความสำเร็จในการบรรลุเป้าหมายสำคัญทางการเงิน กับสถาบันการเงินใน และต่างประเทศจำนวนมาก เป็นผลให้ โรงไฟฟ้าบีแอลซีพีได้รับรางวัลจากนิตยสารระดับภูมิภาคสองฉบับ ดังต่อไปนี้ ข้อเสนอโครงการการเงินที่ดีที่สุดแห่งปี Asia Money การเงินโครงการ และ ข้อเสนอประจำปี 2546",
    },
    {
      img: "../assets/logo/BLCP-01.png",
      date: "29 มีนาคม 2547",
      content:
        "โรงไฟฟ้าบีแอลซีพี จัดพิธีวางศิลาฤกษ์ โดยมีพลเอกเปรม ติณสูลานนท์ประธานองคมนตรีและรัฐบุรุษเป็นประธาน",
    },
    {
      img: "../assets/logo/BLCP-01.png",
      date: "27 เมษายน 2549",
      content:
        "โรงไฟฟ้าบีแอลซีพี จัดพิธีประสาน โดยมีคุณไกรสีห์ กรรณสูต ผู้ว่าการการไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (กฟผ.) เป็นประธาน ",
    },
    {
      img: "../assets/logo/BLCP-01.png",
      date: "04 กรกฎาคม 2549",
      content:
        "โรงไฟฟ้าบีแอลซีพี  จัดพิธีเปิดศูนย์พลังงานเคียงสะเก็ด โดยมีคุณสุเวช ตันติวงศ์ รองผู้ว่าราชการจังหวัดระยอง เป็นประธาน",
    },
  ];

  // เรียกใช้งานฟังก์ชัน โดยส่งข้อมูล postData และ ID ของ container เข้าไป
  createPostCards(postData, "posts-container");
});
