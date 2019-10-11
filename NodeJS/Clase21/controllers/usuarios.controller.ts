import GenericoController from "./generico.controller";
import { Usuario } from '../models';

class Controller extends GenericoController {
	constructor() {
		super(Usuario)
	}
}

export default Controller