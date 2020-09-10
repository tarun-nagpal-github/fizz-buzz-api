# fizz-buzz-api

NodeJs APP for creating an Array of Fizz Buzz

## How to run 

1. clone the repo.
2. npm install 
3. npm start 
4. Open http://localhost:8000/getFizzBuzzData to serve

## How to test the APP on Deployed Server 

I have deployed the APP on codeSandbox. you can hit the post request directly with the link below. 

https://mwfko.sse.codesandbox.io/getFizzBuzzData

## Body 
```
{
  "count" : 10
}
```

## Expected response 
```
{
    "isError": false,
    "responseData": [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz"
    ]
}
```
