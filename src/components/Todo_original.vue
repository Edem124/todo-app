<template>
  <div class="flex items-center justify-center w-screen h-screen font-medium">
    <div class="flex flex-grow items-center justify-center bg-gray-900 h-full">
      <div class="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
        <div class="flex items-center mb-6">
          <svg class="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h4 class="font-semibold ml-3 text-lg"> My Todo App</h4>
        </div>

        <!-- Liste de tâches -->
        <div>
          <button class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
            <svg class="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <input class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" v-model="newTask" @keyup.enter="addTask" :placeholder="editingTask ? 'Modifier la tâche' : 'Ajouter une tâche'">
          </button>

          <ul>
            <li v-for="task in tasks" :key="task.id">
              <input class="hidden" type="checkbox" :id="'task_' + task.id" v-model="task.checked" @click="toggleTask(task)">
              <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" :for="'task_' + task.id">
                <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                  <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="ml-4 text-sm" :class="{ 'line-through': task.checked }">{{ task.text }}</span>
              </label>
              <div class="flex justify-end">
                <button v-if="!task.checked" class="text-info" data-mdb-toggle="tooltip" title="Edit todo" @click="editTask(task)">
                  <svg class="w-5 h-5 text-info fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.293 6.293a1 1 0 011.414 0l1 1-4 4-1-1 4-4z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-6a1 1 0 00-1-1H4a1 1 0 00-1 1v6a2 2 0 002 2h6a1 1 0 001-1V7a2 2 0 00-2-2H4z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg>
                </button>
                <button v-if="!task.checked" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo" @click="removeTask(task)">
                  <svg class="w-5 h-5 text-danger fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 4.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const newTask = ref('');
  const tasks = ref([
    { id: 1, text: 'Trim the verge.', checked: true },
    
  ]);
  let editingTask = null;

  const addTask = () => {
    if (newTask.value.trim() !== '') {
      if (editingTask) {
        
        editingTask.text = newTask.value;
        editingTask = null;
      } else {
        
        tasks.value.push({ id: Date.now(), text: newTask.value, checked: false });
      }
      newTask.value = '';
    }
  };

  const removeTask = (taskToRemove) => {
    const index = tasks.value.findIndex(task => task.id === taskToRemove.id);
    if (index !== -1) {
      tasks.value.splice(index, 1);
    }
  };

  const toggleTask = (task) => {
    task.checked = !task.checked;
  };

  const editTask = (taskToEdit) => {
    editingTask = taskToEdit;
    newTask.value = taskToEdit.text; 
  };
</script>
