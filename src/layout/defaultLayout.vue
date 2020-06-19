* 不参与任何业务开发, 只做模板拷贝用
<template>
    <layout class="layout">
        <seller-header title="退换订单" @back="_Native.finishHtml"/>
        <div class="content" v-if="!networkError"></div>
        <network-list v-else class="network" @reload="reload"/>
    </layout>
</template>

<script>
    import NetworkList from '@/components/NetworkList'
    import DefaultList from '@/components/DefaultList'

    export default {
        name: "refund",
        components: {
            NetworkList,
            DefaultList
        },
        data() {
            return {
                networkError: false
            }
        },
        methods: {
            reload() {

            }
        }
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