<template>
    <div class="message-container">
        <p>{{ msg }}</p>
    </div>
</template>


<script>
    export default{
        name: 'Message',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .message-container{
        font-size: 15px;
        color: white;
        background-color: rgb(46, 175, 46);
        border-radius: 5px;
        padding: 10px; 
        max-width: 400px;
        margin: 30px auto ;
        }
</style>