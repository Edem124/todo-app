<script setup>
import { ref } from 'vue';
import Draggable from 'vuedraggable';
import { EyeIcon,PlusIcon,ChevronDownIcon,CalendarIcon,ChartPieIcon,InboxIcon,ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { ArrowRightIcon,MagnifyingGlassIcon,CheckCircleIcon, ChevronUpIcon, AdjustmentsHorizontalIcon ,EllipsisHorizontalIcon,CheckIcon,ChatBubbleLeftRightIcon,GlobeAltIcon} from '@heroicons/vue/24/outline';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'

const column1 = ref([
  { title: 'Create Component', sp1:'Sprint1',sp2:'P1', p1:img1,p2:img2,p3:img3 },
  { title: 'Add abstract square', sp1:'Sprint1',sp2:'P1', p1:img1,p2:img2,p3:img3 },
  { title: 'Review Call', p1:img1 },
]);
const column2 = ref([
  { title: 'QA Session', sp1:'Sprint2',sp2:'P3', p1:img1,p2:img2,p3:img3 },
  { title: 'Stripe Integration', sp1:'Sprint3',sp2:'P2', p1:img1,p2:img2},
]);
const column3 = ref([
  { title: 'Dev Meetup', sp1:'Sprint3',sp2:'P3', p1:img1,p2:img2},
]);
const column4 = ref([
  { title: 'Setup Cube', sp1:'Sprint1',sp2:'P1', p1:img1,p2:img2,p3:img3 },
  { title: 'Request New Icons ', sp1:'Sprint1',sp2:'P1', p1:img1,p2:img2,p3:img3 },
  { title: 'New PR', sp1:'Sprint3',sp2:'P2', p1:img1,p2:img2 },
]);


const buttons = ref([
  { icon: EyeIcon, title: 'Overview',span:'V'},
  { icon: InboxIcon, title: 'Inbox' ,span:'V'},
  { icon: CalendarIcon, title: 'My Tasks',span:'M'},
  { icon: ChartPieIcon, title: 'Reports',span:'W'},
]);
const isDropdownOpen = ref(false);
const dropdownIcon = ref(ChevronDownIcon);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  dropdownIcon.value = isDropdownOpen.value ? ChevronUpIcon : ChevronDownIcon;
};
</script>

<template>
    <main class=" max-h-screen h-screen overflow-hidden flex flex-row  font-normal ">
        <nav class="w-[220px] bg-[#2B2931] max-h-screen h-screen flex flex-col  text-white p-3 ">
            <div class="flex w-full justify-between items-center">
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                </button>
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            </div>
            
            <button type="button" class="w-full mt-5 text-white bg-[#7f55d6] hover:bg-[#7f55d6] focus:ring-4 focus:ring-[#7f55d6] font-medium rounded-lg text-sm px-12 py-2.5  dark:bg-[#7f55d6] dark:hover:bg-[#7f55d6] focus:outline-none dark:focus:ring-[#7f55d6]">
                Quick Actions
            </button> 
            
            <div class="flex-col text-gray-400 mb-[20px] mt-[30px]  text-sm justify-between">
                <button v-for="(button, index) in buttons" :key="index" class="w-full flex items-center justify-between cursor-pointer p-1 px-2 py-1 my-[8px] hover:bg-gray-600 hover:rounded-lg">
                    <div class="flex items-center">
                        
                        <component :is="button.icon" class="w-4 h-4"></component>
                        <h2 class="block px-4">{{ button.title }}</h2>
                    </div>
                    <span class="border-2 flex justify-center items-center rounded-sm border-gray-700 text-[8px] aspect-square h-4   bg-gray-700 ">{{ button.span }}</span>
                </button>  
            </div>     
            
            <div class="h-0.5 bg-gray-700 "></div>
            
            <div class="flex-col mt-3 text-gray-500 justify-between ">
                <button class="flex w-full p-2 justify-between cursor-pointer">
                    <div class="flex items-center">
                        <h2 class="block text-sm">Favorites</h2>
                        <ChevronDownIcon class="w-4 ml-2 h-4 block" />   
                    </div>
                    <PlusIcon class="flex w-4 h-4"/>
                </button>
                
                <button class="w-full flex items-center justify-between cursor-pointer p-1 px-2 py-1 hover:bg-gray-600 hover:rounded-lg">
                <div class="flex items-center">
                    <span class="bg-purple-700 rounded-full w-3 h-2"></span>
                    <h2 class="block px-4">Design</h2>
                </div>
                </button>
                
                <button class="w-full flex items-center justify-between cursor-pointer p-1 px-2 py-1 hover:bg-gray-600 hover:rounded-lg">
                <div class="flex items-center">
                    <span class="bg-green-500 rounded-full w-3 h-2"></span>
                    <h2 class="block px-4">Developpement</h2>
                </div>
                <EllipsisHorizontalIcon class="w-4 h-4"/>
                </button>
                
                <button class="w-full flex items-center justify-between cursor-pointer p-1 px-2 py-1 hover:bg-gray-600 hover:rounded-lg">
                <div class="flex items-center">
                    <span class="bg-yellow-500 rounded-full w-3 h-2"></span>
                    <h2 class="block px-4">QA</h2>
                </div>
                </button>
            </div>
            
            <div class="flex-col text-gray-500">
                <button class="flex w-full p-2 justify-between cursor-pointer">
                <div class="flex items-center">
                    <h2 class="block text-sm">All Projects</h2>
                    <ChevronDownIcon class="w-4 ml-2 h-4 block" />   
                </div>
                <PlusIcon class="flex w-4 h-4"/>
                </button>
            </div> 

            <div class="  text-sm mt-auto ">
                <div class="h-0.5 bg-gray-700 mx-[-300px]"></div>
                <button  class="w-full flex items-center justify-between cursor-pointer p-1 px-2 py-1">
                <div class="flex items-center"> 
                    <GlobeAltIcon class="w-4 h-4"/>
                    <h2 class="block px-4">Help & Feedback</h2>
                </div>
                </button> 
            </div> 
              

        </nav>
        

        <div class=" flex-1 bg-[#1f1d24]  h-screen ">
            <div class="bg-[#1F1D24] font-pop">
                
                <div class="h-[50px] bg-[#1F1D24] text-white">
                    <div class="flex items-center justify-between py-4 px-4">
                        <div class=" flex flex-row gap-x-1">
                            <ArrowLeftIcon class="w-4 h-4"/>
                            <ArrowRightIcon class="w-4 h4"/>
                            <h1 class="text-xs  ">My Tasks</h1>
                        </div>

                        <div class="relative inline-block text-left">
                            <button class="px-3 font-in text-gray-400 py-2.5 rounded-full flex gap-x-2" @click="toggleDropdown">
                                <img src="../assets/img3.jpeg" class="w-6 h-6 rounded-full"/>
                                Oliva Wallberg
                                <component :is="dropdownIcon" class="w-4 h-4 mt-[6px]" />
                            </button>
                            <div v-if="isDropdownOpen" class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="py-1">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="bg-[#1F1D24] text-white justify-between py-5 px-10">
                    <div>
                        <h1 class="text-3xl font-in leading-relaxed "><strong>My Tasks</strong></h1>
                    </div>
                </div>
            </div>
            <div>
                <div class="border-b-2 border-gray-600 ">
                    <ul class="flex gap-x-12 items-center px-10  text-gray-400 text-sm font-in">
                        <li>
                            <button class="flex gap-x-2 items-center py-5 px-0.5 relative group">
                                <span>Overview </span>
                                <span class="absolute w-full h-0.5 left-3 bg-purple-700 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                            </button>
                        </li>
                        <li>
                            <button class="flex gap-x-2 items-center py-5 px-0.5  relative group">
                                <span >Board </span>
                                <span class="absolute w-full h-0.5 left-3 bg-purple-700 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                            </button>
                        </li>
                        <li>
                            <button class="flex gap-x-2 items-center py-5 px-0.5  relative group">
                                <span >Table </span>
                                <span class="absolute w-full h-0.5 left-3 bg-purple-700 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                            </button>
                        </li>
                        <li>
                            <button class="flex gap-x-2 items-center py-5 px-0.5  relative group">
                                <span >Calender </span>
                                <span class="absolute w-full h-0.5 left-3 bg-purple-700 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                            </button>
                        </li>
                        <li>
                            <button class="flex gap-x-2 items-center py-5 px-0.5  relative group">
                                <span >Timeline </span>
                                <span class="absolute w-full h-0.5 left-3 bg-purple-700 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                            </button>
                        </li>
                        <li>
                            <button class="flex gap-x-2 items-center py-5 px-0.5 ml-44 relative group">
                                <span ><MagnifyingGlassIcon class="w-4 h-4"/> </span>
                                <span >Search </span>
                                <span class="absolute w-full h-0.5 left-3 bg-purple-700 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                            </button>
                        </li>
                        <li>
                            <button class="flex gap-x-3 items-center py-3 px-0.5 relative group">
                                <span><CheckCircleIcon class="w-4 h-4"/></span>
                                <span >All Task  </span>
                                <span class="absolute w-full h-0.5 left-3 bg-purple-700 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                            </button>
                        </li>
                        <li>
                            <button class="flex gap-x-2 items-center py-5 px-0.5 relative group">
                                <span><AdjustmentsHorizontalIcon class="w-4 h-4"/></span>
                                <span >Filter </span>
                                <span class="absolute w-full h-0.5 left-3 bg-purple-700 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="grid grid-cols-4 px-10 mt-7 text-white text-sm font-pop ">
                    <!-- Colonne 1 -->
                    <div class="w-60 text-sm  rounded-xl">
                        <!-- En-tête -->
                        <div class="mb-2 flex gap-x-2">
                            <button class="text-left">Backlog</button>
                            <span>3</span>
                            <div class="flex px-32">
                            <button class="ml-2"><EllipsisHorizontalIcon class="w-4 h-4" /></button>
                            <button><PlusIcon class="w-4 h-4" /></button>
                            </div>
                        </div>

                        <!-- Grandes cartes -->
                        
                        <draggable :list="column1" :group="{ name: 'columns' }" class=" space-y-2.5  p-1.5  overflow-y-auto   bg-gradient-to-b from-[#242228]   rounded " >
                            <template v-slot:item="{ element }">
                                    <div class="bg-[#2B2931] mb-2.5  cursor-grab min-h-[120px] p-1.5 rounded text-sm">
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
                    <!-- Colonne 2 -->
                    <div class="w-60 text-sm rounded-xl">
                        <!-- En-tête -->
                        <div class="mb-2 flex gap-x-2">
                            <button class="text-left">Backlog</button>
                            <span>3</span>
                            <div class="flex px-32">
                            <button class="ml-2"><EllipsisHorizontalIcon class="w-4 h-4" /></button>
                            <button><PlusIcon class="w-4 h-4" /></button>
                            </div>
                        </div>

                        <!-- Grandes cartes -->
                        
                        <draggable :list="column2" :group="{ name: 'columns' }" class=" space-y-2.5 p-1.5 overflow-y-auto bg-gradient-to-b from-[#242228] h-[350px] rounded " >
                            <template v-slot:item="{ element }">
                                    <div class="bg-[#2B2931] min-h-[120px] mb-2.5 cursor-grab  p-1.5 rounded text-sm">
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
                    <!-- Colonne 3 -->
                    <div class="w-60 text-sm rounded-xl">
                        <!-- En-tête -->
                        <div class="mb-2 flex gap-x-2">
                            <button class="text-left">Backlog</button>
                            <span>3</span>
                            <div class="flex px-32">
                            <button class="ml-2"><EllipsisHorizontalIcon class="w-4 h-4" /></button>
                            <button><PlusIcon class="w-4 h-4" /></button>
                            </div>
                        </div>

                        <!-- Grandes cartes -->
                        
                        <draggable :list="column3" :group="{ name: 'columns' }" class="overflow-y-auto space-y-2.5 p-1.5  bg-gradient-to-b from-[#242228] h-[350px] rounded " >
                            <template v-slot:item="{ element }">
                                    <div class="bg-[#2B2931] mb-2.5 min-h-[120px] cursor-grab p-1.5 rounded text-sm">
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

                    <!-- Colonne 4 -->
                    <div class="w-60 text-sm rounded-xl">
                        <!-- En-tête -->
                        <div class="mb-2 text-gray-400 flex gap-x-2">
                            <button class="text-left">Backlog</button>
                            <span>3</span>
                            <div class="flex px-32">
                            <button class="ml-2"><EllipsisHorizontalIcon class="w-4 h-4" /></button>
                            <button><PlusIcon class="w-4 h-4" /></button>
                            </div>
                        </div>

                        <!-- Grandes cartes -->
                        
                        <draggable :list="column4" :group="{ name: 'columns' }" class=" space-y-2.5 p-1.5  bg-gradient-to-b from-[#242228] h-[350px] overflow-y-auto scroll-m-0 rounded " >
                            <template v-slot:item="{ element }">
                                    <div class="bg-[#2B2931] mb-2.5 min-h-[120px] p-1.5 cursor-grab rounded text-gray-400 text-sm">
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
                </div>
            </div>
        </div>
    </main>
</template>