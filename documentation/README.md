// Documentation Practice for API's

# Node API2 Project

## Base URL
http://localhost:5000

## Get All Posts
HTTP Request: GET
URL: /api/posts

### Response

#### 200 (OK)
> Will receive 200 response with an array of all the post objects in the database
```javascript
[
  {
    "id": 1,
    "title": "Post One",
    "contents": "First post contents",
    "created_at": "2020-03-11 7:45PM",
    "updated_at": "2020-03-11 7:45PM"
  },
  {
    "id": 2,
    "title": "Post Two",
    "contents": "Second post contents",
    "created_at": "2020-03-11 7:45PM",
    "updated_at": "2020-03-11 7:45PM"
  },
  {
    "id": 3,
    "title": "Post Three",
    "contents": "Third post contents",
    "created_at": "2020-03-11 7:45PM",
    "updated_at": "2020-03-11 7:45PM"
  }
]
```

#### 500 (Internal Server Error)
> Will return 500 error if there is a problem with the server

## Create a Post
HTTP Request: POST
URL: /api/posts

## Body
| Name    | Type   | Required  | Description   |
| ------- | ------ | --------- | ------------- |
| Title   | String | Yes       | Title of post |
| Content | String | Yes       | Info for post |

### Example
```javascript
{
  "title": "Post title",
  "content": "Post content"
}
```

### Response

#### 201 (Created)
> Will receive a 201 response if post is successfully created. Will need to re-fetch all posts from database
```javascript
{
    "message": "The post was successfully created."
}
```

#### 400 (Bad Request)
> Will return 400 error if required information is missing

#### 500 (Internal Server Error)
> Will return 500 error if there is a problem with the server