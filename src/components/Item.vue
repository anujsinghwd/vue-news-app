<template>
    <div class="mt-3">
        <b-col sm="12">
        <b-card
            :title="news.title"
            :img-src="news.urlToImage"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
                {{ news.description }}
            </b-card-text>
        </b-card>
        </b-col>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: [
        'news'
    ]
}
</script>

<style scoped>
h4{
    font-size: 16px;
    font-weight: bold;
}
p{
    font-size: 13px;
}
</style>