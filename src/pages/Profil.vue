<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import { onMounted } from 'vue';

const users = ref({});

// Get the token from the session
const token = localStorage.getItem("token");

// Get the user from the API
async function getUser() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/me", { headers: { Authorization: 'Bearer ' + token } });
    users.value=response.data;
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
 
}
onMounted(async () => {
    await getUser();
    fillFormData();
})
    const formData = ref({
        first_name:'',
        last_name:'',
        username: '',
        email: '',
        password: '',
    });
    const fillFormData = () => {
      if (users.value) {
        formData.first_name = users.value.first_name;
        formData.last_name = users.value.last_name;
        formData.username = users.value.username;
        formData.email = users.value.email;
      }
    };
    const errorMessages = ref({
        first_nameError: '',
        last_nameError: '',
        usernameError: '',
        emailError: '',
        passwordError: ''
    });
    
    const successMessage = ref(null);
    const updateProfile = async () => {
        const { first_name, last_name, username, email, password} = formData.value;
         // Réinitialiser les messages d'erreur
        errorMessages.value = {
            first_nameError: '',
            last_nameError: '',
            usernameError: '',
            emailError: '',
            passwordError: ''
        };

        try {
            let hasError = false;
            
            if (!first_name.trim()) {
            errorMessages.value.first_nameError = 'First Name is required';
            hasError = true;
            }
            if (!last_name.trim()) {
                errorMessages.value.last_nameError = 'Last Name is required';
                hasError = true;
            }
            if (!username.trim()) {
                errorMessages.value.usernameError = 'Username is required';
                hasError = true;
            }
            if (!email.trim()) {
                errorMessages.value.emailError = 'email is required';
                hasError = true;
            }
            if (!password.trim()) {
                errorMessages.value.passwordError = 'Password is required';
                hasError = true;
            }
            const userId = users.value.id;
            const response = await axios.put('http://127.0.0.1:8000/api/users/profil/' + userId, formData.value, { headers: { Authorization: 'Bearer ' + token } });
            // Si la connexion réussit, vous pouvez gérer la réponse ici
            console.log(formData.value);
            formData.value= {
                first_name:'',
                last_name:'',
                username: '',
                email: '',
                password: ''
                };
                successMessage.value = "Modification éffectuée avec succès.";
        } catch (error) {
            console.error(error);
        }
    };
</script>

<template>
   


<div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
        <div class="md:flex w-full">
            <div class="hidden md:block w-1/2 bg-indigo-500 py-10 px-10 text-black">
                <div class="bg-indigo-500 p-4 rounded-lg shadow-md text-black">
                    <h1 class="text-xl font-semibold mb-4">User Profile</h1>
                    <div class="mb-4">
                    <img :src="users.avatar_url" alt="User Avatar" class="w-20 h-20 rounded-full mx-auto" />
                    </div>
                    
                    <p class=" mb-2">Username: {{ users.username }}</p>
                    <p class=" mb-2">Email: {{ users.email }}</p>
                    <p class=" mb-2">First Name: {{ users.first_name }}</p>
                    <p class=" mb-2">Last Name: {{ users.last_name }}</p>
                </div>
            </div>
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">Update your profil</h1>
                    <p>Enter new information to update your profile</p>
                </div>
                <div>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="updateProfile">
                        <div class="flex -mx-3">
                            <div class="w-1/2 px-3 mb-5">
                                <label for="first_name" class="text-xs font-semibold px-1">First name</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input v-model="formData.first_name"  type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" name="first_name" id="first_name">
                                </div>
                                <p v-if="errorMessages.first_nameError" class="text-red-500 text-sm">{{ errorMessages.first_nameError }}</p>
                            </div>
                            <div class="w-1/2 px-3 mb-5">
                                <label for="last_name" class="text-xs font-semibold px-1">Last name</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input v-model="formData.last_name" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" name="last_name" id="last_name">
                                </div>
                                <p v-if="errorMessages.last_nameError" class="text-red-500 text-sm">{{ errorMessages.last_nameError }}</p>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-2">
                                <label for="username" class="text-xs font-semibold px-1">Username</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class=" text-gray-400 text-lg"></i></div>
                                    <input v-model="formData.username" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="edemdev" name="username" id="username">
                                </div>
                                <p v-if="errorMessages.usernameError" class="text-red-500 text-sm">{{ errorMessages.usernameError }}</p>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-2">
                                <label for="email" class="text-xs font-semibold px-1">Email</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input v-model="formData.email" type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" name="email" id="email">
                                </div>
                                <p v-if="errorMessages.emailError" class="text-red-500 text-sm">{{ errorMessages.emailError }}</p>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="passwoard" class="text-xs font-semibold px-1">Password</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input v-model="formData.password" type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" name="password" id="password">
                                </div>
                                <p v-if="errorMessages.passwordError" class="text-red-500 text-sm">{{ errorMessages.passwordError }}</p>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <button type="submit" class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">UPDATE NOW</button>
                            </div>
                            <div v-if="successMessage" class="text-green-600 dark:text-green-400">
                                {{ successMessage }}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


</template>