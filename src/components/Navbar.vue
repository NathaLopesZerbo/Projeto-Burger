<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/pedidos">Pedidos</router-link>
        </div>
    </div>
</template>


<script>
    export default{
        name: 'Navbar',
        props: ["logo", "alt"]
    }
</script>

<style scoped>
    #nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px; 
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #logo{
        width: 40px;
        height: 40px;
    }

    .links{
        display: flex;
        gap: 30px;
    }

    .links a{
        color: #FCBA03;
        text-decoration: none;
        transition: 0.2s ease-in;
    }

     .links a:hover{
        color: #9e780e;
    }

</style>
