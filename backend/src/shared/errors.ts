class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}

class Unauthorized extends HttpError {
  constructor(message: string) {
    super(message, 401);
  }
}

class NotFound extends HttpError {
  constructor(message: string) {
    super(message, 404);
  }
}

class ArgumentNullException extends HttpError {
  constructor(message: string) {
    super(message, 417);
  }
}

class InternalServerError extends HttpError {
  constructor(message = "Internal Server Error") {
    super(message, 500);
  }
}

const ErrorModule = {
  HttpError,
  Unauthorized,
  NotFound,
  InternalServerError,
  ArgumentNullException,
};

export default ErrorModule;
