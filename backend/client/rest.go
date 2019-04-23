//Package restclient is the rest client module talking to the RPC server of Harmony blockchain
package restclient

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

const (
	adminKey = "27978f895b11d9c737e1ab1623fde722c04b4f9ccb4ab776bf15932cc72d7c66"
)

//Winner is the structure returned from /winner rest call
type Winner struct {
	Players  string `json:players`
	Balances string `json:balances`
	Success  bool   `json:success`
}

//Player is the structure returned from /result rest call
//All the players in the lottery
type Player struct {
	Players  []string `json:players`
	Balances []string `json:balances`
	Success  bool     `json:success`
}

//GetWinner return the result of a rest api call
func GetWinner(ip, port string) (*Winner, error) {
	url := fmt.Sprintf("http://%s:%s/winner", ip, port)
	response, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("[GetWinner] GET winner error: %s", err)
	}
	if response.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("[GetWinner] can't get winner data")
	}

	contents, err := ioutil.ReadAll(response.Body)
	defer response.Body.Close()

	if err != nil {
		return nil, fmt.Errorf("[GetWinner] failed to read response: %v", err)
	}

	var winner Winner
	err = json.Unmarshal(contents, &winner)

	if err != nil {
		return nil, fmt.Errorf("[GetWinner] failed to unmarshal winner response: %v", err)
	}

	if !winner.Success {
		return &winner, fmt.Errorf("[GetWinner] Failed on blockchain")
	}

	return &winner, nil
}

//GetPlayer return the result of a rest api call
func GetPlayer(ip, port string) (*Player, error) {
	url := fmt.Sprintf("http://%s:%s/result?key=%s", ip, port, adminKey)
	response, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("[GetPlayer] GET result error: %s", err)
	}
	if response.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("[GetPlayer] can't get result data")
	}

	contents, err := ioutil.ReadAll(response.Body)
	defer response.Body.Close()

	if err != nil {
		return nil, fmt.Errorf("[GetPlayer] failed to read response: %v", err)
	}

	var player Player
	err = json.Unmarshal(contents, &player)

	if err != nil {
		return nil, fmt.Errorf("[GetPlayer] failed to unmarshal result response: %v", err)
	}

	if !player.Success {
		return &player, fmt.Errorf("[GetPlayer] Failed on blockchain")
	}

	return &player, nil
}