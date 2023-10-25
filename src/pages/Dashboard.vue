<script setup>
import { ref } from 'vue';
import NavItem from '../components/NavItem.vue';
import DropItem from '../components/DropItem.vue';
import Header from '../components/Header.vue';
import Columns from '../components/column.vue';
import NavigationLinks from '../components/NavigationLinks.vue';
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

const columns=ref([
    { header: 'Backlog', count: 2, data: column1 },
    { header: 'Today', count: 3, data: column2 },
    { header: 'Progress', count: 1, data: column3 },
    { header: 'Completed', count: 3, data: column4 },
]);



const buttons = ref([
  { id: 1,icon: EyeIcon, title: 'Overview',span:'V'},
  { id: 2,icon: InboxIcon, title: 'Inbox' ,span:'R'},
  { id: 3,icon: CalendarIcon, title: 'My Tasks',span:'M'},
  { id: 4,icon: ChartPieIcon, title: 'Reports',span:'W'},
]);
const items = ref([
  { id: 1, title: 'Design',color:'bg-purple-700 rounded-full w-3 h-2'},
  { id: 2, icon: EllipsisHorizontalIcon, title: 'Development',color:'bg-green-700 rounded-full w-3 h-2' },
  { id: 3, title: 'QA',color:'bg-yellow-700 rounded-full w-3 h-2'},
]);


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
                <NavItem v-for="button in buttons"
                :key="button.id"
                :title="button.title"
                :span="button.span"
                :icon="button.icon"
                />
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
                <DropItem v-for="item in items"
                :key="item.id"
                :title="item.title"
                :color="item.color"
                :icon="item.icon" />
                
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

            <div class="  text-sm mt-auto justify-between items-center ">
                <div class="h-0.5 bg-gray-700 mx-[-300px]"></div>
                <button  class="w-full flex items-center justify-between cursor-pointer p-1 px-2 py-1">
                    <div class="flex items-center"> 
                        <GlobeAltIcon class="w-4 h-4"/>
                        <h2 class="block px-4">Help & Feedback</h2>
                    </div>
                </button> 
            </div> 
        </nav>
        

        <div class="flex flex-col flex-1 bg-[#1f1d24]  h-screen ">
            <div class="bg-[#1F1D24] font-pop">
                
                <div class="h-[50px] bg-[#1F1D24] text-white">
                    <Header/>
                </div>
                
                <div class="bg-[#1F1D24] text-white justify-between py-5 px-10">
                    <div>
                        <h1 class="text-3xl font-in leading-relaxed "><strong>My Tasks</strong></h1>
                    </div>
                </div>
            </div>
            <div class="flex-1 ">
                <div class="border-b-2 border-gray-600 ">
                    <NavigationLinks/>
                </div>
                <div class="grid grid-cols-4 px-10 mt-7 text-white text-sm font-pop ">
                    <Columns v-for="(column, index) in columns" 
                    :key="index" :column-header="column.header" 
                    :column-count="column.count" 
                    :column-data="column.data" />
                    
                </div>
            </div>
        </div>
    </main>
</template>