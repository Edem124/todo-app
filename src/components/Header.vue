<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { ChevronDownIcon,ChevronUpIcon, ArrowLeftIcon,ArrowRightIcon } from '@heroicons/vue/24/outline';
    const icons = [ArrowLeftIcon, ArrowRightIcon];
    
    const title = ref('My Tasks');
    
    const router = useRouter();
    const isDropdownOpen = ref(false);
    const dropdownIcon = ref(ChevronDownIcon);

    const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
    dropdownIcon.value = isDropdownOpen.value ? ChevronUpIcon : ChevronDownIcon;
    };
    const user = ref({});
    
  // Get the token from the session
  const token = localStorage.getItem("token");

  // Get the user from the API
  async function getUser() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/me", { headers: { Authorization: 'Bearer ' + token } });
      user.value=response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
   
  }
  onMounted(async () => {
  await getUser();
  })
  const logout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/logout');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  
</script>
<template>
    <div class="flex items-center justify-between py-4 px-4">
      <div class="flex flex-row gap-x-1">
        <component :is="icon" class="w-4 h-4" v-for="icon in icons" :key="icon" ></component>
        <h1 class="text-xs">{{ title }}</h1>
      </div>
  
      <div class="relative inline-block text-left">
        <button class="px-3 font-in text-gray-400 py-2.5 rounded-full flex gap-x-2" @click="toggleDropdown">
          <img :src="user.avatar_url" class="w-6 h-6 rounded-full" />
          {{ user.first_name }} {{ user.last_name }}
          <component :is="dropdownIcon" class="w-4 h-4 mt-[6px]" />
        </button>
        <div v-if="isDropdownOpen" class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <router-link  to="/profil" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</router-link >
            <a @click="logout" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
    </div>
</template>
  
  
  