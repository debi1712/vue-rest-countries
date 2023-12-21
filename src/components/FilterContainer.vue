<script setup>
   
   const regions = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
   ];

   const query = "";

</script>

<template>

    <div class="flex justify-between flex-wrap gap-8">
        
        <div class="bg-darkBlue px-6 py-3 rounded-md flex items-center gap-2 shadow">
            <button @click="$emit('handleQuery', query)">
                <img src="../assets/design/icons/searchw.svg" alt="">
            </button>
            <input v-model="query" class="text-white bg-darkBlue pl-2" type="text" placeholder="Search for a country" v-on:keyup.enter="$emit('handleQuery', query)">
        </div>

        <select class="bg-darkBlue px-6 py-3 rounded-md text-white shadow">
            <option selected disabled value="">Filter by Region</option>
            <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
        </select>

    </div>

</template>

<style scoped>

</style>


