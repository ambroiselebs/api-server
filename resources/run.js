export function run(app, fs) {

    let portInfoFile = fs.readFileSync('./src/config.json')
    let serverInfos = JSON.parse(portInfoFile)

    var startTime = performance.now()
    app.listen(serverInfos.server.port, function(){
        console.clear()
        console.log('\x1b[0m');
        var endTime = performance.now()
        console.log('\x1b[32m\x1b[1mAPI-SERVER \x1b[0m\x1b[32mv1.0.0  \x1b[37m\x1b[2mready in \x1b[0m\x1b[37m\x1b[1m'+(Math.round(endTime-startTime))+'\x1b[37m\x1b[2m\x1b[0m ms\x1b[0m');
        console.log('');
        console.log('\x1b[32m➜  \x1b[37m\x1b[1mHostname:    \x1b[0m\x1b[36mhttp://localhost/');
        console.log('\x1b[32m➜  \x1b[37m\x1b[1mPort:        \x1b[0m\x1b[36m3000');
        console.log('\x1b[32m➜  \x1b[37m\x1b[1mURL:         \x1b[0m\x1b[36mhttp://localhost:\x1b[1m3000\x1b[0m\x1b[36m/');
        console.log('');
        console.log('\x1b[37m\x1b[2mMade by ambroiselebs\x1b[37m\x1b[0m');
    })
}
