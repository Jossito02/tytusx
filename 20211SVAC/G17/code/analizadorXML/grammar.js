/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,10],$V1=[1,12],$V2=[6,11,21,24],$V3=[1,20],$V4=[1,23],$V5=[1,29],$V6=[11,21],$V7=[2,16,18],$V8=[11,21,24],$V9=[2,22,26,28];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"ini":3,"CUERPO":4,"LISTA_OBJETO":5,"EOF":6,"ETIQUETACONFIGURACION":7,"OBJETO":8,"OBJETODOBLE":9,"OBJETOSIMPLE":10,"Texto":11,"ETIQUETAABRE":12,"ETIQUETACIERRE":13,"InicioEtiquetaConf":14,"LISTA_ATRIBUTOSCONF":15,"CierreEtiquetaConf":16,"ATRIBUTOCONF":17,"AtributoConf":18,"IgualAtributoConf":19,"ValorAtributoConf":20,"InicioEtiquetaI":21,"CierreEtiquetaI":22,"LISTA_ATRIBUTOS":23,"InicioEtiquetaC":24,"CierreEtiquetaC":25,"FinEtiquetaI":26,"ATRIBUTO":27,"AtributoEtiqueta":28,"IgualAtributo":29,"ValorAtributo":30,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",11:"Texto",14:"InicioEtiquetaConf",16:"CierreEtiquetaConf",18:"AtributoConf",19:"IgualAtributoConf",20:"ValorAtributoConf",21:"InicioEtiquetaI",22:"CierreEtiquetaI",24:"InicioEtiquetaC",25:"CierreEtiquetaC",26:"FinEtiquetaI",28:"AtributoEtiqueta",29:"IgualAtributo",30:"ValorAtributo"},
productions_: [0,[3,1],[3,1],[4,2],[4,3],[5,2],[5,1],[8,1],[8,1],[8,1],[9,2],[9,3],[7,3],[7,2],[7,3],[15,2],[15,1],[15,2],[17,3],[12,2],[12,3],[12,3],[13,2],[10,2],[10,3],[10,3],[23,2],[23,1],[23,2],[27,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

      this.$=$$[$0]; grafo.generarPadre(1,"INICIO");
      grafo.generarHijos("INICIO");
      var retornoErrores = Object.assign([], ListaErrores);
      ListaErrores = [];
      var retornoGrafo = Object.assign({}, grafo);
      grafo = new grafoCST();
      return {datos:this.$,nodes:retornoGrafo.pilaNodos,edges:retornoGrafo.PilaEdges,tabla:retornoGrafo.TablaGramatica,errores:retornoErrores}
    
break;
case 2:

      ListaErrores.push({Error:'Error sintactico irrecuperable',tipo:"Semantico", Linea: this._$.first_line , columna: this._$.first_column}) 
      var retornoErrores = Object.assign([], ListaErrores);
      ListaErrores = [];
      var retornoGrafo = Object.assign({}, grafo);
      grafo = new grafoCST();
      return {datos:[],edges:[],nodes:[],errores:retornoErrores}
    
break;
case 3:
 
      this.$ = new helpers.Objeto("/",[],$$[$0-1],this._$.first_line, this._$.first_column);  
			grafo.generarPadre(1,"LISTA_OBJETO");
      grafo.generarHijos("LISTA_OBJETO")
      grafo.generarTexto("Cuerpo.entorno = ListaObjeto.entorno")
		
break;
case 4:
 
      this.$ = new helpers.Objeto("/",$$[$0-2],$$[$0-1],this._$.first_line, this._$.first_column); 
			grafo.generarPadre(2,"LISTA_OBJETO");
      grafo.generarPadre(1,"ETIQUETACONFIGURACION");
      grafo.generarHijos("ETIQUETACONFIGURACION","LISTA_OBJETO")
      grafo.generarTexto("Cuerpo.entorno = ListaObjeto.entorno; Cuerpo.configuraciones = EtiquetaConfiguracion.configuraciones")
		
break;
case 5:
 
    this.$ = $$[$0-1]; this.$.push($$[$0].texto); 
    grafo.generarPadre(2,"OBJETO");
    grafo.generarPadre(1,"LISTA_OBJETO");
    grafo.generarHijos("LISTA_OBJETO","OBJETO")
    grafo.generarTexto('ListaObjeto.entorno = ListaObjeto_1.entorno; LostaObjeto.entorno.set(Objeto.val)')
  
break;
case 6:
 
    this.$ = $$[$0].esTexto ? $$[$0].texto: new Array($$[$0].texto); 
    grafo.generarPadre(1,"OBJETO");
    grafo.generarHijos("OBJETO") 
    grafo.generarTexto(`ListaObjeto.entorno = new Entorno(); LostaObjeto.entorno.set(Objeto.val)`)
  
break;
case 7:
 
    this.$ = { texto:$$[$0], esTexto:false}; 
    grafo.generarPadre(1,"OBJETODOBLE");
    grafo.generarHijos("OBJETODOBLE")
    grafo.generarTexto("Objeto.val = ObjetoDoble.val")
  
break;
case 8:
 
    this.$ = { texto:$$[$0], esTexto:false}; 
    grafo.generarPadre(1,"OBJETOSIMPLE");
    grafo.generarHijos("OBJETOSIMPLE")
    grafo.generarTexto("Objeto.val = ObjetoSimple.val")
  
break;
case 9:
 
    this.$ = { texto:helpers.CambiarCodificacion($$[$0],tipoCodificacion), esTexto:true}; 
    grafo.generarHijos("texto")
    grafo.generarTexto("Texto.val=texto")
  
break;
case 10:

			this.$ = objetoCorrecto($$[$0-1].tipo, $$[$0],this._$.first_line,this._$.first_column) ? new helpers.Objeto($$[$0-1].tipo, $$[$0-1].atributos, [], this._$.first_line, this._$.first_column) : null;
			grafo.generarPadre(2,"ETIQUETACIERRE");
      grafo.generarPadre(1,"ETIQUETAABRE");
      grafo.generarHijos("ETIQUETAABRE","ETIQUETACIERRE")
      grafo.generarTexto(`if(EtiquetaAbre.nombre==EtiquetaCierra.nombre){ ObjetoDoble.val = new Etiqueta(EtiquetaAbre.nombre) } else { new Error() }`)
		
break;
case 11:
 
			this.$ = objetoCorrecto($$[$0-2].tipo, $$[$0]) ? new helpers.Objeto($$[$0-2].tipo, $$[$0-2].atributos, $$[$0-1], this._$.first_line, this._$.first_column) : null;
			grafo.generarPadre(3,"ETIQUETACIERRE");
      grafo.generarPadre(2,"LISTA_OBJETO");
      grafo.generarPadre(1,"ETIQUETAABRE");
      grafo.generarHijos("ETIQUETAABRE","LISTA_OBJETO","ETIQUETACIERRE")
      grafo.generarTexto(`if(EtiquetaAbre.nombre==EtiquetaCierra.nombre){ ObjetoDoble.val = new Etiqueta(EtiquetaAbre.nombre,Lista_Objetos.entorno); } else { new Error() }`)
		
break;
case 12:
 
    this.$ = $$[$0-1]; grafo.generarPadre(2,"LISTA_ATRIBUTOSCONF");
    grafo.generarHijos($$[$0-2],"LISTA_ATRIBUTOSCONF",$$[$0]) 
    grafo.generarTexto(`EtiquetaConfiguracion.configuraciones=Lista_AtributosConf.configuraciones; `)
  
break;
case 13:
 
    this.$ = []; 
    grafo.generarHijos($$[$0-1],$$[$0])
    grafo.generarTexto(`EtiquetaConfiguracion.configuraciones=[]`)
  
break;
case 14:
 
    ListaErrores.push({Error:'Este es un error Sintactico: ' + $$[$0-1] ,tipo:"Semantico", Linea: this._$.first_line , columna: this._$.first_column})
    this.$= {tipo:$$[$0-2],atributos:[]}
    this.$=[];grafo.generarHijos($$[$0-2],"error",$$[$0-1])
    grafo.generarTexto(`EtiquetaConfiguracion.configuraciones=[]; new Error()`)
  
break;
case 15:
 
      this.$ = $$[$0-1]; this.$.push($$[$0]); 
      grafo.generarPadre(2,"ATRIBUTOCONF");
      grafo.generarPadre(1,"LISTA_ATRIBUTOSCONF");
      grafo.generarHijos("LISTA_ATRIBUTOSCONF","ATRIBUTOCONF")  
      grafo.generarTexto(`Lista_AtributoConf.configuraciones=Lista_AtributoConf.configuraciones; Lista_AtributoConf.configuraciones.push(AtributoConf.configuracion)`)
    
break;
case 16:
 
      this.$ = []; 
      this.$.push($$[$0]); 
      grafo.generarPadre(1,"ATRIBUTOCONF");
      grafo.generarHijos("ATRIBUTOCONF") 
      grafo.generarTexto(`Lista_AtributoConf.configuraciones= []; Lista_AtributoConf.configuraciones.push(AtributoConf.configuracion)`)
    
break;
case 17:
 
      this.$=$$[$0-1]; grafo.generarPadre(1,"LISTA_ATRIBUTOSCONF"); grafo.generarHijos("ATRIBUTO","error") 
      ListaErrores.push({Error:'Error sintactico se recupero en ' + $$[$0] ,tipo:"Semantico", Linea: this._$.first_line , columna: this._$.first_column})  
      grafo.generarTexto(`Lista_AtributoConf.configuraciones=Lista_AtributoConf.configuraciones; new Error()`)
    
break;
case 18:
 
      this.$ = new helpers.Atributo($$[$0-2],$$[$0],this._$.first_line, this._$.first_column); 
      grafo.generarHijos($$[$0-2],$$[$0-1],$$[$0]);
      if ($$[$0-2] == 'encoding') tipoCodificacion =  $$[$0]
      grafo.generarTexto(`AtributoConf.configuracion = new Configuracion(${$$[$0-2]},${$$[$0]},${this._$.first_line},${this._$.first_column})`)
    
break;
case 19:
 
      this.$ = {tipo:$$[$0-1], atributos:[]}; 
      grafo.generarHijos($$[$0-1],$$[$0]) 
      grafo.generarTexto(`EtiquetaAbre.nombre = ${$$[$0-1].replace("<","")}`)
    
break;
case 20:
 
      this.$ = {tipo:$$[$0-2], atributos:$$[$0-1]}; grafo.generarPadre(2,"LISTA_ATRIBUTOS");
      grafo.generarHijos($$[$0-2],"LISTA_ATRIBUTOS",$$[$0])  
      grafo.generarTexto(`EtiquetaAbre.nombre = ${$$[$0-2].replace("<","")}; EtiquetaAbre.entorno = Lista_Atributos.entorno`)
    
break;
case 21:
 
      ListaErrores.push({Error:'Error sintactico se recupero en ' + $$[$0-1] ,tipo:"Semantico", Linea: this._$.first_line , columna: this._$.first_column})
      this.$= {tipo:$$[$0-2],atributos:[]}
      grafo.generarHijos($$[$0-2],"error",$$[$0])
      grafo.generarTexto(`EtiquetaAbre.nombre = ${$$[$0-2].replace("<","")};new Error()`)
    
break;
case 22:
 
      this.$ = $$[$0-1]; 
      grafo.generarHijos($$[$0-1],$$[$0]) 
      grafo.generarTexto(`EtiquetaCierre.nombre = ${$$[$0-1].replace("</","")}`)
    
break;
case 23:
 
      this.$ = new helpers.Objeto($$[$0-1],[],[],this._$.first_line, this._$.first_column); 
      grafo.generarHijos($$[$0-1],$$[$0]) 
      grafo.generarTexto(`ObjetoSimple.val = new Etiqueta(${$$[$0-1].replace("<","")})`)
    
break;
case 24:
 
      this.$ = new helpers.Objeto($$[$0-2],$$[$0-1],[],this._$.first_line, this._$.first_column); 
      grafo.generarPadre(2,"LISTA_ATRIBUTOS");
      grafo.generarHijos($$[$0-2],"LISTA_ATRIBUTOS",$$[$0]) 
      grafo.generarTexto(`ObjetoSimple.val = new Etiqueta(${$$[$0-2].replace("<","")},Lista_Astributos)`)
    
break;
case 25:
 
      ListaErrores.push({Error:'Error sintactico se recupero en ' + $$[$0-1] ,tipo:"Semantico", Linea: this._$.first_line , columna: this._$.first_column})
      this.$= {tipo:$$[$0-2],atributos:[]}
      grafo.generarHijos($$[$0-2],"error",$$[$0])
      grafo.generarTexto(`ObjetoSimple.val = new Etiqueta(${$$[$0-2].replace("<","")});new Error()`)
    
break;
case 26:
 
      this.$ = $$[$0-1]; this.$.push($$[$0]); 
      grafo.generarPadre(2,"ATRIBUTO");
      grafo.generarPadre(1,"LISTA_ATRIBUTOS");
      grafo.generarHijos("LISTA_ATRIBUTOS","ATRIBUTO") 
      grafo.generarTexto(`Lista_Atributos.entorno = Lista_Atributos_1.entorno;  Lista_Atributos.set(Atributo.valor)`)
    
break;
case 27:
 
      this.$ = []; 
      this.$.push($$[$0]); 
      grafo.generarPadre(1,"ATRIBUTO");
      grafo.generarHijos("ATRIBUTO")
      grafo.generarTexto(`Lista_Atributos.entorno = new Entorno("Atributos"); Lista_Atributos.entorno.set(Atributo.valor)`)
    
break;
case 28:
 
      this.$=$$[$0-1]; grafo.
      generarPadre(1,"LISTA_ATRIBUTOS");
      grafo.generarHijos("ATRIBUTO","error");
      grafo.generarTexto(`Lista_Atributos.entorno=Lista_Atributos_1.entorno new Error()`)
      ListaErrores.push({Error:'Error sintactico se recupero en ' + $$[$0] ,tipo:"Semantico", Linea: this._$.first_line , columna: this._$.first_column})
    
break;
case 29:

    this.$ = new helpers.Atributo($$[$0-2],$$[$0],this._$.first_line, this._$.first_column); 
    grafo.generarHijos($$[$0-2],$$[$0-1],$$[$0]);
    grafo.generarTexto(`Atributo.valor = new Atributo(${$$[$0-2]},${$$[$0]},${this._$.first_line},${this._$.first_column})`)
  
break;
}
},
table: [{2:[1,3],3:1,4:2,5:4,7:5,8:6,9:8,10:9,11:$V0,12:11,14:[1,7],21:$V1},{1:[3]},{1:[2,1]},{1:[2,2]},{6:[1,13],8:14,9:8,10:9,11:$V0,12:11,21:$V1},{5:15,8:6,9:8,10:9,11:$V0,12:11,21:$V1},o($V2,[2,6]),{2:[1,18],15:16,16:[1,17],17:19,18:$V3},o($V2,[2,7]),o($V2,[2,8]),o($V2,[2,9]),{5:22,8:6,9:8,10:9,11:$V0,12:11,13:21,21:$V1,24:$V4},{2:[1,26],22:[1,27],23:25,26:[1,24],27:28,28:$V5},{1:[2,3]},o($V2,[2,5]),{6:[1,30],8:14,9:8,10:9,11:$V0,12:11,21:$V1},{2:[1,33],16:[1,31],17:32,18:$V3},o($V6,[2,13]),{16:[1,34]},o($V7,[2,16]),{19:[1,35]},o($V2,[2,10]),{8:14,9:8,10:9,11:$V0,12:11,13:36,21:$V1,24:$V4},{25:[1,37]},o($V2,[2,23]),{2:[1,41],22:[1,39],26:[1,38],27:40,28:$V5},{22:[1,43],26:[1,42]},o($V8,[2,19]),o($V9,[2,27]),{29:[1,44]},{1:[2,4]},o($V6,[2,12]),o($V7,[2,15]),o($V7,[2,17]),o($V6,[2,14]),{20:[1,45]},o($V2,[2,11]),o($V2,[2,22]),o($V2,[2,24]),o($V8,[2,20]),o($V9,[2,26]),o($V9,[2,28]),o($V2,[2,25]),o($V8,[2,21]),{30:[1,46]},o($V7,[2,18]),o($V9,[2,29])],
defaultActions: {2:[2,1],3:[2,2],13:[2,3],30:[2,4]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

	var helpers = require('./helpers')
  const {grafoCST} = require('../CST')
  var grafo = new grafoCST; 
	var atributosRaiz = []
  var tipoCodificacion = "utf8"

	function objetoCorrecto (inicio, fin,linea,columna){
    if(!inicio || !fin)
    {
      return false
    }
		inicio = inicio.replace('<','')
		fin = fin.replace('</','')
		if(inicio === fin)
    {
      return true
    }
    else
    {
      ListaErrores.push({Error:'Este es un error Semantico: Etiquetas no coinciden',tipo:"Semantico", Linea: linea , columna:columna})
      return false
    }
	}
  // Codificación global



  function ReemplazaTexto(texto)
  {
    if(!texto)
    {
      return texto
    }
    var result = texto.split("&lt;").join("<");
    result = result.split("&gt;").join(">");
    result = result.split("&amp;").join("&");
    result = result.split("&apos;").join("'");
    result = result.split("&quot;").join(`"`);
    return result
  }

  var ListaErrores = []
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1:
break;
case 2:this.begin("Etiquetai"); return 21
break;
case 3:this.begin("EtiquetaComentario"); 
break;
case 4:
break;
case 5:
break;
case 6:this.popState(); 
break;
case 7:
break;
case 8:
break;
case 9:
break;
case 10: return 28
break;
case 11: return 29
break;
case 12: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 30
break;
case 13: ListaErrores.push({Error:'Este es un error léxico: ' + yy_.yytext,tipo:"Lexico", Linea: yy_.yylloc.first_line , columna:yy_.yylloc.first_column}) 
break;
case 14: this.popState(); return 22
break;
case 15: this.popState(); return 26
break;
case 16: this.begin("Etiquetac"); return 24
break;
case 17:
break;
case 18:
break;
case 19: ListaErrores.push({Error:'Este es un error léxico: ' + yy_.yytext,tipo:"Lexico", Linea: yy_.yylloc.first_line , columna:yy_.yylloc.first_column}) 
break;
case 20: this.popState(); return 25
break;
case 21: this.begin("EtiquetaConf"); return 14
break;
case 22: return 18
break;
case 23: return 19
break;
case 24: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 20
break;
case 25:
break;
case 26: ListaErrores.push({Error:'Este es un error léxico: ' + yy_.yytext,tipo:"Lexico", Linea: yy_.yylloc.first_line , columna:yy_.yylloc.first_column}) 
break;
case 27: this.popState(); return 16
break;
case 28:return 6;
break;
case 29: yy_.yytext = ReemplazaTexto(yy_.yytext); return 11 
break;
case 30: ListaErrores.push({Error:'Este es un error léxico: ' + yy_.yytext,tipo:"Lexico", Linea: yy_.yylloc.first_line , columna:yy_.yylloc.first_column}) 
break;
}
},
rules: [/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:<[A-ZÑa-zñ_][A-ZÑa-zñ0-9_-]*)/i,/^(?:<!--)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:-->)/i,/^(?:[^"-->"]+)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:[A-ZÑa-zñ][A-ZÑa-zñ0-9_-]*)/i,/^(?:=)/i,/^(?:"[^\n\"]*")/i,/^(?:[^A-ZÑa-zñ_=">/]+)/i,/^(?:>)/i,/^(?:\/>)/i,/^(?:<\/[A-ZÑa-zñ_][A-ZÑa-zñ0-9_-]*)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:[^>]+)/i,/^(?:>)/i,/^(?:<\?[A-ZÑa-zñ_][A-ZÑa-zñ0-9_-]*)/i,/^(?:[A-ZÑa-zñ][A-ZÑa-zñ0-9_-]*)/i,/^(?:=)/i,/^(?:"[^\n\"]*")/i,/^(?:[ \r\t]+)/i,/^(?:[^A-ZÑa-zñ_="?>]+)/i,/^(?:\?>)/i,/^(?:$)/i,/^(?:[^<]+)/i,/^(?:.)/i],
conditions: {"EtiquetaComentario":{"rules":[4,5,6,7],"inclusive":false},"EtiquetaConf":{"rules":[22,23,24,25,26,27],"inclusive":false},"Etiquetac":{"rules":[17,18,19,20],"inclusive":false},"Etiquetai":{"rules":[8,9,10,11,12,13,14,15],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,16,21,28,29,30],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}