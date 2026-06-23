// 1. ระบบสลับโหมดมืด / โหมดสว่าง (Dark / Light Mode)
function createDarkModeButton() {
    // สร้างปุ่มกดด้วย JavaScript
    const toggleBtn = document.createElement('button');
    toggleBtn.innerText = '🌙 เปลี่ยนโหมดสี';
    toggleBtn.className = 'dark-mode-toggle';
    
    // นำปุ่มไปวางไว้ในส่วนหัว (Header) ของหน้าเว็บ
    const header = document.querySelector('header');
    header.appendChild(toggleBtn);

    // สั่งให้ทำงานเมื่อคลิกปุ่ม
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // เปลี่ยนไอคอนบนปุ่มตามโหมดที่เลือก
        if (document.body.classList.contains('dark-mode')) {
            toggleBtn.innerText = '☀️ โหมดสว่าง';
        } else {
            toggleBtn.innerText = '🌙 โหมดมืด';
        }
    });
}

// 2. ระบบแจ้งเตือนกันลืมใส่ลิงก์ผลงาน
function setupAlertForEmptyLinks() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const link = button.getAttribute('href');
            
            // ถ้าลิงก์ยังเป็น "#" (ยังไม่ได้ใส่ลิงก์จริง) ให้ขึ้นเตือน
            if (link === '#') {
                event.preventDefault(); // เบรกไม่ให้หน้าเว็บกระตุกหรือรีเฟรช
                alert('📌 ข้อมูลแจ้งเตือนจาก วรพล: ผลงานชิ้นนี้กำลังอยู่ในช่วงพัฒนา หรือยังไม่ได้แนบลิงก์ GitHub ครับ!');
            }
        });
    });
}

// สั่งให้ฟังก์ชันทั้งหมดทำงานเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    createDarkModeButton();
    setupAlertForEmptyLinks();
});
