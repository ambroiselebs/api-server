@echo off
if ["%1"] == [""] (
    echo You must run : .\createController.bat "name of your controller"
    goto end
) else (
    (
    echo(import fs from ^'fs^'
    echo(
    echo(let rowData ^= fs^.readFileSync^(^'^.^/src^/config^.json^'^)
    echo(let config ^= JSON^.parse^(rowData^)
    echo(
    echo(export const %1 ^= ^(req ^,res^) ^=^> ^{
    echo(    if ^(req^.params^.token ^=^= config^.server^.token^)
    echo(    ^{
    echo(        res^.send^(^{data:^"%1^"^}^)
    echo(    ^} else ^{
    echo(        res^.send^(^{data:^"invalidAPItoken^"^}^)
    echo(    ^}
    echo(^}
    )>src/controllers/%1.js
)