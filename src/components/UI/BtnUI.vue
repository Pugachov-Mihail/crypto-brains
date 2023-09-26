<template>
    <button>{{ name }}</button>
</template>

<script>
export default {
    name: "btn-ui",
    props: {
        name: {
            type: String,
            requered: true
        }
    }
}
</script>

<style>
button {
    height: 2em;
    width: 15vw;
    background-color: #1B70F1;
    color: #CFD3DA;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    font-weight: 700;
}
</style>