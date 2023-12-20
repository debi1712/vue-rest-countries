<script setup>

    import { useRouter } from 'vue-router'

    const router = useRouter();
    
    const props = defineProps({
        country:{
            type: Object,
            required: true,
        },
    })
  
</script>

<template>

    <article @click="router.push(`/detail/${country.cca3}`)" class="w-80 h-96 bg-darkBlue rounded shadow overflow-hidden cursor-pointer">
        <img class="h-1/2 w-full object-cover" :src="country.flags.png" alt=""/>
        <div class="p-6">
            <h2 class="text-xl font-bold mb-4 text-white">{{ country.name.common }}</h2>
            <p class="text-white">Region: {{ country.region }}</p>
            <p class="text-white">Population: {{ country.population }}</p>
        </div>
    </article>

</template>

<style scoped>

</style>