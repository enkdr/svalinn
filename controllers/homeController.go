package controllers

import (
	"net/http"
)

var Home = func(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "ui/build/index.html")
}
