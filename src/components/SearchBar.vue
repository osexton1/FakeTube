<template>
    <div>
        <!-- @input is equivalent to v-on:input -->
        <input @input="onInput" />
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        methods: {
            onInput: function(event) {
                // The first term of the function is completely up to you. Name the event as you like
                this.$emit('termChange', event.target.value);
            }
        }
    };
</script>

<style scoped>
    input {
        width: 75%;
    }

    div {
        text-align: center;
        margin: 20px;
    }
</style>
