// This is only for test demonstration purposes, remove this as soon as you implemented your own tests.

//import Node.js - Utility Modules : https://www.tutorialspoint.com/nodejs/nodejs_utility_module.htm
import {os} from "os";
//var os = require("os");
import * as net from "net";
//var net = require("net")
import * as dns from "dns";
//var dns = require("dns")

export function addTwo(input: number): number {
    input += 2;
    return input;
}

export function connectGit(input: string): string {
    
    //input += 2;
    //const execSync = require('child_process').execSync;
    //input = execSync('node -v');
    //console.log(input);

    var exec = require('child_process').exec;
    var child;
    var command = "git --version";
    //var stdout = "Done";
    //var error = " Error";
    //var stderr = "Stderr";
    var input = "Git Result";
    child = exec(command,
        function (error: any, stdout :any, Stderr: any){
         
          console.log('stdout: ' + stdout);
          input = stdout;
          
          console.log('stderr: ' + stderr);
          if (error !== null) {
              console.log('exec error: ' + error);
          }
         
        
       });

       return input;
    
}


export function callGit(callback :any):string {
    var exec = require('child_process').exec;
    var child;
    var command = "git --version";
    var stdout = "Done";
    var error = " Error";
    var stderr = "Stderr";
    var input = "Git Result";


    child = exec(command,
        function (error: any, stdout :any, Stderr: any) {

          console.log('stdout: ' + stdout);
          input = stdout;
          //callback(true);
          console.log('stderr: ' + stderr);
          if (error !== null) {
              console.log('exec error: ' + error);
              //callback(false);
          }
          
         
        });

        input ='free memory : ' + os.freemem() + " bytes.\n";
        input = input + 'platform : ' + os.platform()+'\n';
        input = input +  'cpu stats : '+ os.endianness()+'\n';
        input = input + 'dns info : '+os.getServers()+'\n';


    return input;
      
}

