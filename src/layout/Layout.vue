<template>
    <div @scroll="scroll" ref="layout" class="layout">
        <slot />
    </div>
</template>

<script>
    export default {
        name: "Layout",
        // 进入已经缓存的页面触发
        activated() {
            this.$refs.layout.scrollTop = this.scrollTop;
        },
        data(){
            return {
                test: '',
                scrollTop: 0
            }
        },
        methods: {
            scroll(e) {
                this.scrollTop = e.target.scrollTop;
            },
        }
    }
</script>

<style scoped lang="scss">
    .layout {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 5;
        overflow-y: auto;
        background-color: #fff;
    }
</style>