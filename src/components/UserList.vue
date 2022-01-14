<template>
          <ul>
            <!-- <li v-for="user in users" :key="user.id">
                <h1>Test {{user.first_name}}</h1>
            </li> -->
            <slot v-for="user in users" :key="user.id" :user="user">
                
            </slot>
        </ul>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

</style>