import multer = require("multer")

const upload = (campo: string) => {
	const opciones: any = {}

	const opts: any = {
		destination(req, file, cb) {
			cb(null, "./public/cv")
		},
		filename(req, file, cb) {
			const nombreOriginal = file.originalname
			const partes = nombreOriginal.split(".")
			const nuevoNombre = partes.length == 1 ? `${partes[0]}-${Date.now()}` : `${partes[0]}-${Date.now()}.${partes[1]}`

			req.body[campo] = nuevoNombre
			cb(null, nuevoNombre)
		}
	}
	opciones.storage = multer.diskStorage(opts)
	return multer(opciones).single(campo)
}

export { upload }