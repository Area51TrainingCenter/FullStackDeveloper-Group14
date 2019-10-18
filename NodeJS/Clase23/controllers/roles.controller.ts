import GenericoController from "./generico.controller";
import { Rol } from '../models';

class Controller extends GenericoController {
	constructor() {
		super(Rol)
	}
}

export default Controller