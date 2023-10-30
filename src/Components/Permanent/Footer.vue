<script setup lang="ts">


</script>

<template>
 
    <section>
        <div class="container-footer">
            <div class="content-footer">
                <div class="logo-content">
                    <img class="logo-icone" src="../../assets/images/shared/desktop/logo2.png" alt="logo-icone">
                    <div class="reseaux-icone">
                        <img src="../../assets/images/shared/desktop/facebook.svg" alt="facebook-icone">
                        <img src="../../assets/images/shared/desktop/youtube.svg" alt="facebook-icone">
                        <img src="../../assets/images/shared/desktop/twitter.svg" alt="facebook-icone">
                        <img src="../../assets/images/shared/desktop/pinterest.svg" alt="facebook-icone">
                        <img src="../../assets/images/shared/desktop/instagram.svg" alt="facebook-icone">
                    </div>
                </div>
                <div class="menu-footer">
                    <ul>
                        <li><router-link to="/home">Home</router-link></li>
                        <li><router-link to="/stories">Stories</router-link></li>
                        <li><router-link to="/features">Features</router-link></li>
                        <li><router-link to="/pricing">Pricing</router-link></li>
                    </ul>
                </div>
                <div class="invite">
                    <button class="btn-4">Get an invite</button>
                </div>
                <div class="copyright">
                    <p>Copyright 2023. All Rights Reserved. Developpeur Thibs</p>
                </div>
            </div>
        </div>
    
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
   
.container-footer {
    height: 539px;
    color: var(--secondary-1);
    background-color: var(--primary-1);
    display: flex;
    align-items: center;
    .content-footer {
        width: 80%;
        margin: auto;
        height: 427px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .logo-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 15%;
            .logo-icone {
                width: 60%;
            }
            .reseaux-icone {
                width: 50%;
                display: flex;
                justify-content: space-between;
                }
            }
        .menu-footer {
            text-align: center;
            height: 30%;
            ul {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                li {
                    font-size: 12px;
                    font-weight: bold;
                }
            }
        }     
        .copyright {
            text-align: center;
        }
        .invite {
            .btn-4 {
                width: 172px;
            }
        }
    }
}
@media (min-width: 768px) {
    .container-footer {
        height: 280px;
        .content-footer  {
            height: 55%; 
            width: 90%;
            flex-direction: row;
            .logo-content {
                width: 19%;
                height: 100%;
                .logo-icone {
                    width: 100%;
                }
                .reseaux-icone {
                    width: 100%;
                }
            }
            .menu-footer{
                width: 32%;
                display: flex;
                height: 5%;
                position: absolute;
                ul {
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                }
            }
            .invite {
                position: absolute;
                right: 10%;
            }
            .copyright {
                width: 35%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: end;
            }
        }
    }

}
@media (min-width: 1023px) {
    .container-footer {
        .content-footer {
            width: 75%;
            .menu-footer {
                position: inherit;
                height: 80%;
                ul {
                    flex-direction: column;
                    align-items: start;
                    justify-content: space-between;
                }
            }
            .invite {
                right: 15%;
            }
        }
       
    }

}
</style>
