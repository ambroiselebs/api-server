@echo off
if ["%1"] == [""] (
    echo You must run : .\createController.bat "name of your controller"
    goto end
) else (
    (
    echo(export const %1 ^= ^(req ^,res^) ^=^> ^{
    echo(    res.send^("%1"^)
    echo(^}
    )>src/controllers/%1.js
)