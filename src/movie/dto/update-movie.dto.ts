// DTO : 데이터 전송 객체 (data transfer object)

import { IsString, IsNumber } from 'class-validator';
// import { PartialType } from '@nestjs/mapped-types';
// npm install 되지 않아서 에러남

import { CreateMovieDto } from './create-movie.dto';

// export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

export class UpdateMovieDto {}
