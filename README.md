# CollabChat

**CollabChat** is a full-stack real-time chat application built with the MERN stack. It supports one-to-one chats, group messaging, typing indicators, real-time updates via Socket.IO, user authentication, and more — all within a clean and responsive UI.

## 🚀 Live Demo

👉 [Launch CollabChat](https://collabchat-75tf.onrender.com)

## 🛠️ Tech Stack

**Frontend:** React.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Atlas)  
**Real-time Engine:** Socket.IO  
**UI Framework:** Chakra UI

---

## 💻 Run Locally

Follow the steps below to run the project on your machine:

### 1. Clone the repository

```bash
git clone https://github.com/Tushar-gitprofile/CollabChat
cd CollabChat

2. Install backend dependencies
bash
Copy
Edit
npm install

3. Set up environment variables
Create a .env file in the root folder and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

4. Start the backend server
bash
Copy
Edit
npm run start

5. Install frontend dependencies
bash
Copy
Edit
cd frontend
npm install

6. Start the React frontend
bash
Copy
Edit
npm start
Open http://localhost:3000 to view the frontend.



✨ Features
🔐 User Authentication – Login & Signup with image upload

💬 One-to-One & Group Chat – Real-time chat with Socket.IO

🧑‍🤝‍🧑 Group Management – Create, rename, and manage group members

⌨️ Typing Indicators – Real-time feedback when someone is typing

🔎 User Search – Search by name or email to start chats

🔔 Notifications – Instant new message alerts

📸 Profile Modal – View other users' info

☁️ Cloudinary Integration – Secure image uploads
```

👨‍💻 Developed By
Tushar Dhotre
🔗 GitHub: @Tushar-gitprofile
