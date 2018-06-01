<?php
 
dbAddPerson("hallo","hallo1");
function existiertBenutzer($benutzer) {

}

function passwortKorrekt($benutzer, $passwort) {

}

function benutzerRegestrieren($benutzer, $passwort){

}

function passwortAendern($benutzer, $passwort) {

}

function benutzerPunkteAddieren($benutzer, $punkte){

}
function benutzerPunkteSuptrahieren($benutzer, $punkte) {

}
function benutzerPunke($benutzer){

}

function dbAddPerson($name, $passwort) {
    $db = fopen('db.json', 'r+');

    if ($db)
    {
        fseek($db, 0, SEEK_END);

        if (ftell($db) > 0)
        {
            fseek($db, -1, SEEK_END);

            fwrite($db, ',[', 2);

            fwrite($db, json_encode($entry) . ']');
        }
        else
        {
            fwrite($db, json_encode(array($entry)));
        }

            fclose($db);
    }
}
?>