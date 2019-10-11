import httpStatus = require("http-status-codes")

const catchAsync = (ftn: (req, res, next) => Promise<any>) => {
	return (rq, rs, nx) => {
		return ftn(rq, rs, nx).catch(error => {
			console.log(error)
			rq
				.status(httpStatus.INTERNAL_SERVER_ERROR)
				.json({
					status: httpStatus.INTERNAL_SERVER_ERROR,
					message: error.message
				})
		})
	}
}

export { catchAsync }