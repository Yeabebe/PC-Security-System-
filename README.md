# 🖥️ Smart Anti-Theft and Identification System for PCs

This project is a **React-based web application** designed to help identify and verify student PC ownership using either manual serial number input or a scanned QR code image.

---

## 🚀 Features

- 🔍 Search for student information by entering a PC serial number manually
- 📷 Upload a QR code image to extract student data (supports HTML5 QR decoding)
- 📄 Display matching student details: Name, Department, Year, Phone, Email
- ❌ Cancel button to reset the form and clear results

---

## 📦 Technologies Used

- **React** (Functional components + Hooks)
- **html5-qrcode** library for QR image scanning
- **Bootstrap 5** for styling

---

## 🧠 How It Works

1. **Manual Input**  
   - User types a PC Serial Number.
   - Clicks the `Check` button to find matching student data.

2. **QR Code Upload**  
   - User uploads an image containing a QR code.
   - The app reads the content, maps it to a PC serial number, and displays the data.

3. **Cancel Button**  
   - Resets input fields, uploaded files, and results.


---

## 📁 Project Structure

src/
├── components/
│ └── Dashboard.jsx
├── App.jsx
└── index.js

yaml
Copy
Edit

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/smart-anti-theft-pc.git
cd smart-anti-theft-pc
npm install
npm start
Make sure you also install html5-qrcode:

bash
Copy
Edit
npm install html5-qrcode
👤 Author
Yeabsera Abebe
Electrical and Computer Engineering | 4th Year
Passionate about building smart systems using React, AI, and automation tools.

📃 License
This project is licensed under the MIT License. See LICENSE for details.

📌 Notes
You can easily extend this app to use backend verification or a real-time database.

To test QR functionality, use real QR code images or URLs mapped to student serials.

yaml
Copy
Edit

---

Let me know if you'd like a version with badges (e.g. Netlify, Vercel, or license), or if you want me to generate a `LICENSE` file too.






