### Source

> https://www.youtube.com/watch?v=R4AhvYORZRY&t=662s&ab_channel=TraversyMedia

> this git : https://github.com/samedan/2412_mern_jwt_redux_traversy

> folder on h : E:\_apps_2025\2412_traversy_mern_linode

## Use modules instead of require

> package.json -> "type": "module"

### asyncHandler on any request

> userController -> const authUser = asyncHandler()

### ERRORS

> /backend/middleware/errorMiddleware.js -> notFound, errorHandler
> server.js -> app.use(notFound); app.use(errorHandler);


### User in DBB
> create Model : /backend/models/userModel.js

> import model in Controller: userController.js