import { projectAuth } from "@/firebase/config";
import { ref } from "vue";
import { projectFirestore } from '../firebase/config';

const error = ref(null);

async function AddUserName(id, Name, email,Birthdate) {
    const newDoc = projectFirestore.collection("users").doc(id);
    const disc = {
        profilePicture: 'https://via.placeholder.com/150',
        userInfo: {
          FullName: Name,
          Email: email,
          Birthdate: Birthdate,
          Address: null,
          Phone: null,
          
        },
        usefulLinks: {
          LinkedIn: null,
          GitHub: null,
        }

    };

    try {
        await newDoc.set(disc);
        console.log("Document successfully written with ID:", id);
    } catch (error) {
        console.error("Error adding document: ", error);
        throw new Error("Failed to add user data: " + error.message);
    }
}

const signup = async (email, password, FullName,Birthdate) => {
    error.value = null;
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password);
        if (!response) {
            throw new Error('Could not complete signup');
        }
        const userId = response.user.uid; // Get the user ID from the response
        await AddUserName(userId, FullName, email,Birthdate);
    } catch (err) {
        console.error('Signup Error:', err.message);
        error.value = err.message;
    }
}

const useSignup = () => {
    return { error, signup }
}

export default useSignup;
