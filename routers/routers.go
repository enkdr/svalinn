package routers

import 	(
	"net/http"
	"github.com/gorilla/mux"	
	m "svalinn/middleware"	
	c "svalinn/controllers"	
)

func InitRoutes() *mux.Router {

	router := mux.NewRouter()

	// react 
	fs := http.FileServer(http.Dir("./ui/build/static/"))
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", fs))

	// r := mux.NewRouter()
	s := router.PathPrefix("/api").Subrouter()
	
	// open endpoints
	router.HandleFunc("/", c.Home).Methods("GET")
	router.HandleFunc("/user/new", c.CreateAccount).Methods("POST")
	router.HandleFunc("/user/login", c.Authenticate).Methods("POST")

	// use auth middleware
	s.Use(m.JwtAuthentication)

	s.HandleFunc("/contacts/new", c.CreateContact).Methods("POST")
	s.HandleFunc("/me/contacts", c.GetContactsFor).Methods("GET")

	return router
}
