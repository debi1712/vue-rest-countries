<script setup>

    import { onMounted, reactive, watch } from "vue";
    import CountryCard from '../components/CountryCard.vue';


    const state = reactive ({
        countries: [],
        dataCountries: [],
    });


    const props = defineProps({
        query: {
            type: String,
            required: false,
        },
    });


    onMounted(() => {
        fetchCountries ();
    });


    watch(
        () => props.query,
        () => {
            if (props.query) {
                const regex = new RegExp(`^${props.query.toLocaleLowerCase()}`, 'i');
                state.countries = state.dataCountries.filter((country) =>
                    regex.test(country.name.common.toLocaleLowerCase())
                );
            } else {
                state.countries = state.dataCountries;
            }
        }
    );


    const fetchCountries = async () => {
        try{
          const response = await fetch("https://restcountries.com/v3.1/all");
          const data = await response.json();
          state.countries = data;
          state.dataCountries = data;
        } catch (error) {
          console.log(error);
        }
    };

</script>


<template>

    <div class = "mt-12">
        <ul class = "flex gap-8 flex-wrap justify-center">
            <CountryCard v-for="country in state.countries" :key="country.name.common" :country="country"/>
        </ul>
    </div>

</template>

<style scoped>

</style>