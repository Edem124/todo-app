<script setup>
    import axios from 'axios';
    import { ref  } from 'vue';
    import { useRouter } from 'vue-router';
    const formData = ref({
      first_name:'',
        last_name:'',
        username: '',
        email: '',
        password: ''
    });
    const errorMessages = ref({
      first_nameError: '',
      last_nameError: '',
      usernameError: '',
      emailError: '',
      passwordError: ''
    });
    const successMessage = ref(null);
    const router = useRouter();

    const submitForm = async () => {
      const { first_name, last_name, username, email, password, avatar_url } = formData.value;
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
        const response = await axios.post('http://127.0.0.1:8000/api/register', formData.value);
        console.log(response.data);
        formData.value= {
          first_name:'',
          last_name:'',
          username: '',
          email: '',
          password: '',
        };
        router.push('/login');
      } catch (error) {
        console.log(error);
      }
    };
</script>

<template>
  
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input v-model="formData.first_name" type="text" name="first_name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com">
                <p v-if="errorMessages.first_nameError" class="text-red-500 text-sm">{{ errorMessages.first_nameError }}</p>
              </div>
              <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input v-model="formData.last_name" type="text" name="last_name" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com">
                <p v-if="errorMessages.last_nameError" class="text-red-500 text-sm">{{ errorMessages.last_nameError }}</p>
              </div>
              <div>
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input v-model="formData.username" type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com">
                <p v-if="errorMessages.usernameError" class="text-red-500 text-sm">{{ errorMessages.usernameError }}</p>
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input v-model="formData.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com">
                <p v-if="errorMessages.emailError" class="text-red-500 text-sm">{{ errorMessages.emailError }}</p>
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input v-model="formData.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <p v-if="errorMessages.passwordError" class="text-red-500 text-sm">{{ errorMessages.passwordError }}</p>
              </div>
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-700">Create an account</button>
              <div v-if="successMessage" class="text-green-600 dark:text-green-400">
                {{ successMessage }}
            </div>
              <p class="text-sm font-light text-blue-700">
                Already have an account? <router-link class=" font-medium text-primary-600 hover:underline dark:text-primary-500" to="/login">Login here</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  
</template>
