<script setup lang="ts">
import { reactive } from 'vue';
import 'animate.css'

const state = reactive({
    open: false,
    close: true
})
</script>

<template>
 
    <section>
        <div class="header-container">
            <div class="header-content">
                <div class="logo-content">
                    <router-link to="/home">
                        <img class="logo" src="../../assets/images/shared/desktop/logo.svg" alt="logo-brand">
                    </router-link>
                </div>
                <div class="right-header">
                    <img @click="state.open = !state.open" src="../../assets/images/shared/mobile/menu.svg" alt="menu">
                    <div class="menu">
                        <div class="left-content">
                            <ul>
                                <li><router-link to="/stories">Stories</router-link></li>
                                <li><router-link to="/features">Features</router-link></li>
                                <li><router-link to="/pricing">Pricing</router-link></li>
                            </ul>
                            <button class="btn-1">Get an invite</button>
                        </div>
                        <div class="right-content"></div>
                    </div>
                </div>
            </div>
                <div @click="state.open = !state.open" v-if="state.open">
                    <Transition name="slide-menu">
                    <div class="mobile-menu">
                        <div class="content-mobile-menu">
                            <div class="top-mobile-menu">
                                <img class="logo-menu" src="../../assets/images/shared/desktop/logo.svg" alt="logo-brand">
                                <img @click="state.close = !state.close"  src="../../assets/images/shared/mobile/close.svg" alt="close-icone">
                            </div>
                            <div class="down-mobile-menu">
                                <div class="down-list">
                                    <ul>
                                        <li @click="state.close = !state.close"><router-link to="/stories">Stories</router-link></li>
                                        <li @click="state.close = !state.close"><router-link to="/features">Features</router-link></li>
                                        <li @click="state.close = !state.close"><router-link to="/pricing">Pricing</router-link></li>
                                    </ul>
                                </div>
                                <div class="down-ligne"></div>
                                <div class="btn-menu">
                                    <button class="btn-1">Get an invite</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
   
.header-container {
    height: 10vh;
    width: 100%;
    .header-content {
        width: 90%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right-header {
            img {
                cursor: pointer;
            }
            .menu {
                display: none;
            }
        }
    }
}
/**Transition open menu mobile */
.slide-menu-enter-active, .slide-menu-leave-active {
    transition: all 0s;
}
.slide-menu-enter, .slide-menu-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateY(-100%);
  opacity: 0;

}
.mobile-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 55%;
    background-color: var(--secondary-2);
    display: flex;
    align-items: center;
    .content-mobile-menu {
        width: 90%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top-mobile-menu {
            height: 18%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo-menu {
                width: 170px;
                height: 16px;
            }
            img {
                height: 15px;
                cursor: pointer;
            }
        }
        .down-mobile-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 80%;
            width: 100%;
            .down-list {
                height: 50%;
                width: 80%;
                ul {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                }
            }
            .down-ligne {
                height: 1px;
                width: 80%;
                background-color: var(--secondary-1);
            }
            .btn-menu {
                .btn-1 {
                    width: 310px;
                }
            }
        }
    }
}

@media (min-width: 768px) {
.header-container {
    .header-content {
        .right-header {
            width: 75%;
            img {
                display: none;
            }
            .menu {
                display: inherit;
                .left-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    ul {
                        display: flex;
                        justify-content: space-around;
                        width: 70%;
                        li {
                            font-weight: bold;
                            font-size: 12px;
                            cursor: pointer;
                        }
                        li:hover{
                            color: var(--secondary-1);
                        }
                    }
                    .btn-1 {
                        font-size: 12px;
                        letter-spacing: 2px;
                    }
                }
            }
        }
    }
}

}
@media (min-width: 1023px) {
.header-container {
    .header-content {
        .right-header {
            width: 70%;
            .menu {
                .left-content {
                    ul {
                        display: flex;
                        justify-content: space-around;
                        width: 40%;
                        
                    }
                }
            }
        }
    }
}

}
</style>
