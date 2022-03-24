<template>
    <ul class="list-group col-md-4">
        <VideoListItem 
        v-for="video in videos"
        :key="video.etag"
        :video="video"
        @videoSelect="onVideoSelect"
        >
        </VideoListItem>
    </ul>
</template>

<script>
    import VideoListItem from './VideoListItem';

    export default {
        name: 'VideoList',
        components: {
            VideoListItem
        },
        // The string in props comes from what you called the property in the parent
        props: {
            // Type Validation - recomended
            videos: Array
        },
        methods: {
            onVideoSelect(video) {
                this.$emit('videoSelect', video);
            }
        }
    };
</script>

<style>

</style>