<template>
<button class="btn">
    <slot></slot>
</button>
</template>

<script>
export default {
    name: "MyButton"
}
</script>

<style scoped lang="scss">
.btn {
    background-color: #2d3748;
    color: #fff;
    border-radius: 5px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.8rem 3rem;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #2d3748;
    }
}
</style>
