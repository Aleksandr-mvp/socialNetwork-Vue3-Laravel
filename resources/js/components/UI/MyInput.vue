<template>
    <input
        type="text"
        class="input"
        :value="modelValue"
        @input="updateInput"
    >
</template>

<script>
export default {
    name: "MyInput",
    props: ['modelValue'],

    methods: {
        updateInput() {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>
