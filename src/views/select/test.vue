<template>
    <div>
        <DropdownItem v-for="(task,index) in exportTask">
            <div class="menu-item">
                <div class="menu-item-rate" style="margin-bottom:15px;">
                    <Process class="menu-item-rate-ing" />
                    <Icon class="menu-item-rate-ed" />
                    <Icon class="menu-item-rate-ed-inital" />
                    <Icon class="menu-item-rate-ed-error" />
                </div>
                <div class="menu-item-value">
                    <p class="menu-item-value-name"></p>
                    <p class="menu-item-value-name"></p>
                </div>
            </div>
            <div class="bread"></div>
        </DropdownItem>
    </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>
