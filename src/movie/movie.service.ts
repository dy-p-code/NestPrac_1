// 비즈니스 로직을 실행하는 파트

import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { identity } from 'rxjs';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  private movie: Movie[] = [];

  getAll(): Movie[] {
    return this.movie;
  }

  getOne(id: number): Movie {
    // return this.movie.find((movie) => movie.id === parseInt(id));
    // string을 number로 바꾸는 것
    const movie = this.movie.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID: %{movieId} not found.`);
    }
    return movie;
  }

  create(movieData: CreateMovieDto) {
    this.movie.push({
      id: this.movie.length + 1,
      ...movieData,
    });
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.movie = this.movie.filter((movie) => movie.id !== id);
    return true;
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movie.push({ ...movie, ...updateData });
  }
}
