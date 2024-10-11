<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <dl-alert type="success">Success alert</dl-alert>
    <dl-alert type="info">Info alert</dl-alert>
    <dl-alert type="warning">Warning alert</dl-alert>
    <dl-alert type="danger">Error alert</dl-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <dl-alert type="success" title="Success alert" />
    <dl-alert type="info" title="Info alert" />
    <dl-alert type="warning" title="Warning alert" />
    <dl-alert type="danger" title="Error alert" />
  </div>
</template>
