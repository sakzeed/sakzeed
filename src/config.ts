// ข้อมูลหลักของเว็บ — แก้ไฟล์นี้ไฟล์เดียว ชื่อ/ลิงก์จะเปลี่ยนทั้งเว็บ
// ห้ามใส่เบอร์โทร ที่อยู่บ้าน หรือข้อมูลส่วนตัวที่ไม่อยากให้คนแปลกหน้าเห็น (เว็บนี้เป็นสาธารณะ)

export const SITE = {
  name: 'สหรัฐ ยกทวน',
  role: ' พนักงานประจำร้าน ',
  tagline: 'เว็บไซต์นี้สำหรับทดสอบระบบเล็กๆ ให้ธุรกิจ ใช้งานง่าย ดูแลต่อได้เอง',
  description: 'พอร์ตโฟลิโอและบล็อกของ สหรัฐ — ผลงาน บทความ และช่องทางติดต่อจ้างงาน',
  // พร้อมรับงานไหม (แสดงป้ายที่หน้าแรก)
  available: true,
};

// ลิงก์โซเชียล — ลบบรรทัดที่ไม่ใช้ได้เลย
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/sakzeed' },
  // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-name' },
  // { label: 'Facebook', href: 'https://facebook.com/your-page' },
];

// ฟอร์มติดต่อ ใช้ Web3Forms (ฟรี) — สมัครที่ https://web3forms.com ด้วยอีเมลที่จะรับข้อความ
// แล้วเอา Access Key มาใส่ตรงนี้ (key นี้ออกแบบให้อยู่ในหน้าเว็บได้ ไม่ใช่รหัสลับ)
// ถ้าเว้นว่าง หน้าติดต่อจะแสดงข้อความว่ายังไม่เปิดฟอร์ม
export const WEB3FORMS_ACCESS_KEY = '43c32d96-c577-4fbd-9eda-84ffb1bdd0fa';
