<template>
	<div>
		<xheader/>
		<xdietMain/>
		<xload/>
	</div>
</template>

<script>
	import xheader from '../base-components/xheader/xheader';
    import xdietMain from '../base-components/xmain/xdiet-main';
    import xload from '../base-components/for-user/xload';

    export default {
        components : {
            xheader,
            xdietMain,
            xload
        }
    }
    
</script>

<style>
	
</style>