class ExpressError extends Error {
	constructor(status, message) {
		this.status = status;
		this.message = message;
	}
}

//404 Not Found Error
class NotFoundError extends ExpressError {
	constructor(message = "Not Found") {
		super(message, 404);
	}
}

module.exports = {ExpressError, NotFoundError}
