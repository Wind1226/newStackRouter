<template>
    <layout class="layout">
        <seller-header title="退换订单" @back="$router.pop()"/>
        <div class="content"></div>
    </layout>
</template>

<script>

    export default {
        name: "refund",
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .layout {
        display: flex;
        flex-direction: column;

        .content {
            flex: 1;
            background-color: red;
        }
        .network {
            margin-top: 150px;
        }
    }
</style>