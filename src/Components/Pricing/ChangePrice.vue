<script setup lang="ts">
import { reactive } from 'vue';

const open = reactive<{
    Monthly: boolean,
    Yearly: boolean
}>({
    Monthly: true,
    Yearly: false
})
    
</script>

<template>
 
    <section>
        <div class="container-monthly flex items-center">
            <div class="content flex flex-col justify-between items-center">
                <div class="choice-time flex items-center justify-around">
                    <h3>Monthly</h3>
                    <div class="toggle" @click="open.Monthly = !open.Monthly; open.Yearly = !open.Yearly">
                        <label class="switch">
                            <input type="checkbox" />
                            <span @click="open.Monthly = !open.Monthly; open.Yearly = !open.Yearly"></span>
                        </label>
                    </div>
                    <h3>Yearly</h3>
                </div>
                <div v-if="open.Monthly" class="monthly-temp flex flex-col justify-between">
                    <div class="box flex flex-col justify-around items-center">
                        <div class="top-box flex flex-col justify-around items-center text-center">
                            <div class="title-top">
                                <h3>Basic</h3>
                                <p>Includes basic usage of our platform. Recommended for new and aspiring 
                                    photographers.</p>
                            </div>
                                <div class="price-tablet">
                                    <h3>$ 19.00</h3>
                                    <p>per month</p>
                                </div>
                        </div>
                        <div class="middle-box flex flex-col justify-around items-center">
                            <h3>$ 19.00</h3>
                            <p>per month</p>
                        </div>
                        <div class="down-box">
                            <button class="btn-1">Pick Plan</button>
                        </div>
                    </div>
                    <div class="box flex flex-col justify-around items-center">
                        <div class="top-box flex flex-col justify-around items-center text-center">
                            <div class="title-top">
                                <h3>Pro</h3>
                                <p>More advanced features available. Recommended for photography veterans and professionals.</p>
                            </div>
                                <div class="price-tablet">
                                    <h3>$ 39.00</h3>
                                    <p>per month</p>
                                </div>
                        </div>
                        <div class="middle-box flex flex-col justify-around items-center">
                            <h3>$ 39.00</h3>
                            <p>per month</p>
                        </div>
                        <div class="down-box">
                            <button class="btn-3">Pick Plan</button>
                        </div>
                    </div>
                    <div class="box flex flex-col justify-around items-center">
                        <div class="top-box flex flex-col justify-around items-center text-center">
                            <div class="title-top">
                                <h3>Business</h3>
                                <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                            </div>
                                <div class="price-tablet">
                                    <h3>$ 99.00</h3>
                                    <p>per month</p>
                                </div>
                        </div>
                        <div class="middle-box flex flex-col justify-around items-center">
                            <h3>$ 99.00</h3>
                            <p>per yearly</p>
                        </div>
                        <div class="down-box">
                            <button class="btn-1">Pick Plan</button>
                        </div>
                    </div>
                </div>
                <div v-if="open.Yearly" class="monthly-temp flex flex-col justify-between">
                    <div class="box flex flex-col justify-around items-center">
                        <div class="top-box flex flex-col justify-around items-center text-center">
                            <div class="title-top">
                                <h3>Basic</h3>
                                <p>Includes basic usage of our platform. Recommended for new and aspiring 
                                    photographers.</p>
                            </div>
                                <div class="price-tablet">
                                    <h3>$ 190.00</h3>
                                    <p>per yearly</p>
                                </div>
                        </div>
                        <div class="middle-box flex flex-col justify-around items-center">
                            <h3>$ 190.00</h3>
                            <p>per yearly</p>
                        </div>
                        <div class="down-box">
                            <button class="btn-1">Pick Plan</button>
                        </div>
                    </div>
                    <div class="box flex flex-col justify-around items-center">
                        <div class="top-box flex flex-col justify-around items-center text-center">
                            <div class="title-top">
                                <h3>Pro</h3>
                                <p>More advanced features available. Recommended for photography veterans and professionals.</p>
                            </div>
                                <div class="price-tablet">
                                    <h3>$ 390.00</h3>
                                    <p>per yearly</p>
                                </div>
                        </div>
                        <div class="middle-box flex flex-col justify-around items-center">
                            <h3>$ 390.00</h3>
                            <p>per yearly</p>
                        </div>
                        <div class="down-box">
                            <button class="btn-3">Pick Plan</button>
                        </div>
                    </div>
                    <div class="box flex flex-col justify-around items-center">
                        <div class="top-box flex flex-col justify-around items-center text-center">
                            <div class="title-top">
                                <h3>Business</h3>
                                <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                            </div>
                                <div class="price-tablet">
                                    <h3>$ 990.00</h3>
                                    <p>per yearly</p>
                                </div>
                        </div>
                        <div class="middle-box flex flex-col justify-around items-center">
                            <h3>$ 990.00</h3>
                            <p>per month</p>
                        </div>
                        <div class="down-box">
                            <button class="btn-1">Pick Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';

.container-monthly {
    height: 285vh;
    .content {
        height: 95%;
        width: 80%;
        margin: auto;
        .choice-time {
            height: 5%;
            width: 80%;
        }
        .monthly-temp {
            height: 90%;
            .box {
                height: 32%;
                background-color: var(--secondary-3);
                .top-box {
                    height: 30%;
                    width: 80%;
                    .title-top {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .price-tablet {
                        display: none;
                    }
                    h3 {
                        font-size: 24px;
                        font-weight: bold;
                    }
                }
                .middle-box {
                    height: 20%;
                    width: 80%;
                    h3 {
                        font-size: 40px;
                        font-weight: bold;
                    }
                }
                .down-box {
                    width: 80%;
                    .btn-1, .btn-3 {
                        width: 100%;
                        font-size: 12px;
                    }
                }
            }
            .box:nth-child(2) {
                background-color: var(--primary-1);
                color: var(--secondary-2);
            }
        }
    }
}

/**toggle switch */
.toggle {
.switch {
	display: inline-block;
	position: relative;
	width: 70px;
	height: 40px;
	cursor: pointer;
	overflow: hidden;
}
.switch input {
	position: absolute;
	top: -30px;
	left: -30px;
	width: 0;
	height: 0;
}

.switch input + span {
 	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #dfdfdf;
	border-radius: 20px;
}

.switch input:checked + span {
	background: var(--primary-1);
}

.switch input + span:before {
	content: "";
	display: inline-block;
	position: absolute;
	top: 50%;
	left: 4px;
	width: 32px;
	height: 32px;
	background: var(--primary-1);
	border-radius: 50%;
	transform: translateY(-50%);
	transition: all .5s;
}

.switch input:checked + span:before {
	left: 34px;
    background-color: var(--secondary-2);
}
}



@media (min-width: 768px) {
.container-monthly {
        height: 200vh;
    .content {
        height: 90%;
        .choice-time {
            height: 6%;
            width: 50%;
        }
        .monthly-temp {
            height: 90%;
            .box {
                height: 32%;
                align-items: start;
                justify-content: space-evenly;
                
                .top-box {
                    width: 100%;
                    height: 40%;
                    justify-content: space-between;
                    align-items: start;
                    flex-direction: row;
                    .title-top {
                        width: 40%;
                        height: 100%;
                    }
                    .price-tablet {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: end;
                        width: 40%;
                        height: 75%;
                        h3 {
                            font-size: 40px;
                        }
                    }
                }
                .middle-box {
                    display: none;
                }
                .down-box {
                    width: 40%;
                }
            }
        }
    }
}
 
}
@media (min-width: 1023px) {
    .container-monthly {
    height: 95vh;
    .content {
        height: 550px;
        width: 95%;
        margin: auto;
        .choice-time {
            height: 10%;
            width: 25%;
        }
        .monthly-temp {
            height: 85%;
            width: 90%;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            .box {
                width: 30%;
                height: 88%;
                background-color: var(--secondary-3);
                align-items: center;
                .top-box {
                    height: 55%;
                    width: 80%;
                    flex-direction: column;
                    align-items: center;
                    .title-top {
                        height: 50%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .price-tablet {
                        display: initial;
                        display: flex;
                        align-items: center;
                        height: 30%;
                        width: 60%;
                    }
                }
                .middle-box {
                    height: 20%;
                    width: 80%;
                    h3 {
                        font-size: 40px;
                        font-weight: bold;
                    }
                }
                .down-box {
                    width: 80%;
                    .btn-1, .btn-3 {
                        width: 100%;
                        font-size: 12px;
                    }
                }
            }
            .box:nth-child(2) {
                background-color: var(--primary-1);
                color: var(--secondary-2);
                height: 470px;
            }
        }
    }
}

}
</style>
