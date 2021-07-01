domainRequire=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"./../../domain":[function(require,module,exports){
console.log("Loaded from domain.js");
const TODO_MOUNTING_PATH = "/todos";
const openDSU = require("opendsu");
const keyssiresolver = openDSU.loadApi("resolver");
const securityContext = openDSU.loadApi("sc");
let mainDSU;

$$.swarm.describe("leafletLoader", {
    mountDSU: function (mountPath, gtinSSI) {
        rawDossier.readFile("/code/constitution/gtinResolver.js", (err, content) => {
            eval(content.toString());
            let gtinResolver = require("gtin-resolver");
            rawDossier.mount(mountPath, gtinSSI, (err) => {
                rawDossier.listFiles(`${mountPath}/batch/product`, (err, files) => {
                    this.return(err);
                });
            });
        });
    }
});

$$.swarms.describe('toDoSwarm', {
    start: function (data) {
        this.__initMainDSU();
        this.createToDo(data);
    },

    createToDo: function (data) {
        this.__initMainDSU();
        const keyssiSpace = openDSU.loadApi("keyssi");
        mainDSU.getKeySSI((err, ssi) => {
            if (err) {
                console.error(err);
                return this.return(err);
            }
            const templateSSI = keyssiSpace.buildTemplateSeedSSI(keyssiSpace.parse(ssi).getDLDomain());
            keyssiresolver.createDSU(templateSSI, (err, newDossier) => {
                if (err) {
                    console.error(err);
                    return this.return(err);
                }
                newDossier.writeFile('/data', JSON.stringify(data), (err, digest) => {
                    if (err) {
                        console.error(err);
                        return this.return(err);
                    }
                    newDossier.getKeySSI((err, keySSI) => {
                        if (err) {
                            return this.return(err);
                        }
                        this.mountDossier(mainDSU, TODO_MOUNTING_PATH, keySSI)
                    });
                });
            });
        });
    },

    editToDo: function (editedToDo) {
        this.__initMainDSU();
        this.__listToDos((err, todos) => {
            if (err) {
                return this.return(err);
            }
            let wantedToDo = todos.find(todo => todo.path === editedToDo.path);
            if (!wantedToDo) {
                return this.return(new Error('Todo with path ' + editedToDo.path + ' not found.'));
            }

            keyssiresolver.loadDSU(wantedToDo.identifier, (err, todoDossier) => {
                if (err) {
                    return this.return(err);
                }
                todoDossier.writeFile('/data', JSON.stringify(editedToDo), this.return);
            })
        });
    },

    listToDos: function () {
        this.__initMainDSU();
        this.__listToDos((err, data) => {
            if (err) {
                return this.return(err);
            }
            this.return(err, data);
        });
    },

    __listToDos: function (callback) {
        mainDSU.readDir(TODO_MOUNTING_PATH, (err, applications) => {
            if (err) {
                return callback(err);
            }
            let toBeReturned = [];

            let getToDos = (todo) => {
                let appPath = TODO_MOUNTING_PATH + '/' + todo.path;
                mainDSU.readFile(appPath + '/data', (err, fileContent) => {
                    toBeReturned.push({
                        ...JSON.parse(fileContent),
                        path: appPath,
                        identifier: todo.identifier
                    });
                    if (applications.length > 0) {
                        getToDos(applications.shift())
                    } else {
                        return callback(undefined, toBeReturned);
                    }
                });
            };
            if (applications.length > 0) {
                return getToDos(applications.shift());
            }
            return callback(undefined, toBeReturned);
        })
    },

    removeToDo(applicationPath) {
        this.__initMainDSU();
        mainDSU.unmount(applicationPath, (err, data) => {
            if (err) {
                return this.return(err);
            }
            return this.return(err, data);
        });
    },


    mountDossier: function (parentDossier, mountingPath, seed) {
        const PskCrypto = require("pskcrypto");
        const hexDigest = PskCrypto.pskHash(seed, "hex");
        let path = `${mountingPath}/${hexDigest}`;
        parentDossier.mount(path, seed, (err) => {
            if (err) {
                console.error(err);
                return this.return(err);
            }
            this.return(undefined, {path: path, seed: seed});
        });
    },

    __initMainDSU: function () {
        try {
            mainDSU = securityContext.getMainDSU();
        } catch (err) {
            return this.return(err);
        }
    }
});
},{"gtin-resolver":false,"opendsu":false,"pskcrypto":false}],"C:\\xampp\\htdocs\\Pharmaledger\\csc-workspace-main\\csc-cmo-ssapp\\builds\\tmp\\domain_intermediar.js":[function(require,module,exports){
(function (global){(function (){
global.domainLoadModules = function(){ 

	if(typeof $$.__runtimeModules["./../../domain"] === "undefined"){
		$$.__runtimeModules["./../../domain"] = require("./../../domain");
	}
};
if (true) {
	domainLoadModules();
}
global.domainRequire = require;
if (typeof $$ !== "undefined") {
	$$.requireBundle("domain");
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../domain":"./../../domain"}]},{},["C:\\xampp\\htdocs\\Pharmaledger\\csc-workspace-main\\csc-cmo-ssapp\\builds\\tmp\\domain_intermediar.js"])
                    ;(function(global) {
                        global.bundlePaths = {"domain":"code\\constitution\\domain.js"};
                    })(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
                