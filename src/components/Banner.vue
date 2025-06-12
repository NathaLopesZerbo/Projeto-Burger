<template>
    <div id="main-banner">
        <h1>Make Your Burger</h1>
    </div>
    
</template>

<script>
import Banner from '@/components/Banner.vue'

    export default{
        name: "Banner"
    }
</script>

<style scoped>
    #main-banner{
        background-image: url('/img/burger.jpg');
        background-position: 0 -200px;
        background-size: cover;
        background-attachment: fixed;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    #main-banner h1{
        color: #fff;
        text-align: center;
        font-size: 40px;
        background-color: #222;
        padding: 20px 40px;
    }

</style>