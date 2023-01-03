// 비즈니스 로직을 실행하는 파트

import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { identity } from 'rxjs';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  private movie: Movie[] = [];

  getAll(): Movie[] {
    return this.movie;
  }

  getOne(id: string): Movie {
    // return this.movie.find((movie) => movie.id === parseInt(id));
    // string을 number로 바꾸는 것
    const movie = this.movie.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID: %{movieId} not found.`);
    }
    return movie;
  }

  create(movieData) {
    this.movie.push({
      id: this.movie.length + 1,
      ...movieData,
    });
  }

  deleteOne(id: string): boolean {
    this.getOne(id);
    this.movie = this.movie.filter((movie) => movie.id !== +id);
    return true;
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movie.push({ ...movie, ...updateData });
  }
}
