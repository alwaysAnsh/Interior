import React from 'react'
import Button from './frequentyUsed/Button'

const Testimonials = () => {
  return (
    <div className='bg-gradient-to-r from-blue-300 to-blue-50' >
        <div class="pb-5">
    <div class="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
        <div class="text-sm font-bold tracking-wider text-indigo-600 uppercase">Testimonials</div>
        <h2 class="max-w-2xl mt-3 text-3xl font-bold font-playfair leading-snug tracking-wide text-black lg:leading-tight lg:text-4xl dark:text-white">Here&#x27;s what our customers said</h2>
        <p class="max-w-2xl py-4 text-lg leading-normal font-maven text-darkblue lg:text-xl xl:text-xl dark:text-gray-300">Wondering what it's like to work with us? Read what our clients have to say about their Digital Interiors experience.</p>
    </div>
    <div class="container p-6 mx-auto mb-10 xl:px-0">
        <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <div class="lg:col-span-2 xl:col-auto">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <p class="sm:text-xl md:text-2xl leading-normal">My<mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">kitchen</mark>was a mess! Now it's beautiful and easy to use, thanks to Digital Interiors. Cooking is fun again!</p>
                    <div class="flex items-center mt-8 space-x-3">
                        <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg" loading="lazy" />
                        </div>
                        <div>
                            <div class="text-lg font-medium">Aditi</div>
                            <div class="text-gray-600 dark:text-gray-400">Software Engineer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <p class="sm:text-lg md:text-2xl leading-normal">My apartment was messy! <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">Digital Interiors</mark> helped organize with cool storage. Now finding instruments is easy, practice is peaceful. Makes music even better!"</p>
                    <div class="flex items-center mt-8 space-x-3">
                        <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            {/* <img alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" /> */}
                            <img alt="Avatar" src="https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg" loading="lazy" />
                        </div>
                        <div>
                            <div class="text-lg font-medium">Vikram</div>
                            <div class="text-gray-600 dark:text-gray-400">Musician </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <p class="sm:text-lg md:text-2xl leading-normal">Clutter drove me crazy! <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">Digital Interiors</mark>hid it all with great storage. Now my home is calm and focused, perfect for planning lessons. They get a gold star!


</p>
                    <div class="flex items-center mt-8 space-x-3">
                        <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            {/* <img alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" /> */}
                            <img alt="Avatar" src="https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg" loading="lazy" />
                        </div>
                        <div>
                            <div class="text-lg font-medium">Rahul</div>
                            <div class="text-gray-600 dark:text-gray-400">Teacher</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        
    </div>
  )
}

export default Testimonials