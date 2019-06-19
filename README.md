
# Secure GraphQL endpoints with AWS Cognito User Pools

![nodejs](https://img.shields.io/badge/-nodejs-555555.svg) ![serverless](http://public.serverless.com/badges/v3.svg)

This example adds authentication to GraphQL endpoints provided by AWS AppSync. After setting up this example, AWS Cognito will make sure that only authenticated users can access the secured endpoints.

More info: https://coderecipe.ai/architectures/47858351

### Download the code    


```
git clone https://github.com/CodeRecipe-dev/cognito-appsync.git
```
 
### Deploy to the cloud  


```
cd cognito-appsync

serverless deploy --stage beta

```      

### Usage

To test access to unauthenticated endpoint, run the following curl command with the deployed api key and appsync endpoint:

```
curl -XPOST -H "Content-Type:application/graphql" -H "x-api-key:<appsync-api-key>" -d '{ "query": "query { getMessage(id:1) { id,content,author } }" }'  <appsync-graphql-endpoint>
```

To test access to secured endpoint, create a user in Cognito User Pools, then use the AppSync GUI to login as a user and test:

![Appsync Cogntio](https://coderecipe-crlite-architectures-beta.s3.amazonaws.com/coderecipedevs/Secure+AWS+AppSync+with+AWS+Cognito+User+Pool/appsync-cognito.gif)


### Removal

To remove the stack, run the following command:


```
serverless remove --stage beta
```   