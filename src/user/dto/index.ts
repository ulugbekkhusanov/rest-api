export class UserDto {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly phone: number;
  readonly status: boolean;
  readonly images: string[];
}