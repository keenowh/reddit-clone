import { UsernamePasswordInput } from "./UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
   // Input Validation
   if (!options.email.includes("@")) {
    return [
        {
          field: "email",
          message: "Email is not valid",
        },
      ]
    };

  if (options.username.length <= 2) {
    return [
        {
          field: "username",
          message: "username is not valid",
        },
      ]
    };

  if (options.username.includes('@')) {
    return [
        {
          field: "username",
          message: "Username cannot include an '@'",
        },
      ]
    };

  return null
}