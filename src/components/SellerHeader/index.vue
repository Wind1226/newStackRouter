<template>
    <!-- 如果没有指定的话, 就用默认头部 -->
    <component :is="mode ? headerMode[mode] : headerMode['Default']" :themeStyle="themeStyle" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
    import Default from './default'
    import submit from './submit'

    export default {
        name: "index",
        components: {
            Default
        },
        props: {
            mode: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        data() {
            return {
                themeStyle: {
                    backgroundColor: '#fff',
                    color: '#1c1c1c'
                },
                headerMode: {
                    Default,
                    submit
                }
            }
        }
    }
</script>

<style scoped>

</style>