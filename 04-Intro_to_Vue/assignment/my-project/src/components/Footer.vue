<!--reusable components-->
<template>
    <!--Bootstrap footer with auto margin-top to stick to bottom-->
    <footer class="mt-auto text-center bg-info-subtle p-2">
        {{ footerText }}
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                //Footer text as variable instead of hardcoded
                footerText: '© 2025 coded by Gao Saipin. All rights reserved.'
            }
        }
    }
</script>