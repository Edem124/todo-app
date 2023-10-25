
<script setup>
defineProps(['icon','title','span'])

</script>

<template>
 <button  class="w-full flex items-center justify-between cursor-pointer p-1 px-2 py-1 my-[8px] hover:bg-gray-600 hover:rounded-lg">
    <div class="flex items-center">                  
      <component :is="icon" class="w-4 h-4"></component>
      <h2 class="block px-4">{{ title }}</h2>  
    </div>
    <span class="border-2 flex justify-center items-center rounded-sm border-gray-700 text-[8px] aspect-square h-4   bg-gray-700 ">{{ span }}</span>
  </button> 
</template>