<template>
    <div>
        <div class="text-center">
            <b-spinner v-if="seen" variant="primary" label="Text Centered"></b-spinner>
        </div>
        <b-row>
            <Item v-for="news in news_stories" :key="news.url" :news="news" />
        </b-row>
    </div>
</template>

<script>
import axios from "axios"
import Item from "@/components/Item"

export default {
    name: 'Homepage',
    components: {
        'Item': Item
    },
    data: function(){
        return {
            err: '',
            news_stories: [],
            seen: true
        }
    },
    created: function(){
        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9fb1ea4f7c5648be83b99d9f96f710fb')
            .then((response) => {                
                this.news_stories = response.data.articles;
            })
            .catch((err) => {
                this.err = err;
            })
            this.seen = false;
    }
}
</script>