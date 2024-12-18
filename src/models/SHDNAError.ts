export class SHDNAError extends Error {
  name: string;
  message: string;
  stack?: string | undefined;
  cause?: string | undefined;

  constructor(message: string, cause?: string) {
    super(message);
    this.name = "Error";
    this.message = message;
    this.cause = cause;
  }
}
