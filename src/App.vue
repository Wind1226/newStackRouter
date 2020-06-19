<template>
    <div id="app" v-touch:right="touchRight">
        <router-view transition="forward"></router-view>
    </div>
</template>


<script>
    export default {
        data() {
            return {}
        },
        methods: {
            touchRight(e, start, end) {
                const distance = 120;
                const startDistance = 0;
                const endDistance = 30;

                if (start.X > startDistance && start.X < endDistance) {
                    // 判断距离是否执行后退事件
                    if (end.X - start.X >= distance) {
                        this.$router.pop();
                    }
                }
            }
        },
    }
</script>

<style lang="scss">
    @import '~@/style/theme.less';
    @import '~@/style/pageAnimation.scss';
    @import '~@/style/main.scss';
</style>
