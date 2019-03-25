package main

import (
	"os"
	"fmt"
	"net/http"
	"github.com/gorilla/handlers"
	"svalinn/routers"
)

func main() {
	// Get port from .env file; return an empty string when tested locally
	port := os.Getenv("PORT") 
	if port == "" {
		port = "8080" 
	}	
	
	err := http.ListenAndServe(":" + port, 
		handlers.LoggingHandler(os.Stdout,routers.InitRoutes())) 

	fmt.Println("Listening on port:", port)

	if err != nil {
		fmt.Print(err)
	}
}
