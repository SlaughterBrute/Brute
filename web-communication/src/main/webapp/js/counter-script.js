/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("counter").addEventListener("click", count);
var value = 0;

function displayCount(jsonCount){
    var json = JSON.parse(jsonCount);
    
    document.getElementById("counter").textContent = json.count;
    value = json.count;
}

function count(){
    var json = JSON.stringify({
        "count": 1
    });
    value++;
    document.getElementById("counter").textContent = value; 
    sendText(json);
}