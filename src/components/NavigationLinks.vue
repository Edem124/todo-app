<script setup>
import { ref } from 'vue';
const links = ref([
  { text: 'Overview' },
  { text: 'Board' },
  { text: 'Table' },
  { text: 'Calendar' },
  { text: 'Timeline' },
  { text: 'Search', icon: 'MagnifyingGlassIcon' },
  { text: 'All Tasks', icon: 'CheckCircleIcon' },
  { text: 'Filter', icon: 'AdjustmentsHorizontalIcon' },
]);
</script>
<template>
    <ul class="flex gap-x-12 items-center px-10 text-gray-400 text-sm font-in">
      <li v-for="(link, index) in links" :key="index">
        <button class="flex gap-x-2 items-center py-5 px-0.5 relative group">
          <span>{{ link.text }}</span>
          <span class="absolute w-full h-0.5 left-3 bg-purple-700 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
        </button>
      </li>
    </ul>
  </template>
  
 
  