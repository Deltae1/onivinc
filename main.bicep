@description('The name of the Static Web App')
param appName string

@description('The location/region for the Static Web App')
param location string = resourceGroup().location

@description('The SKU for the Static Web App')
@allowed(['Free', 'Standard'])
param sku string = 'Free'

@description('The branch to deploy from')
param branch string = 'main'
param repositoryUrl string

resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: appName
  location: location
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    branch: branch
    repositoryUrl: repositoryUrl
    buildProperties: {
      appLocation: 'public'
      outputLocation: ''
      apiLocation: ''
    }
  }
}

output staticWebAppName string = staticWebApp.name
output staticWebAppUrl string = staticWebApp.properties.defaultHostname
output staticWebAppId string = staticWebApp.id
