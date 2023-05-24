<script lang="js">
    let active = false

    export default {
        data() {
            return {
            active: false
            }
        },
        methods: {
            changeActive() {
                this.active = !this.active
                console.log(this.active)
            }
        }
    }
</script>

<template>
        <div class="absolute top-0 z-20 flex flex-row invisible overflow-x-hidden sm:invisible lg:visible xl:h-32 xl:w-full 2xl:h-40 3xl:h-24 4xl:w-2/4 3xl:w-3/4 2xl:w-4/6 lg:w-5/6 lg:h-40 md:w-full">
            <section class="flex items-center w-1/5 h-full 2xl:w-1/6">
                <NuxtLink to="/" class="text-2xl font-semibold text-white">Spotimaker</NuxtLink>
            </section>

            <section class="flex items-center justify-center w-3/5 h-full">
                <ul class="flex items-center justify-center gap-14">
                    <NuxtLink to="/" class="nav-btn">
                       Contact
                    </NuxtLink>
                    <NuxtLink to="/" class="nav-btn">
                       Learn More
                    </NuxtLink>
                    <NuxtLink to="/" class='nav-btn'>
                        Development History
                    </NuxtLink>
                </ul>   
            </section>

            <section class="flex items-center justify-end h-full gap-6 3xl:w-1/5 2xl:w-1/6">
                <button class="btn-primary-spotify p-3 2xl:p-3 2xl:px-6 3xl:px-4 xl:p-3 lg:p-2 lg:w-full lg:text-sm flex items-center flex-row font-semibold gap-2.5 2xl:text-xs 3xl:text-sm w-full justify-center text-center">
                    Authorize with Spotify <img src="~/assets/socials/spotify-mark.png" class="w-6 h-6">
                </button>
            </section>
        </div>

        <div class="fixed absolute top-0 z-30 flex flex-row w-full h-24 sm:visible lg:invisible">
            <section class="flex items-center justify-center w-1/5 h-full">
                <button class=" nav-burger">
                    <img src="~/assets/burger.png" @click="changeActive()" :class="active ? 'rotate-90' : ''" class="z-30 w-6 h-6">
                </button>
            </section>

            <section class="z-20 flex items-center justify-center w-3/5 h-full">

            </section>

            <section class="flex items-center justify-center w-1/5 h-full">
                <NuxtLink to="/" class="flex flex-row items-center justify-center gap-3 px-4 mr-8 font-semibold duration-100 hover:bg-zinc-900 hover:rounded-lg hover:p-3 hover:px-6 lg:hidden" :class="active ? 'invisible' : 'visible'">
                    Login <img src="~/assets/socials/spotify-mark.png" class="w-5 h-5">
                </NuxtLink>
            </section>
        </div>

        <div class="fixed top-0 left-0 z-20 flex flex-col items-center w-screen h-screen overflow-x-hidden border-r bg-opacity-90 backdrop-blur-xl bg-zinc-950 border-zinc-700 lg:hidden" 
 :class="active ? 'visible animate__animated animate__fadeInLeftBig' : 'visible animate__animated animate__fadeOutLeftBig'">
            <section class="flex items-center justify-center w-full h-24 text-xl text-white border-b border-zinc-700">
                Spotimaker
            </section>
            
            <section class="flex flex-col w-full border-b border-zinc-700">
                <NuxtLink to="/contact" class="flex items-center justify-center w-full p-12 text-2xl font-semibold text-center duration-100 rounded-md hover:bg-zinc-950">
                    Contact
                </NuxtLink>

                <NuxtLink to="/learn" class="flex items-center justify-center w-full p-12 text-2xl font-semibold text-center duration-100 rounded-md hover:bg-zinc-950">
                    Learn More
                </NuxtLink>

                <NuxtLink to="/history" class="flex items-center justify-center w-full p-12 text-2xl font-semibold text-center duration-100 rounded-md hover:bg-zinc-950">
                    Development History
                </NuxtLink>
            </section>

            <button class="flex flex-row items-center justify-center w-5/6 gap-2 p-4 mt-12 text-center border rounded-full bg-sky-500 border-sky-300 hover:bg-sky-700 hover:border-sky-600">
                Login with Spotify <img src="~/assets/socials/spotify-mark.png" class="w-6 h-6">
            </button>
        </div>
</template>