import {defineNuxtModule, extendPages} from "@nuxt/kit";
import {fileURLToPath} from "node:url";

export default defineNuxtModule({
    setup() {
        extendPages((routes) => {
            routes.push({
                path: '/test',
                file: fileURLToPath(new URL('../dynamic-page.vue', import.meta.url)),
                meta: {
                    someMetaData: true,
                }
            })
        })
    }
})
