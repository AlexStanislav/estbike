<template>
    <div class="modal-container" v-if="isVisible">
        <div class="modal-background"></div>
        <div class="modal-content">
            <h1>{{modalTitle}}</h1>
            <div class="right-panel">
                <div class="main-image">
                    <image-zoom :regular="require(`@/assets/img/${modalImage}`)"></image-zoom>
                </div>
                <!-- <img  :src=""> -->
                <div class="modal-gallery">
                    <div v-for="(image, index) of motoInfo.img" :key="index" @click="gallerySelect({index, image})">
                        <img class="gallery-image" :src="require(`@/assets/img/${image}`)">
                    </div>
                </div>
            </div>
            <div class="left-panel">
                <article class="modal-desc">
                    <h3>Descriere</h3>
                    <p>
                        {{motoInfo.description}}
                    </p>
                </article>
                <article class="modal-tech">
                    <h3>Detalii tehnice</h3>
                    <p>
                        <ul>
                            <li v-for="(info, index) of motoInfo.technical" :key="index">
                                {{info.detail}}: <b>{{info.data}}</b>
                            </li>
                        </ul>
                    </p>
                </article>
                <div class="modal-price">Preț: <span>{{localePrice}} &euro;</span></div>
            </div>
            <div class="modal-close" @click="closeModal()">
                <img :src="require('@/assets/img/close.svg')" alt="Close button">
            </div>
        </div>
    </div>
</template>
<script>
import imageZoom from 'vue-image-zoomer';

export default {
    components:{
        imageZoom
    },
    data() {
        return {
            isVisible: false,
            motoInfo: {},
            modalImage: 'Africa-details-bike-image-300x225.png',
            currentImgIndex: 0,
            galleryHTML: document.getElementsByClassName('gallery-image')
        }
    },
    mounted(){
        let self = this
        window.EventBus.listen("showmodal", (data)=>{
            this.isVisible = data.isVisible
            this.motoInfo = data.moto
            setTimeout(()=>{
                self.galleryHTML[self.currentImgIndex].classList.add("active-gallery")
            }, 300)
        })
    },
    methods:{
        gallerySelect(data){
            for (const index of this.galleryHTML) {
                index.classList.remove("active-gallery")
            }
            this.galleryHTML[data.index].classList.add("active-gallery")
            this.modalImage = data.image
        },
        closeModal(){
            this.isVisible = false
        }
    },
    watch: {
        motoInfo: function(newValue){
            this.modalImage = newValue.img[0]
        }
    },
    computed: {
        modalTitle: function(){
            return `${this.motoInfo.brand.charAt(0).toUpperCase() + this.motoInfo.brand.slice(1)} ${this.motoInfo.name} ${(this.motoInfo.category.charAt(0).toUpperCase() + this.motoInfo.category.slice(1))}`
        },
        localePrice: function(){
            let price = parseInt(this.motoInfo.price, 10)
            let localePrie = price.toLocaleString('ro-RO')
            return localePrie
        }
    },
}
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.modal-container{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-background{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $dark-shade;
    opacity: 0.5;
}

.modal-content{
    padding: 2rem;
    width: 60%;
    height: 60%;
    background: white;
    z-index: 2;
    position: relative;
    border-radius: 1rem;
}

.modal-close{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
}

.modal-content{
    display: flex;
    position: relative;
    h1{
        position: absolute;
        top: 0;
        width: 80%;
        margin-left: 10%;
        text-align: center;
        border-bottom: 1px solid;
        padding-bottom: 0.5rem;
    }
}

.right-panel{
    width: 500px;
    position: relative;
    .main-image{
        width: 500px;
        height: 400px;
        position: absolute;
        top: 10%;
        img{
            width: 99%;
            height: auto;
            border: 2px solid $main;
        }
    }
    .modal-gallery{
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        position: absolute;
        bottom: 0;
        overflow-x: auto;
    }
    .gallery-image{
        width: 150px;
        height: auto;
        border: 2px solid $dark-accent;
        cursor: pointer;
    }
}

.active-gallery{
    border: 2px solid $main !important;
}

.left-panel{
    width: 500px;
    margin-left: 2rem;
    margin-top: 2rem;
    .modal-price{
        position: absolute;
        bottom: 3rem;
        font-size: 3rem;
        span{
            color: $main;
        }
    }
}
</style>