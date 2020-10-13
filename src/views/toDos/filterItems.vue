<template>
    <p class="filters">
        <span v-for="item in items"
              :key="item.value"
              @click="$emit('update:filterVal',item.value)"
              :class="{selected: filterVal === item.value}">{{item.label}}</span>
    </p>
</template>

<script>
    export default {
        name: "filterItems",
        props: ['items', 'filterVal'],
        emits: ['update:filterVal']
    }
</script>

<style scoped>
    .filters span {
        font-size: 14px;
        padding: 2px 4px;
        margin-right: 4px;
        border: 1px solid transparent;
    }

    .filters span.selected {
        border-color: rgba(173, 47, 47, 0.2);
    }
</style>
