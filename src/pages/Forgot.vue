<script setup>

    import { ref , reactive } from 'vue';
    import axios from 'axios';
    import { useRouter,useRoute } from 'vue-router';

    let formData = ref({
        email: '',
        password: '',
        password_confirmation: '',
        token:'',

    });
    const errorMessages = ref({
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
    });
    const router = useRouter();
    const route=useRoute();

    console.log(route.query.token);
    const submitForm = async () => {
        const {password, password_confirmation} = formData.value;
         // Réinitialiser les messages d'erreur
        errorMessages.value = {
            passwordError: '',
            confirmPasswordError: '',
        };
        try {
            let hasError = false;

            if (!password.trim()) {
                errorMessages.value.passwordError = 'Password is required';
                hasError = true;
            }

            if (!password_confirmation.trim()) {
                errorMessages.value.confirmPasswordError = 'Confirm Password is required';
                hasError = true;
            }
            
            
            if (password !== password_confirmation) {
                errorMessages.value.confirmPasswordError = 'Passwords do not match';
                hasError = true;
            }
            const token = route.query.token;
            const email = route.query.email;
            
            formData.value.token = token;
            formData.value.email = email;
            console.log(formData.value);
            const response = await axios.post('http://127.0.0.1:8000/api/password/reset',formData.value);
            console.log(response.data);

            formData.value= {
                password: '',
                password_confirmation: '',
            };
            router.push('/login');
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
                        Change Password
                    </h2>
                    <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" @submit.prevent="submitForm">
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input v-model="formData.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                            <p v-if="errorMessages.passwordError" class="text-red-500 text-sm">{{ errorMessages.passwordError }}</p>
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input v-model="formData.password_confirmation" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                            <p v-if="errorMessages.confirmPasswordError" class="text-red-500 text-sm">{{ errorMessages.confirmPasswordError }}</p>
                        </div>
                        <button type="submit" class="w-full text-white  bg-blue-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
                    </form>
                </div>
            </div>
        </section>
    </div>


                
    
</template>