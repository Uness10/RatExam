import { projectAuth } from "../firebase/config"
import { ref } from "vue"

const error = ref(null)

const login = async (email, password) => {
    error.value = null
    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password)
        if (!response) {
            throw new Error('Login failed')
        }
        console.log(response)
        return response
    } catch (err) {
        console.error('Login Error:', err.message); 
        error.value = err.message;
        alert("Wrong email or password");

    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin;
