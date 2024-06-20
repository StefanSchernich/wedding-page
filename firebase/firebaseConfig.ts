import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNsNwirOQ7yLnzdZDba8q9C9n_AMiHcyU",
  authDomain: "hochzeitverostefan.firebaseapp.com",
  projectId: "hochzeitverostefan",
  storageBucket: "hochzeitverostefan.appspot.com",
  messagingSenderId: "85879675015",
  appId: "1:85879675015:web:b93a4007cc0d7cf83f4022",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
