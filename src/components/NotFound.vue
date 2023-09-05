<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
  <div class="relative inline-block text-left">
    <button class="px-3 py-2.5 rounded-full flex gap-x-2 hover:bg-gray-700" @click="toggleDropdown">
      <img src="../assets/img3.jpeg" class="w-6 h-6 rounded-full"/>
      KAMADO Tandjiro
    </button>
    <div v-if="isDropdownOpen" class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div class="py-1">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
      </div>
    </div>
  </div>
</template>


