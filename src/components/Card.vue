<template>
    <div class="card-container" @click="openInfo()">
        <div class="card-img">
            <div class="card-gradient"></div>
            <div class="card-img-text">Află mai multe</div>
            <img :src="require(`@/assets/img/${data.thumbnail}`)" alt="">
        </div>
        <div class="card-name">
            {{data.name}}
        </div>
        <div class="card-price"><span class="card-price-wrapper">{{parseInt(data.price, 10).toLocaleString('ro-RO')}} &euro;</span></div>
    </div>
</template>
<script>
export default {
    props:{
        data:{
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    methods: {
    openInfo(){
        let self = this;
        window.EventBus.dispatch("showmodal",{
            isVisible: true,
            moto: self.data
        })
    }
  },
}
</script>
<style lang="scss">
@import "@/assets/scss/imports";

.card-container{
    margin: 0 1rem;
    width: fit-content;
}

.card-img{
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $light-accent;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    img{
        width: 100%;
        height: auto;
    }
}


.card-gradient{
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, $dark-shade, transparent);
    opacity: 0;
    transition: all 0.3s ease-in-out;
}

.card-img-text{
    width: 100%;
    position: absolute;
    text-align: center;
    color: $light-shade;
    bottom: -2rem;
    transition: all 0.3s ease-in-out;
}

.card-name, .card-price{
    text-align: center;
    margin-top: 0.5rem;
    font-weight: bold;
}

.card-name{
    color: $dark-shade;
}

.card-price-wrapper{
    color: $main;
}

.card-img:hover .card-gradient{
    opacity: 1;
}

.card-img:hover .card-img-text{
    bottom: 1rem
}

</style>