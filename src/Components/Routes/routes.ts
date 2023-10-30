import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomeContent from '../HomeContent/HomeContent.vue';
import FeatureContent from '../Features/FeatureContent.vue';
import PricingContent from '../Pricing/PricingContent.vue';
import StoriesContent from '../Stories/StoriesContent.vue';

export const routes : RouteRecordRaw[] = [
    {
        path: '/',
        component: HomeContent,
    },
    {
        path: '/Home',
        component: HomeContent,
    },
    {
        path: '/features',
        component: FeatureContent,
    },
    {
        path: '/pricing',
        component: PricingContent,
    },
    {
        path: '/stories',
        component: StoriesContent,
    },
];
 
export default routes;