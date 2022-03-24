<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo" />
            <!-- Name is quotes comes from data property -->
            <!-- v-bind:videos can be shortened to :videos -->
            <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList';
    import VideoDetail from './components/VideoDetail';

    const API_KEY = 'removed for privacy - need to get your own';

    export default{
        name: 'App',
        components: {
            SearchBar,
            VideoList,
            VideoDetail
        },
        data() {
            return { videos: [], selectedVideo: null };
        },
        methods: {
            // This function definition is equivalent to
            // onTermChange: function(searchTerm)
            onTermChange(searchTerm) {
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet',
                        q: searchTerm
                    }
                }).then(response => {
                    this.videos = response.data.items;
                });
            },
            onVideoSelect(video) {
                this.selectedVideo = video;
            }
        },
    };
</script>
