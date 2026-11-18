# พอร์ตโฟลิโอ + บล็อก

เว็บพอร์ตโฟลิโอและบล็อก ให้คนที่จะจ้างงานดู สร้างด้วย [Astro](https://astro.build)
ไม่มีฐานข้อมูล (เนื้อหาเป็นไฟล์ Markdown) และ deploy บน Cloudflare Pages

## แก้เนื้อหา

| อยากแก้ | ไฟล์ |
|---|---|
| ชื่อ ตำแหน่ง คำโปรย ลิงก์โซเชียล key ของฟอร์ม | `src/config.ts` |
| หน้าเกี่ยวกับ (ประวัติ ทักษะ ประสบการณ์) | `src/pages/about.astro` |
| เพิ่ม/แก้ผลงาน | ไฟล์ `.md` ใน `src/content/projects/` |
| เพิ่ม/แก้บทความ | ไฟล์ `.md` ใน `src/content/blog/` |
| สี ฟอนต์ | `src/styles/global.css` |

หัวไฟล์ผลงาน:

```yaml
---
title: ชื่องาน
summary: สรุปหนึ่งบรรทัด
year: 2026
role: ทำส่วนไหน
tags: [Astro, ออกแบบ]
link: https://...   # ไม่ใส่ก็ได้
order: 1            # เลขน้อยขึ้นก่อน
draft: false        # true = ยังไม่โชว์
---
```

หัวไฟล์บทความ:

```yaml
---
title: หัวข้อ
description: สรุปสั้นๆ
date: 2026-11-18
draft: false
---
```

แก้เสร็จแล้ว `git add . && git commit -m "..." && git push` เว็บจะอัปเดตเองภายในไม่กี่นาที

## รันบนเครื่อง

ต้องใช้ Node 22 ขึ้นไป (บนมือถือเครื่องนี้อยู่ที่ `~/.local/node22`) และใช้ Yarn
เพราะ npm บน proot ติดตั้งแพ็กเกจไม่ผ่าน

```bash
export PATH=~/.local/node22/bin:$PATH
yarn install        # ครั้งแรก
yarn dev            # http://127.0.0.1:4321
yarn build          # สร้างไฟล์จริงใน dist/
```

## Deploy (Cloudflare Pages)

1. สมัครบัญชีที่ https://dash.cloudflare.com/sign-up
2. Workers & Pages → Create → แท็บ Pages → Connect to Git → เลือก GitHub บัญชี `sakzeed` → อนุญาต repo `portfolio`
3. ตั้งค่า build:
   - Framework preset: **Astro**
   - Build command: `yarn build`
   - Build output directory: `dist`
4. กด Save and Deploy จะได้ที่อยู่แบบ `https://portfolio-xxx.pages.dev`
5. เอาที่อยู่นั้นมาใส่ `site` ใน `astro.config.mjs` แล้ว push อีกรอบ

## ความปลอดภัย

- เว็บนี้ไม่มีรหัสลับ ถ้าวันหน้ามี ให้เก็บใน `.env` (มีใน `.gitignore` แล้ว) หรือใน Environment variables ของ Cloudflare
- ห้ามใส่เบอร์โทร ที่อยู่บ้าน หรือข้อมูลส่วนตัวที่ไม่อยากให้คนแปลกหน้าเห็น
- Access Key ของ Web3Forms อยู่ในหน้าเว็บได้ (ออกแบบมาแบบนั้น) ส่วนการตรวจข้อมูลและกันสแปมเป็นหน้าที่ฝั่ง Web3Forms
- security headers อยู่ที่ `public/_headers`
