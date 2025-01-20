<template>
	<div>
		<dl-button type="primary" loading>Loading</dl-button>
		<dl-button type="primary" loading>
			<template #loading>
				<dl-icon style="margin-right: 6px" icon="search" spin />
			</template>
			Loading
		</dl-button>
	</div>
</template>
