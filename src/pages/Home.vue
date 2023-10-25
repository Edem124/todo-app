<template>
    <div>
        <nav class="bg-gray-100">
            <div class="max-w-6xl mx-auto px-8">
                    <div class="flex justify-between">
                        <div class="flex space-x-4">
                            <a class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900" href="#">
                            <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <span class="font-bold">EdemDev</span>
                            </a> 
                        </div>
                        
                        <div class="hidden md:flex items-center space-x-1">
                            <router-link class="py-2 px-3 bg-blue-400 hover:bg-blue-300 text-white-900 hover:text-blue-800 rounded shadow transition duration-300" to="/login">Login</router-link>
                            <router-link class="py-2 px-3 bg-blue-400 hover:bg-blue-300 text-white-900 hover:text-blue-800 rounded shadow transition duration-300" to="/register">Register</router-link>
                        </div>
                        
                    </div>
            </div>
        </nav>

        <div class="py- text-center">
            <h2 class="font-extrabold 2xl md:4xl lg:text-6xl p-10 ">Helping you intergrate with Vue.JS!</h2>
        </div>
        <div class="shadow-sm border border-red-200">
            <figure class="md:flex md:justify-center md:items-center bg-gray-100 rounded-xl p-8">
            <img class="md:w-80 md:h-auto md:rounded-none md:mx-0 w-32 h-32 rounded-full mx-auto" src="../assets/img1.jpg" alt="" width="384" height="512">
            <img class="md:w-80 md:h-auto md:rounded-none md:mx-0 w-32 h-32 rounded-full mx-auto" src="../assets/img2.jpeg" alt="" width="384" height="512">
            <img class="md:w-80 md:h-auto md:rounded-none md:mx-0 w-32 h-32 rounded-full mx-auto" src="../assets/img3.jpeg" alt="" width="384" height="512">
            </figure>
        </div>
    </div>
    

</template>
  
  