<script setup>
    import { ChatBubbleLeftRightIcon,EllipsisHorizontalIcon,PlusIcon } from '@heroicons/vue/24/outline';
    import Draggable from 'vuedraggable';
    const props = defineProps({
        columnHeader: String,
        columnCount: Number,
        columnData: Array,
    });
</script>
<template>
    <div class="w-60 text-sm rounded-xl">
      <!-- En-tête -->
      <div class="mb-2 flex gap-x-2">
        <button class="text-left">{{ columnHeader }}</button>
        <span>{{ columnCount }}</span>
        <div class="flex px-32">
          <button class="ml-2"><EllipsisHorizontalIcon class="w-4 h-4" /></button>
          <button><PlusIcon class="w-4 h-4" /></button>
        </div>
      </div>
  
      <!-- Grandes cartes -->
      <draggable :list="columnData" :group="{ name: 'columns' }" class="space-y-2.5 p-1.5 overflow-y-auto bg-gradient-to-b from-[#242228] h-[350px] rounded">
        <template v-slot:item="{ element }">
          <div class="bg-[#2B2931] min-h-[120px] mb-2.5 cursor-grab p-1.5 rounded text-sm">
            <h3 class="text-sm font-normal">{{ element.title }}</h3>
            <div class="flex mt-2 space-x-2 text-xs">
              <span v-if="element.sp1" class="bg-[#3f3a48] text-white py-1 px-2 rounded">{{ element.sp1 }}</span>
              <span v-if="element.sp2" class="bg-[#5e3939] text-white py-1 px-2 rounded">{{ element.sp2 }}</span>
            </div>
  
            <div class="flex mt-2 items-center justify-between">
              <div class="flex items-center -space-x-2">
                <img v-if="element.p1" :src="element.p1" class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800">
                <img v-if="element.p2" :src="element.p2" class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800">
                <img v-if="element.p3" :src="element.p3" class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800">
              </div>
              <div class="flex items-center cursor-pointer">
                <span class="text-[10px] p-1 justify-center items-center text-white"><strong>2</strong></span>
                <ChatBubbleLeftRightIcon class="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </template>
      </draggable>
    </div>
</template>
  
  
  