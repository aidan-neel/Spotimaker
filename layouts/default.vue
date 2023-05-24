<template>
    <div>
        
        <main class="relative flex flex-col items-center justify-center w-screen h-screen min-h-screen overflow-y-auto bg-zinc-950">
            <img src="~/assets/background.png" class="absolute z-10 object-cover w-screen h-screen mb-auto bg-cover">
            <div class="flex justify-center w-screen h-screen lg:w-3/4">
                <slot />
            </div>
        </main>
        
        <div class="fixed z-0 w-screen h-screen bg-zinc-950" />

        <div></div>
    </div>
</template>
