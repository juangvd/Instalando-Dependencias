/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}


document.getElementById('btn-agregar').addEventListener('click', addTask);

document.getElementById('txt-tarea').addEventListener('focus', clearText);

function addTask(){
    let texto = document.getElementById('txt-tarea').value;
    
    let id = Date.now();

    var div = document.createElement("div");
    div.setAttribute('id', "div-"+id);
    div.setAttribute('class','item-check');

    var lbl = document.createElement('label');    
    lbl.setAttribute("for", `chk${id}`);

    var spn = document.createElement('span');    
    spn.innerHTML = texto;
    
    var chk = document.createElement('input');
    chk.setAttribute('id', `chk${id}`);
    chk.setAttribute("type", "checkbox");
    chk.setAttribute('class','chk-tarea filled-in');

    lbl.appendChild(chk);
    lbl.appendChild(spn);

    var img = document.createElement('img');
    img.setAttribute('class','img-exclamacion');
    img.src = "./img/exclamacion.png";
    img.setAttribute('id', id);
    img.addEventListener('click', eliminar);

    div.appendChild(lbl);
    div.appendChild(img);

    document.getElementById('lst-tareas').appendChild(div);

    document.getElementById('txt-tarea').value = "";
}



function eliminar(e){
    document.getElementById('div-'+e.srcElement.id).remove();
}

function clearText(e){
    e.srcElement.value = '';
}