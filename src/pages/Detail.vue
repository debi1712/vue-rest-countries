<script setup>
   
    import { onMounted, reactive } from "vue";
    import { useRoute } from "vue-router";


    const route = useRoute();


    const state = reactive({
        country: null,
    });


    onMounted(() => {
        fetchCountry();
    });


    const fetchCountry = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${route.params.alpha3Code}`);
            const data = await response.json();
            state.country = data; // asignamos los datos al array de países
            console.log(state.country);
        } catch (error) {
            console.log(error);
        }
    };

    
</script>


<template>

    <main  class="text-white min-h-screen flex-col p-8">
        <router-link to="/" class="p-2 mt-24 bg-darkBlue border-x-veryDarkBlueLight">Back</router-link>
        <h1 class="mt-8 ml-12">Country code by alpha-3 code: {{ route.params.alpha3Code }}</h1>
    </main>

</template>


<style scoped>

</style>