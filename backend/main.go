package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

const LINEBREAK = "\n"

func diagHandler(w http.ResponseWriter, r *http.Request) {

	output := "Request Information:" + LINEBREAK
	output += "--------------------" + LINEBREAK
	output += "URL (Path): " + r.URL.Path + LINEBREAK
	output += "Method: " + r.Method + LINEBREAK
	output += "URL Parameters: " + LINEBREAK

	if len(r.URL.RawQuery) != 0 {
		output += "Raw parameter content: " + r.URL.RawQuery + LINEBREAK
		output += "decomposed parameters: " + LINEBREAK
		for key, val := range r.URL.Query() {
			output += "- " + key + "=" + strings.Join(val, ",") + LINEBREAK
		}
	}

	output += LINEBREAK + "Headers:" + LINEBREAK
	for key, values := range r.Header {
		for _, value := range values {
			output += key + ": " + value + LINEBREAK
		}
	}

	content, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Error parsing request body.", http.StatusInternalServerError)
	}

	output += LINEBREAK + "Body: " + LINEBREAK
	output += string(content)

	_, err = fmt.Fprintf(w, "%v", output)
	if err != nil {
		http.Error(w, "Error when returning output", http.StatusInternalServerError)
	}
}

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		log.Println("$PORT has not been set. Default: 8080")
		port = "8080"
	}

	http.HandleFunc("/diag", diagHandler)

	log.Println("Starting server on port " + port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
