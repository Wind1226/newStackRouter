<template>
    <div :style="{
        backgroundColor: themeStyle.backgroundColor,
        paddingTop: `${statusBarHeight}px`,
        color: themeStyle.color
    }" class="header">
        <div class="left"><img src="@/assets/header/back.png" class="fun-btn" @click="back"></div>
        <div class="center">{{ title }}</div>
        <div class="right"></div>
    </div>
</template>

<script>
    export default {
        name: "default",
        props: {
            themeStyle: {
                type: Object,
                default() {
                    return {}
                }
            },
            title: {
                type: [String, Number],
                default() {
                    return ''
                }
            }
        },
        methods: {
            back() {
                this.$emit('back');
            }
        },
        computed: {
            statusBarHeight: {
                get() {
                    return this.$store.getters.statusBarHeight;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        height: 88px;
        font-size: 28px;
        padding: 0 30px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        .left {
            img {
                width: 15px;
                height: 28px;
            }
        }
        .center {
            text-align: center;
        }
    }
</style>