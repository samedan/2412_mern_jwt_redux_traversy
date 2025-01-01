### Source

> https://www.youtube.com/watch?v=R4AhvYORZRY&t=662s&ab_channel=TraversyMedia

# Source git :

> https://github.com/bradtraversy/mern-auth

# This git

> https://github.com/samedan/2412_mern_jwt_redux_traversy

> folder on h : E:\_apps_2025\2412_traversy_mern_linode

### NodeJS, Vite, Redux Toolkit, React Bootstrap

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

## Check for password on login

# Add custom function

> userModel.js -> userSchema.methods.matchPassword()

> userController.js -> if (user && (await user.matchPassword(password))) {}

### User Cookie to check Auth Status

> server.js -> app.use(cookieParser());

# Auth Middleware /middleware/authMiddleware.js

> const protect = ...

> remove password from response: User.findById(decoded.userId).select("-password");

# Use Middleware in routes

> router.route("/profile")
> .get(protect, getUserProfile)
> .put(protect, updateUserProfile);

### FRONTEND

> npm create vite@latest frontend

## Router

# Create routes from components

> main.js -> const router = createBrowserRouter(createRoutesFromElements( <Route)...)

# main.js

```
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
    </Route>
```

# app.js + Outlet: Renders the matching child route of a parent route or nothing if no child route matches

> const App = () => {return (<Outlet />);}

### REDUX Toolkit

> npm i @reduxjs/toolkit react-redux

## Store

> store.js

> main.js -> <Provider store={store}></Provider>
