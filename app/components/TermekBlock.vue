<!-- src/components/Termekblock.vue -->
<template>
    <div class="flex-grid-item" v-on:click="addDataItem">{{ name }}</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['name'],
    methods: {
        selKod: function() {                        
            this.$emit('add');
        }
    }  
});
</script>