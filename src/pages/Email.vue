<script setup>
    import axios from 'axios';
    import { ref,} from 'vue';

    let formData = ref({
        email: '',
    });
    const errorMessages = ref({
        emailError: '',
    });

    const submitForm = async () => {
        const { email } = formData.value;
        errorMessages.value = {
            emailError: '',
        };
        try {
            let hasError = false;
            if (!email.trim()) {
                errorMessages.value.emailError = 'Email is required';
                hasError = true;
            }
            const response = await axios.post('http://127.0.0.1:8000/api/password/email',formData.value);
            console.log(response.data);
            if (response.data.message === 'Email de réinitialisation de mot de passe envoyé avec succès') {
                const resetToken = response.data.token; // Assurez-vous que la réponse contient le token
                
                // Enregistrez le token dans le local storage
                localStorage.setItem('resetToken', resetToken);
            }
            formData.value= {
                email: '',
            };
        } catch (error) {
            console.log(error);
        }
    };
</script>

<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Password Reset Password
                    </h2>
                    <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" @submit.prevent="submitForm">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input v-model="formData.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" >
                            <p v-if="errorMessages.emailError" class="text-red-500 text-sm">{{ errorMessages.emailError }}</p>
                        </div>
                       
                         <button type="submit" class="w-full text-white  bg-blue-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
                    </form>
                </div>
            </div>
        </section>
    </div>   
</template>