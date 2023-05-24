<template>
    <Head>
        <Title>
            Spotimaker - Home
        </Title>
    </Head>

    <div class="absolute flex flex-col items-center justify-center min-h-screen overflow-x-hidden overflow-y-auto duration-300 4xl:w-1/2 3xl:w-3/4 2xl:w-3/5 xl:w-full xl:p-20 2xl:p-0 lg:w-5/6 hover:border-zinc-600">
        <div class="3xl:h-[50vh] 2xl:h-[65vh] xl:h-[70vh] lg:h-[50vh] h-[70vh] z-20 w-full flex flex-col items-center justify-end">
            <div class="z-20 flex flex-col items-center justify-start w-full m lg:items-start">
                <h1 class="w-full text-center lg:w-4/6 header-main sm:text-2xl lg:text-left">
                    The Playlist Designer
                </h1>

                <p class="w-4/5 text-center header-secondary lg:text-left lg:w-2/5">
                An innovative playlist creator that tunes into your musical preferences and lifestyle with sophisticated algorithms.
                </p>

                <div class="flex flex-row items-center gap-4 px-12 mt-8 lg:gap-6 lg:px-0">
                    <button class="p-3 px-4 text-white btn-primary">
                        Generate a playlist
                    </button>

                    <a href="/" class="btn-secondary">
                        How does it work?
                    </a>
                </div>
            </div>
        </div>
        
        <div class="4xl:h-[125vh] 3xl:h-[150vh] 2xl:h-[175vh] xl:h-[200vh] lg:h-[145vh] h-[300vh] z-20 w-full mt-24 flex flex-col">
            <h1 class="text-4xl font-semibold text-center lg:text-6xl lg:text-left"> 
                Generate playlists <span class="text-opacity-0 bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600">for free.</span>
            </h1>
            <p class="flex items-center justify-center w-full px-8 text-center header-secondary lg:text-left lg:px-0 lg:w-3/5">
                As long as the Spotify API remains freely accessible, we are committed to maintaining Spotimaker as a complimentary service. Our pledge is to provide superior playlist generation capabilities, at no cost to you.
            </p>
            <div class="flex flex-col items-center justify-center w-full h-full gap-16 px-12 lg:px-0 mt-16 lg:mt-4 lg:flex-row">
                <div class="flex flex-col mt-12 lg:mt-8 duration-300 border rounded-lg bg-zinc-900 h-2/6 w-full lg:h-3/5 lg:w-1/3 xl:h-96 xl:w-1/3 2xl:h-64 2xl:w-96 3xl:h-3/5 3xl:w-1/3 4xl:h-72 4xl:w-96 border-zinc-800 hover:border-zinc-600">
                    <h1 class="px-6 mt-8 text-3xl font-semibold 2xl:text-2xl text-zinc-200">
                        Advanced Algorithms
                    </h1>
                    <p class="px-6 pb-8 mt-3 text-xl 2xl:text-base text-zinc-400">
                        By employing Spotify's Recommendation API, Spotimaker crafts playlists attuned to your musical preferences and lifestyle. This method guarantees the utmost precision in playlist creation.
                    </p> 
                </div>

                <div class="flex flex-col mt-12 lg:mt-8 duration-300 border rounded-lg bg-zinc-900 h-2/6 w-full lg:h-3/5 lg:w-1/3 xl:h-96 xl:w-1/3 2xl:h-64 2xl:w-96 3xl:h-3/5 3xl:w-1/3 4xl:h-72 4xl:w-96 border-zinc-800 hover:border-zinc-600">
                    <h1 class="px-6 mt-8 text-3xl font-semibold 2xl:text-2xl text-zinc-200">
                        Machine Learning
                    </h1>
                    <p class="px-6 mt-3 text-xl 2xl:text-base text-zinc-400">
                        Gradually, your curated songs and playlists inform an AI model that discerns your music tastes and lifestyle, leading to highly tailored and precise playlists.
                    </p> 

                    <div class="flex items-center justify-center w-48 w-2/5 h-8 h-20 mt-4 mb-4 ml-6 bg-opacity-50 border rounded-lg xl:h-12 2xl:h-8 bg-sky-400 border-sky-500">
                        <p class="flex items-center justify-center text-sm text-center 2xl:text-xs text-zinc-200">
                            Upcoming Feature    
                        </p>
                    </div>
                </div>

                <div class="flex flex-col mt-12 lg:mt-8 duration-300 border rounded-lg bg-zinc-900 h-2/6 w-full lg:h-3/5 lg:w-1/3 xl:h-96 xl:w-1/3 2xl:h-64 2xl:w-96 3xl:h-3/5 3xl:w-1/3 4xl:h-72 4xl:w-96 border-zinc-800 hover:border-zinc-600">
                    <h1 class="px-6 mt-8 text-3xl font-semibold 2xl:text-2xl text-zinc-200">
                        Artifical Intelligence
                    </h1>
                    <p class="px-6 mt-3 text-xl 2xl:text-base text-zinc-400">
                        Leveraging OpenAI's freely available ChatGPT-2 model, Spotimaker beautifully crafts playlists reflecting your unique music preferences and lifestyle.
                    </p> 

                    <div class="flex items-center justify-center w-48 w-2/5 h-8 h-20 mt-4 mb-4 ml-6 bg-opacity-50 border rounded-lg xl:h-12 2xl:h-8 bg-sky-400 border-sky-500">
                        <p class="flex items-center justify-center text-sm text-center 2xl:text-xs text-zinc-200">
                            Upcoming Feature    
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col items-center justify-center w-full h-full mb-0 xl:mb-32 2xl:mb-64 3xl:mb-80 4xl:mb-96">
                <h1 class="font-semibold text-4xl  lg:text-7xl">
                    Upcoming <span class="text-opacity-0 bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600">updates</span>  
                </h1>
                <p class="w-4/5 mt-8 lg:text-xl text-center header-secondary text-zinc-300">       
                    Development on Spotimaker will continue to enhance its capabilities until the completion of three pivotal features. At that point, the developmental phase will conclude, and the application will maintain its state. These defining features include the integration of Machine Learning AI, the implementation of advanced algorithms, and the addition of a song search functionality to further customize playlist creation.
                </p>
            </div>
        </div>
    </div>
</template>
