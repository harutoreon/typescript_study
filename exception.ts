class CustomError extends Error {
  code = "CustomError";

  constructor(message?: string) {
    super(message);
  }
}

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  if (error instanceof CustomError) {
    console.log(`${error.code}: ${error.message}`);
  }
}
//=> CustomError: This is a custom error
