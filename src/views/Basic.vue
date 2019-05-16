<template>
    <div class="basic">
        <div class="basic-container">
            <vue-calendar-custom :datetime="datetime"></vue-calendar-custom>
        </div>
        <div class="choose">
            <month-choose v-model="datetime"></month-choose>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                datetime: new Date(),
            }
        },
    }
</script>

<style lang="scss" scoped>

    .basic {
        position: relative;
        .basic-container {
            position: relative;
            width: 1100px;
            height: 800px;
            margin: 0 auto;
        }
        .choose {
            position: absolute;
            left: 30px;
            top: 20px;
        }
    }
</style>
