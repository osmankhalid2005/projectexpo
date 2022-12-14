import React from 'react';
import { Button, View } from 'react-native';

import {collection, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';

import {db} from './firestoreconfig.js';

// To create or overwrite a single document, use the following language-specific set() methods:

async function writeData() {
  await setDoc(doc(db, "users", "kamal@gmail.com"), {
    name: "Kamal Ahmed",
    age: "22"    
  });
 
}

/*
If the document does not exist, it will be created. If the document does exist, its contents will be overwritten with the newly provided data, unless you specify that the data should be merged into the existing document, as follows:
*/
function mergeData()
{
  const userRef = doc(db, 'users', 'ali@gmail.com');
setDoc(userRef, { age: 46 }, { merge: true });
}


async function readData() {
  
  const docRef = doc(db, "users", "ali@gmail.com");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

    
}


const App = () => {   
  return (

<View
style = {{marginTop: 50}}
>   
   <Button   
   title='Write Data'
   onPress={ () => writeData()} 
    />

   <Button
   title='Read Data'
   onPress={ () => readData()} 
    />

<Button
   title='Merge Data'
   onPress={ () => mergeData()} 
    />

   </View>
   );
}

export default App;

