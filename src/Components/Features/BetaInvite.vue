<script setup lang="ts">
</script>

<template>
 
    <section>
        <div class="container-beta">
            <div class="content">
                <div class="top">
                    <h2>We’re in beta. Get your invite today!</h2>
                </div>
                <div class="down">
                    <button class="btn-4">Get an Invite</button>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
    .container-beta {
        height: 55vh;
        width: 100%;
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/shared/mobile/bg-beta.jpg);

        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        .content {
            width: 86%;
            height: 55%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: var(--secondary-1);
            margin: auto;
            
            h2 {
                font-weight: bold;
                font-size: 32px;
                text-transform: uppercase;
                letter-spacing: 3.33px;
                line-height: 40px;
            }
            .btn-4 {
                width: 168px;
            }
        }
    }
   

@media (min-width: 768px) {
    .container-beta {
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(../../assets/images/shared/tablet/bg-beta.jpg);
        .content {
            flex-direction: row;
            width: 90%;
            align-items: center;
            .top {
                width: 50%;
            }
        }
    }

}
@media (min-width: 1023px) {
    .container-beta {
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(../../assets/images/shared/desktop/bg-beta.jpg);
        .content {
            width: 80%;
            .top {
                width: 35%;
            }
        }
    }
}
</style>
