import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {

  @IsString()
  name: string;
  
  @IsString()
  lastname: string;

  @IsOptional()
  @IsArray()
  emails?: CreateUserEmailDto[]
}

class CreateUserEmailDto  {
  // Email entity
  @IsEmail()
  email: string;
  
  @IsOptional()
  description?: string;

  // ClientEmail Entity
  @IsOptional()
  startDate?: Date;

  @IsOptional()
  endDate?: Date;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  isMain?: boolean;
}






