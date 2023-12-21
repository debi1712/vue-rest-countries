<script setup>

const correoElectronico = 'desantiagodeborah@gmail.com';

const correoElectronicoLink = `mailto:${correoElectronico}`;

</script>

<template>

    <footer class="justify-between items-center bg-darkBlue text-white pt-6 pb-6 flex min-w-full">
        <p class="pl-5">Deborah De Santiago</p>
        <a :href="correoElectronicoLink" class="pr-5">{{correoElectronico}}</a>
    </footer>

</template>

<style scoped>

</style>