package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"os"
	"path"
	"time"

	"cloud.google.com/go/firestore"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"

	"github.com/harmony-one/demo-apps/backend/client"
)

var (
	version string
	builtBy string
	builtAt string
	commit  string
)

func printVersion(me string) {
	fmt.Fprintf(os.Stderr, "Harmony (C) 2019. %v, version %v-%v (%v %v)\n", path.Base(me), version, commit, builtBy, builtAt)
	os.Exit(0)
}

var (
	collection = flag.String("collection", "players", "name of collection")
	key        = flag.String("key", "./keys/benchmark_account_key.json", "key filename")
	project    = flag.String("project", "lottery-demo-leo", "project ID of firebase")
	ip         = flag.String("server_ip", "34.222.210.98", "the IP address of the server")

	versionFlag = flag.Bool("version", false, "Output version info")
)

const (
	port = "30000"
)

// Find more examples here: https://cloud.google.com/firestore/docs/quickstart-servers

// AddData --
func AddData(client *firestore.Client) {
	// _, _, err = client.Collection("users").Add(ctx, map[string]interface{}{
	// 	"first": "Ada",
	// 	"last":  "Lovelace",
	// 	"born":  1815,
	// })
	// if err != nil {
	// 	log.Fatalf("Failed adding alovelace: %v", err)
	// }
}

// ReadData --
func ReadData(ctx context.Context, client *firestore.Client, collection string) {
	iter := client.Collection(collection).Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Fatalf("Failed to iterate: %v", err)
		}
		fmt.Println(doc.Data())
	}

}

func main() {
	flag.Parse()
	if *versionFlag {
		printVersion(os.Args[0])
	}

	// Get a Firestore client.
	ctx := context.Background()
	opt := option.WithCredentialsFile(*key)
	client, err := firestore.NewClient(ctx, *project, opt)
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}

	// Close client when done.
	defer client.Close()

	ReadData(ctx, client, *collection)

	player, err := restclient.GetPlayer(*ip, port)
	if err != nil {
		log.Fatalf("GetPlayer Error: %v", err)
	} else {
		fmt.Printf("Player: %v\n", player)
	}

	winner, err := restclient.GetWinner(*ip, port)
	if err != nil {
		log.Fatalf("GetWinner Error: %v", err)
	} else {
		fmt.Printf("Winner: %v\n", winner)
	}

	// wait for the execution of smart contracts
	time.Sleep(2 * time.Second)

	player, err = restclient.GetPlayer(*ip, port)
	if err != nil {
		log.Fatalf("GetPlayer Error: %v", err)
	} else {
		fmt.Printf("Player: %v\n", player)
	}

	os.Exit(0)
}
