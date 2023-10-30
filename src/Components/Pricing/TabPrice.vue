<script setup lang="ts">
import { ref } from 'vue';

const headers = ['Basic', 'Pro', 'Business'];

const data = ref([
  {
    title: 'UNLIMITED STORY POSTING',
    boulean: [
      { data: 'True'},
      { data: 'True'},
      { data: 'True'},
    ],
    images : '/check.svg',
  },
  {
    title: 'UNLIMITED PHOTO UPLOAD',
    boulean: [
      { data: 'True'},
      { data: 'True'},
      { data: 'True'},
    ],
    images : '/check.svg',
  },
  {
    title: 'EMBEDDING CUSTOM CONTENT',
    boulean: [
      { data: ''},
      { data: 'True'},
      { data: 'True'},
    ],
    images : '/check.svg',
  },
  {
    title: 'CUSTOMIZE METADATA',
    boulean: [
      { data: ''},
      { data: 'True'},
      { data: 'True'},
    ],
    images : '/check.svg',
  },
  {
    title: 'ADVANCED METRICS',
    boulean: [
      { data: ''},
      { data: ''},
      { data: 'True'},
    ],
    images : '/check.svg',
  },
  {
    title: 'PHOTO DOWNLOADS',
    boulean: [
      { data: ''},
      { data: ''},
      { data: 'True'},
    ],
    images : '/check.svg',
  },
  {
    title: 'SEARCH ENGINE INDEXING',
    boulean: [
      { data: ''},
      { data: ''},
      { data: 'True'},
    ],
    images : '/check.svg',
  },
  {
    title: 'CUSTOM ANALYTICS',
    boulean: [
      { data: ''},
      { data: ''},
      { data: 'True'},
    ],
    images : '/check.svg',
  },
  // Ajoutez autant de lignes de données que nécessaire
]);


</script>

<template>
 
    <section>
        <div class="container-tableau">
            <div class="title-tab">
                <h2>Compare</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>The Features</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(dataInfo, rowIndex) in data" :key="rowIndex">
                        <td>{{ dataInfo.title }}</td>
                        <td v-for="(cell, cellIndex) in dataInfo.boulean" :key="cellIndex">
                            <div class="iconeTrue-div" v-if="cell.data">
                                <span><img src="../../assets/images/pricing/desktop/check.svg" alt=""></span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="container-mobile-tab">
            <table>
                    <thead>
                        <tr>
                            <th>The Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div class="container-tab-mobile">
                            <tr v-for="(dataInfo, rowIndex) in data" :key="rowIndex">
                                <div class="content-tab-mobile">
                                    <div class="title-mobile">
                                        <td>{{ dataInfo.title }}</td>
                                    </div>
                                    <div class="feature-mobile">
                                        <td v-for="(header, index) in headers" :key="index">{{ header }}</td>
                                    </div>
                                    <div class="icone-mobile">
                                        <td v-for="(cell, cellIndex) in dataInfo.boulean" :key="cellIndex">
                                            <div class="iconeTrue-div" v-if="cell.data">
                                                <span><img src="../../assets/images/pricing/desktop/check.svg" alt=""></span>
                                            </div>
                                        </td>
                                    </div>
                                </div>
                            </tr>
                        </div>
                    </tbody>
                </table>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
.container-tableau {
    display: none;
}
.container-mobile-tab {
    height: 160vh;
    display: flex;
    table {
        width: 80%;
        height: 90%;
        font-size: 12px;
        text-transform: uppercase;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        thead {
            height: 6%;
            letter-spacing: 2px;
            border-bottom: 1px solid black;
            th {
                text-align: start;
            }
        }
        tbody {
            height: 90%;
            width: 100%;
            .container-tab-mobile {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            tr {
                display: flex;
                width: 100%;
                .content-tab-mobile {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    margin: auto;
                    border-bottom: 1px solid black;
                    width: 100%;
                    height: 100%;
                    .title-mobile, .feature-mobile, .icone-mobile {
                        display: flex;
                        justify-content: space-between;
                        width: 95%;
                        }
                        .icone-mobile {
                            width: 90%;
                        }
                    }
                }
            }
    }
}
   
@media (min-width: 768px) {
    .container-mobile-tab {
        display: none;
    }
    .container-tableau {
        height: 140vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
            .title-tab {
                height: 10%;
                display: flex;
                justify-content: center;
                align-items: end;
                h2 {
                    font-size: 40px;
                    letter-spacing: 4.17px;
                    line-height: 48px;
                    text-transform: uppercase;
                }
            }
            table {
                width: 80%;
                height: 75%;
                font-size: 12px;
                text-transform: uppercase;
                margin: auto;
                thead {
                    height: 10%;
                    letter-spacing: 2px;
                    border-bottom: 1px solid black;
                    th:nth-child(1) {
                        width: 25%;
                        text-align: start;
                    }
                    th:nth-child(2), th:nth-child(3), th:nth-child(4) {
                        width: 25%;
                        text-align: center;
                    }
                }
                tbody {
                    td {
                        border-bottom: 1px solid var(--secondary-1);
                    }
                    td:nth-child(1) {
                        width: 30%;
                    }
                    td:nth-child(2), td:nth-child(3), td:nth-child(4) {
                        .iconeTrue-div {
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        img {
                            width: 15px;
                        }
                    }
                }
            }
    }
}
@media (min-width: 1023px) {
    .container-tableau {
    height: 110vh;
    
    table {
        width: 55%;
        height: 75%;
    }
}

}
</style>
