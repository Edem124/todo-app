<script setup>
defineProps(['icon','title','color'])
</script>

<template>
    <div>
        <button class="w-full flex items-center justify-between cursor-pointer p-1 px-2 py-1 hover:bg-gray-600 hover:rounded-lg">
            <div class="flex items-center">
                <span :class="color"></span>
                <h2 class="block px-4">{{ title }}</h2>
            </div>
            <component :is="icon" class="w-4 h-4" v-if="icon"/>
        </button>
    </div>
</template>