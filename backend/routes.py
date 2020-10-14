from controllers.signin import Signin



users = {
    "signin": "/signin", "view_func_signin": Signin.as_view("api_signin"),

}
