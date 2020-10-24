import any from './import_default_module.js'
import * as funcs from  './import_module.js'
import {fn2 as func2} from  './import_module.js'

any();
funcs.fn2();
funcs.fn3();
func2()