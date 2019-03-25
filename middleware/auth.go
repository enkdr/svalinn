package middleware

import (
	"net/http"
	"strings"
	"os"
	"context"
	"fmt"
	jwt "github.com/dgrijalva/jwt-go"
	u "svalinn/utils"
	"svalinn/models"
)

var JwtAuthentication = func(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		
		response := make(map[string] interface{})
		
		// grab token from header
		tokenHeader := r.Header.Get("Authorization") 

		//token missing - error 403 unauthorised
		if tokenHeader == "" { 
			response = u.Message(false, "Invalid/Malformed auth token")
			w.WriteHeader(http.StatusForbidden)
			w.Header().Add("Content-Type", "application/json")
			u.Respond(w, response)
			return
		}

		//The token normally comes in format `Bearer {token-body}`
		// we check if the retrieved token matched this requirement
		splitted := strings.Split(tokenHeader, " ")
		if len(splitted) != 2 {
			response = u.Message(false, "Invalid/Malformed auth token")
			w.WriteHeader(http.StatusForbidden)
			w.Header().Add("Content-Type", "application/json")
			u.Respond(w, response)
			return
		}
		
		tokenPart := splitted[1] // required token part
		tk := &models.Token{}

		token, err := jwt.ParseWithClaims(tokenPart, tk, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("token_password")), nil
		})

		if err != nil {
			response = u.Message(false, "Malformed authentication token")
			w.WriteHeader(http.StatusForbidden)
			w.Header().Add("Content-Type", "application/json")
			u.Respond(w, response)
			return
		}

		if !token.Valid { //Token is invalid, maybe not signed on this server
			response = u.Message(false, "Token is not valid.")
			w.WriteHeader(http.StatusForbidden)
			w.Header().Add("Content-Type", "application/json")
			u.Respond(w, response)
			return
		}


		fmt.Sprintf("token %", token)

		ctx := context.WithValue(r.Context(), "user", tk.UserId)
		r = r.WithContext(ctx)
		// can now retrieve with  -- user := r.Context().Value("user") . (uint)

		next.ServeHTTP(w,r) 
	})
}
		
