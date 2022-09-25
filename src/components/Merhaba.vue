<template>
<h1>Naber Kız? {{isim}}</h1>
<button v-on:click="getData()">Click Me</button>
</template>

<script>
export default {
    name: "Merhaba",
    data() {
        return {
            isim: "Kezban"
        }

    },
    methods: {
            getData() {
                alert('Clicked Me');
            }
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
