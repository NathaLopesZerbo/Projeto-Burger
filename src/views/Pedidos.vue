<template>
    <Banner />
    <div class="main-container">
        <h1>Pedidos</h1>
        <Dashboard /> 
    </div>
</template>


<script>
import Dashboard from '@/components/Dashboard.vue';

    export default{
        name: 'Pedidos',
        components: {
            Dashboard,
        }
    }
</script>