import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';
import { PhoneKind } from '../../local/phone.entity';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsOptional()
  @IsArray()
  emails?: CreateUserEmailDto[];

  @IsOptional()
  @IsArray()
  phones?: CreateUserPhoneDto[];

  @IsOptional()
  @IsArray()
  websites?: CreateUserWebsitesDto[];

  @IsOptional()
  @IsArray()
  properties?: CreateUserPropertiesDto[];
}

export class CreateUserEmailDto {
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

export class CreateUserPhoneDto {
  // Phone entity
  @IsString()
  phoneNumber: string;

  @IsOptional()
  phoneKind?: PhoneKind;

  @IsOptional()
  description?: string;

  // ClientPhone Entity
  @IsOptional()
  startDate?: Date;

  @IsOptional()
  endDate?: Date;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  isMain?: boolean;
}

export class CreateUserWebsitesDto {
  // Website entity
  @IsString()
  website: string;

  @IsOptional()
  description?: string;

  // ClientWebsite Entity
  @IsOptional()
  startDate?: Date;

  @IsOptional()
  endDate?: Date;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  isMain?: boolean;
}

// TODO: Better validation for the address fields
export class CreateUserPropertiesDto {
  // Property entity
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  zipCode: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  description?: string;

  // ClientProperty Entity
  @IsOptional()
  startDate?: Date;

  @IsOptional()
  endDate?: Date;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  isMain?: boolean;
}
