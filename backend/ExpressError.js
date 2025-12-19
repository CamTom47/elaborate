export class ExpressError extends Error {
	constructor(status, message) {
		this.status = status;
		this.message = message;
	}
}

//404 Not Found Error
export class NotFoundError extends ExpressError {
	constructor(message = "Not Found") {
		super(message, 404);
	}
}
