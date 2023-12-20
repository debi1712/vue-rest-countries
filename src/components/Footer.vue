<script setup>

const correoElectronico = 'desantiagodeborah@gmail.com';

const correoElectronicoLink = `mailto:${correoElectronico}`;

</script>

<template>

    <footer class="flex justify-between items-center bg-darkBlue text-white mt-5 pt-6 pb-6">
        <p class="pl-5">Deborah De Santiago</p>
        <a :href="correoElectronicoLink" class="pr-5">{{correoElectronico}}</a>
    </footer>

</template>

<style scoped>

</style>