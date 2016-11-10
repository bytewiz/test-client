import request from "superagent";

const ROOT_URL = "http://localhost:8080/server2_0_war_exploded"


export function getToken(url, data){
  return request
  .post(ROOT_URL+url)
  .send(data)
  .set('Content-Type', 'application/json')

}
