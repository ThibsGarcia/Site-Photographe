<script setup lang="ts">
</script>

<template>
 
    <section>
        <div class="container">
            <div class="content">
                <div class="box">
                  <div class="top">
                        <img src="../../assets/images/features/desktop/responsive.svg" alt="responsive-icon">
                    </div>
                    <div class="down">
                        <h3>100% Responsive</h3>
                        <p>No matter which the device you’re on, our site is fully responsive 
                        and stories look beautiful on any screen.</p>
                    </div>
                </div>
                <div class="box">
                  <div class="top">
                        <img src="../../assets/images/features/desktop/no-limit.svg" alt="no-limit-icon">
                    </div>
                    <div class="down">
                        <h3>No Photo Upload Limit</h3>
                        <p>Our tool has no limits on uploads or bandwidth. Freely upload 
                          in bulk and share all of your stories in one go.</p>
                    </div>
                </div>
                <div class="box">
                  <div class="top">
                        <img src="../../assets/images/features/desktop/embed.svg" alt="embed-icon">
                    </div>
                    <div class="down">
                        <h3>Available to Embed</h3>
                        <p>Embed Tweets, Facebook posts, Instagram media, 
                          Vimeo or YouTube videos, Google Maps, and more. </p>
                    </div>
                </div>
                <div class="box">
                  <div class="top">
                        <img src="../../assets/images/features/desktop/custom-domain.svg" alt="custom-domaine-icon">
                    </div>
                    <div class="down">
                        <h3>Custom Domain</h3>
                        <p>With Photosnap subscriptions you can host your stories 
                          on your own domain. You can also remove our branding! </p>
                    </div>
                </div>
                <div class="box">
                  <div class="top">
                        <img src="../../assets/images/features/desktop/boost-exposure.svg" alt="boost-exposure-icon">
                    </div>
                    <div class="down">
                        <h3>Boost Your Exposure</h3>
                        <p>Users that viewed your story or gallery can easily get notifed of new and 
                          featured stories with our built in mailing list.</p>
                    </div>
                </div>
                <div class="box">
                  <div class="top">
                        <img src="../../assets/images/features/desktop/drag-drop.svg" alt="responsive-icon">
                    </div>
                    <div class="down">
                        <h3>Drag & Drop Image</h3>
                        <p>Easily drag and drop your image and get beautiful shots everytime. 
                          No over the top tooling to add friction to creating stories.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
.container {
  width: 100%;
  height: 350vh;
  display: flex;
  justify-content: space-between;
    .content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      width: 80%;
      height: 92%;
      margin: auto;
        .box {
          width: 100%;
          height: 14%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .down {
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
    }
  }
}



@media (min-width: 768px) {
  .container {
    height: 200vh;
    .content {
      height: 90%;
      width: 90%;
      flex-direction: row;
      align-items: center;
      .box {
      width: calc(47% - 10px); /* Pour tablette, 2 boîtes par ligne */
      height: 25%;
      }
    }
  }
}
@media (min-width: 1023px) {
  .container {
    height: 100vh;
    .content {
      height: 80%;
      .box {
        width: calc(30% - 1.5%); /* Pour ordinateur, 3 boîtes par ligne */
        height: 40%;
        .down {
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
