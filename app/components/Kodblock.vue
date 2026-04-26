<!-- src/components/Kodblock.vue -->
<template>
    <div class="flex-grid-item" v-on:click="selKod">{{ name }}</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['name'],
    methods: {
        selKod: function() {                        
            this.$emit('selkat');
        }
    }  
});
</script>

