importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// ВАЖНО: Конфигурация здесь должна быть такой же, как в вашем приложении
const firebaseConfig = {
  apiKey: "AIzaSyDMB6joYk4W37-_q64NMVHDMfLKjO4zlIQ",
  authDomain: "mxi-222.firebaseapp.com",
  projectId: "mxi-222",
  storageBucket: "mxi-222.appspot.com",
  messagingSenderId: "97121151340",
  appId: "1:97121151340:web:fc00a8e93d774e3a822b49"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
