// Chatbot functionality
document.addEventListener("DOMContentLoaded", function () {
  const chatbotIcon = document.getElementById("chatbot-icon");
  const chatbotWindow = document.getElementById("chatbot-window");
  const chatbotClose = document.getElementById("chatbot-close");
  const chatbotSend = document.getElementById("chatbot-send");
  const chatbotInput = document.getElementById("chatbot-message-input");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const quickReplies = document.querySelectorAll(".quick-reply");

  // Predefined responses based on page language
  const isEnglish =
    document.documentElement.lang === "en" ||
    window.location.pathname.includes("-en.html");

  const responses = {
    en: {
      about:
        "BLCP Power Plant is a leading independent power producer in Thailand, committed to sustainable energy generation and environmental protection. We operate with the highest standards of efficiency and environmental responsibility.",
      environment:
        "We implement comprehensive environmental measures including: emission control systems, wastewater treatment, air quality monitoring, and sustainable resource management. Our goal is to minimize environmental impact while maintaining operational excellence.",
      contact:
        "You can contact us through: Phone: +66 (0) 2-xxx-xxxx, Email: info@blcp.co.th, or visit our Contact page for more information including complaint forms and satisfaction surveys.",
      default:
        "Thank you for your question. For more detailed information, please visit our website sections or contact our customer service team. Is there anything specific about BLCP you'd like to know?",
    },
    th: {
      about:
        "โรงไฟฟ้า BLCP เป็นผู้ผลิตไฟฟ้าเอกชนชั้นนำในประเทศไทย มุ่งมั่นในการผลิตพลังงานที่ยั่งยืนและการปกป้องสิ่งแวดล้อม เราดำเนินงานด้วยมาตรฐานสูงสุดในด้านประสิทธิภาพและความรับผิดชอบต่อสิ่งแวดล้อม",
      environment:
        "เรามีมาตรการด้านสิ่งแวดล้อมที่ครอบคลุม ได้แก่: ระบบควบคุมการปล่อยมลพิษ การบำบัดน้าเสีย การตรวจสอบคุณภาพอากาศ และการจัดการทรัพยากรอย่างยั่งยืน เป้าหมายของเราคือลดผลกระทบต่อสิ่งแวดล้อมให้น้อยที่สุดพร้อมกับรักษาความเป็นเลิศในการดำเนินงาน",
      contact:
        "ท่านสามารถติดต่อเราได้ทาง: โทรศัพท์: +66 (0) 2-xxx-xxxx, อีเมล: info@blcp.co.th หรือเยี่ยมชมหน้าติดต่อเราสำหรับข้อมูลเพิ่มเติม รวมถึงแบบฟอร์มร้องเรียนและแบบสำรวจความพึงพอใจ",
      default:
        "ขอบคุณสำหรับคำถามของท่าน สำหรับข้อมูลโดยละเอียดเพิ่มเติม กรุณาเยี่ยมชมส่วนต่างๆ ของเว็บไซต์เรา หรือติดต่อทีมบริการลูกค้าของเรา มีอะไรเกี่ยวกับ BLCP ที่ท่านอยากทราบเป็นพิเศษหรือไม่?",
    },
  };

  const currentResponses = isEnglish ? responses.en : responses.th;

  // Toggle chatbot window
  chatbotIcon.addEventListener("click", function () {
    chatbotWindow.style.display =
      chatbotWindow.style.display === "block" ? "none" : "block";
    if (chatbotWindow.style.display === "block") {
      chatbotInput.focus();
    }
  });

  // Close chatbot
  chatbotClose.addEventListener("click", function () {
    chatbotWindow.style.display = "none";
  });

  // Send message
  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
      addMessage(message, "user");
      chatbotInput.value = "";

      // Simulate typing delay
      setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, "bot");
      }, 1000);
    }
  }

  // Add message to chat
  function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = text;

    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Generate response based on keywords
  function generateResponse(message) {
    const lowerMessage = message.toLowerCase();

    if (
      lowerMessage.includes("about") ||
      lowerMessage.includes("blcp") ||
      lowerMessage.includes("company") ||
      lowerMessage.includes("เกี่ยวกับ") ||
      lowerMessage.includes("บริษัท")
    ) {
      return currentResponses.about;
    } else if (
      lowerMessage.includes("environment") ||
      lowerMessage.includes("green") ||
      lowerMessage.includes("pollution") ||
      lowerMessage.includes("สิ่งแวดล้อม") ||
      lowerMessage.includes("มลพิษ") ||
      lowerMessage.includes("เขียว")
    ) {
      return currentResponses.environment;
    } else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("phone") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("ติดต่อ") ||
      lowerMessage.includes("โทรศัพท์") ||
      lowerMessage.includes("อีเมล")
    ) {
      return currentResponses.contact;
    } else {
      return currentResponses.default;
    }
  }

  // Send button click
  chatbotSend.addEventListener("click", sendMessage);

  // Enter key press
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Quick reply buttons
  quickReplies.forEach((button) => {
    button.addEventListener("click", function () {
      const message = this.getAttribute("data-message");
      addMessage(message, "user");

      setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, "bot");
      }, 1000);
    });
  });

  // Close chatbot when clicking outside
  document.addEventListener("click", function (e) {
    if (!chatbotIcon.contains(e.target) && !chatbotWindow.contains(e.target)) {
      if (chatbotWindow.style.display === "block") {
        chatbotWindow.style.display = "none";
      }
    }
  });
});
