import multer = require("multer")

const upload = () => {
	const opciones: any = {}

	const opts: any = {
		destination(req, file, cb) {
			cb(null, "public/cv")
		},
		filename(req, file, cb) {
			//req.body["foto"] = file.originalname
			cb(null, file.originalname)
		}
	}


	opciones.storage = multer.diskStorage(opts)

	return multer(opciones).single("foto")
}

export { upload }