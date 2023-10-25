<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const formData = ref({
        email: '',
        password: '',
        
    });
    const errorMessages = ref({
        emailError: '',
        passwordError: '',
        
    });
    const router = useRouter();

    const submitForm = async () => {
        const { email, password,  terms } = formData.value;
        errorMessages.value.emailError = '';
        errorMessages.value.passwordError = '';

        try {
            let hasError = false;
            
            if (!email.trim()) {
                errorMessages.value.emailError = 'Email is required';
                hasError = true;
            }

            if (!password.trim()) {
                errorMessages.value.passwordError = 'Password is required';
                hasError = true;
            }
            const response = await axios.post('http://127.0.0.1:8000/api/login', formData.value);
            // Si la connexion réussit, vous pouvez gérer la réponse ici
            const { access_token } = response.data;
            localStorage.setItem('token', access_token);
            console.log(response.data);
            formData.value= {
                email: '',
                password: '',
                };
            router.push('/todo');
        } catch (error) {
            // Si la connexion échoue, vous pouvez gérer l'erreur ici
            if (error.response.status === 401) {
            errorMessages.value.emailError = 'Email ou mot de passe incorrect';
            } else {
            console.error(error);
            }
        }
    };
</script>

<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="submitForm">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input v-model="formData.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" >
                                <p v-if="errorMessages.emailError" class="text-red-500 text-sm">{{ errorMessages.emailError }}</p>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input v-model="formData.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                <p v-if="errorMessages.passwordError" class="text-red-500 text-sm">{{ errorMessages.passwordError }}</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input v-model="formData.terms" id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" >
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <router-link class="text-sm  text-blue-700 font-medium text-primary-600 hover:underline dark:text-primary-500" to="/email">Forgot password?</router-link>   
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 bg-blue-800 dark:focus:ring-primary-800">Sign in</button>
                            <p class="text-sm font-light text-blue-700 dark:text-gray-400">
                                Don’t have an account yet? <router-link class="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/register">Sign Up</router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>