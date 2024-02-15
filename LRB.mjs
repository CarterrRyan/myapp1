import { db } from "./firebaseConfig.mjs";
import { collection, addDoc, doc, getDoc, getDocs } from "@firebase/firestore"; 
import cors from 'cors';

import express from 'express';
const app = express();
app.use(express.json());
app.use(cors());

let users=[];
app.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (users.some(email=> email == email)){
          return res.status(400).json({error: "Username already taken"});
        }

        users.push({email,password,name})
        
        try {
            await addDoc(collection(db, "users"), {
            email: email,
            password: password,
            name: name
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        return res.status(200).json({Success:email});
        


    } catch (e) {
        return res.status(500).json({ Error: e.toString() });
    }
});
app.post('/signin', async (req, res) => {
  try{
    //const {email ,password} = req.body;
    const querySnapshot = await getDocs(collection(db, "users"));

    const matchingUsers = querySnapshot.docs.filter(doc => {
      const userData = doc.data();
      return userData.email === req.body.email && userData.password === req.body.password;
    });

    if (matchingUsers.length > 0) {
      // Matching user found
      console.log("Matching user found:", matchingUsers[0].id);
    } else {
      // No matching user found
      console.log("No matching user found");
    }
    querySnapshot.forEach((doc) => {
     console.log(`${doc.id} => ${doc.data()}`);
     
    });
  } catch (e) {
    return res.status(500).json({ Error: e.toString() });
  }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



