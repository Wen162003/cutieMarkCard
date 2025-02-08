<template>
  <div>
    <nav
      class="flex bg-customYellow border-b-8 border-customYellowDark w-full fixed px-10 p-1 top-0 justify-between items-center"
    >
      <router-link to="/"
        ><img class="w-auto h-16" src="https://res.cloudinary.com/dpqutwvio/image/upload/v1738980601/logoCard_yfimle.png" alt="logo"
      /></router-link>

      <slot> </slot>
    </nav>
  </div>
</template>
